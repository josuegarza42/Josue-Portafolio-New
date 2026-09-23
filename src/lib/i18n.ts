import spanish from "../data/translations/es.json";
export type Language = "en" | "es";
const translations: Record<string, string> = spanish;
const months: Record<string, string> = { Jan: "ene", Feb: "feb", Mar: "mar", Apr: "abr", May: "may", Jun: "jun", Jul: "jul", Aug: "ago", Sep: "sep", Oct: "oct", Nov: "nov", Dec: "dic" };
export function languageFromPath(pathname: string): Language {
  return /^\/es(?:\/|$)/.test(pathname) ? "es" : "en";
}
export function localizedPath(href: string, language: Language): string {
  if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/garage")) return href;
  const path = href.replace(/^\/es(?=\/|$)/, "") || "/";
  return language === "es" ? `/es${path}` : path;
}
export function translate(text: string, language: Language): string {
  if (language === "en") return text;
  if (Object.hasOwn(translations, text)) return translations[text];
  if (/^(?:Founded )?(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}(?: [—–-] (?:[A-Z][a-z]{2} \d{4}|Present))?$/.test(text)) {
    return text.replace(/Founded /, "Fundada en ").replace(/Present/, "actualidad").replace(/\b[A-Z][a-z]{2}\b/g, month => months[month] ?? month);
  }
  return text.replace(/^(\d+) roles$/, "$1 experiencias").replace(/^(\d+) projects$/, "$1 proyectos").replace(/^(\d+) honors & awards$/, "$1 reconocimientos").replace(/^(\d+) credentials$/, "$1 credenciales").replace(/^(\d+) min read$/, "$1 min de lectura");
}
// Structural IDs, map identifiers and external URLs remain stable.
export function localize<T>(value: T, language: Language, key = ""): T {
  if (["id", "group", "mapName", "email", "companyUrl"].includes(key)) return value;
  if (typeof value === "string") return (key === "href" ? localizedPath(value, language) : translate(value, language)) as T;
  if (Array.isArray(value)) return value.map(item => localize(item, language)) as T;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([field, item]) => [field, localize(item, language, field)])) as T;
  return value;
}
export function createI18n(url: URL) {
  const language = languageFromPath(url.pathname);
  return { language, t: (text: string) => translate(text, language), path: (href: string) => localizedPath(href, language), localize: <T>(value: T) => localize(value, language) };
}
