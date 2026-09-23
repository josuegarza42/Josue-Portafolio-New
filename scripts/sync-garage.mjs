import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Import the standalone site as a self-contained snapshot. The vehicle dossiers
// stay in Carro; building/deploying this repository never needs that local folder.
const root = fileURLToPath(new URL("../", import.meta.url));
const sourceArgument = process.argv[2];
if (!sourceArgument) {
  console.error("Usage: npm run sync:garage -- /path/to/Carro/web");
  process.exit(1);
}
const source = resolve(sourceArgument);
const destination = join(root, "public/garage");
if (source === destination) throw new Error("Choose the original Carro/web folder.");
const targetFor = file => file === "index.html"
  ? join(root, "src/data/garage.html")
  : join(destination, file);

const files = [
  "index.html", "styles.css", "preferences.css", "theme-init.js",
  "locale-en.js", "preferences.js", "content.js", "content-en.js",
  "app.js", "ranking.js",
];
async function collect(directory) {
  for (const entry of await readdir(join(source, directory), { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const relative = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await collect(relative);
    else if (entry.isFile()) files.push(relative);
    else throw new Error(`Unsupported source entry: ${relative}`);
  }
}
for (const directory of ["assets", "docs", "references"]) await collect(directory);

// Read and validate everything before replacing the imported files.
const contents = new Map();
for (const file of files.sort()) contents.set(file, await readFile(join(source, file)));
const html = contents.get("index.html").toString();
if (!html.includes('data-portfolio-back') || !html.includes('href="/"')) {
  throw new Error("The garage must include its link back to the portfolio.");
}
if (!html.includes('content="noindex, nofollow"')) {
  throw new Error("The garage's existing noindex metadata must be preserved.");
}

const manifestPath = join(root, "docs/GARAGE_IMPORT.json");
let previous;
try { previous = JSON.parse(await readFile(manifestPath, "utf8")); }
catch (error) { if (error.code !== "ENOENT") throw error; }
// Do not silently overwrite edits made in the portfolio's imported snapshot.
for (const file of files) {
  let current;
  try { current = await readFile(targetFor(file)); }
  catch (error) { if (error.code === "ENOENT") continue; throw error; }
  const hash = createHash("sha256").update(current).digest("hex");
  if (previous?.files[file]?.sha256 !== hash) {
    throw new Error(`Local changes in imported ${file}; reconcile them before importing.`);
  }
}
if (previous) {
  const removed = Object.keys(previous.files).filter(file => !contents.has(file));
  if (removed.length) throw new Error(`Source files removed; reconcile the snapshot first: ${removed.join(", ")}`);
}
const manifest = { source: "Carro/web", files: {} };
for (const [file, content] of contents) {
  const target = targetFor(file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content);
  manifest.files[file] = { bytes: (await stat(target)).size, sha256: createHash("sha256").update(content).digest("hex") };
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Imported ${contents.size} files for /garage/. The original Carro folder was not changed.`);
