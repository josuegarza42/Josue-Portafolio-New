# Josue Garza — Professional Portfolio

A personal portfolio for my work in **customer experience, AI, automation, and solution delivery**. Built with Astro, with a responsive bento homepage, a complete professional profile with expandable entries, and an animated globe of the countries I have visited.

Available in **English and Spanish**, including the full profile and individual career/project pages. The **EN / ES** selector keeps the current page and section when changing language.

[Website](https://josuegarza.dev/) · [Résumé](https://flowcv.com/resume/its72h4324) · [LinkedIn](https://www.linkedin.com/in/josue-garza/) · [GitHub](https://github.com/josuegarza42)

## Professional focus

I am an **Associate Services Consultant at Zendesk**, based in Mexico City. My work spans solution design, client onboarding, CRM implementation, support automation, and end-to-end project delivery.

The homepage highlights three roles. The full profile combines my [LinkedIn history](https://www.linkedin.com/in/josue-garza/) with the [FlowCV résumé](https://flowcv.com/resume/its72h4324), reviewed on **September 20, 2026**, with dates reconciled directly with me:

| Company | Role | Period |
| --- | --- | --- |
| Zendesk | Associate Services Consultant | Sep 2025 – Present |
| Qualtrics | Senior Specialist, Enterprise Support | May 2024 – Jul 2025 |
| Softdone | Technical Project Manager | Nov 2022 – Aug 2023 |

Selected projects include **Firedots**, a NASA Space Apps Challenge 2023 Global Nominee, and **Elaina**, an AI e-learning research project at Simon Fraser University through Mitacs Globalink.

## Run locally

Use **Node.js 22 LTS** and npm. The project also runs in the local Node.js 26 environment used for this update. No API keys or `.env` file are required for the portfolio.

```bash
git clone https://github.com/josuegarza42/Josue-Portafolio-New.git
cd Josue-Portafolio-New
npm ci
npm run dev
```

Open **http://localhost:4321**. Astro will select another port if 4321 is already occupied; use the URL printed in your terminal. Stop the server with `Ctrl+C`.

For an existing checkout:

```bash
cd ~/Documents/personal-projects/Josue-Portafolio-New
npm run dev
```

### Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact versions in `package-lock.json`. |
| `npm run dev` | Start the development server with hot reload. |
| `npm start` | Alias for the development server. |
| `npm run check` | Check Astro and TypeScript diagnostics. |
| `npm run build` | Generate the production build and Netlify server output. |
| `npm run preview` | Inherited Astro command; the current Netlify server adapter does not provide a preview server. |
| `npm run eslint` | Run the repository's existing ESLint checks. |
| `npm run sync:garage -- /path/to/Carro/web` | Refresh the imported garage from its original local project. Not required to run or build the site. |

For local development, use `npm run dev`. To reproduce the deployed server environment, use a Netlify Deploy Preview rather than `npm run preview`.

Use npm consistently for dependency updates and commit `package-lock.json` when dependencies change. The inherited `pnpm-lock.yaml` is retained, but this setup uses npm.

## What's in the site

| Route | Content |
| --- | --- |
| `/` | Professional introduction, contact links, current role, career summary, Mexico City clock, and globe preview. |
| `/blog` | Complete professional profile: 10 roles, 12 projects, 6 honors and awards, 23 credentials, community, volunteering, education, and languages. |
| `/blog/[id]` | Individual career or project entries. Existing URLs remain available. |
| `/travel` | Globe and a readable list of visited countries, including the United States. |
| `/es/`, `/es/blog`, `/es/travel`, `/es/blog/[id]` | Complete Spanish versions with the same stable entry IDs. |
| `/rss.xml` | Feed of career and project entries. |

The `/blog` path is kept for existing links, even though its content is professional experience rather than a conventional blog.

## Project structure

```text
src/
├── components/          # Bento cards, clock, globe, and reusable UI
├── data/
│   ├── profile.ts       # Shared profile facts, skills, and derived homepage highlights
│   ├── career.ts        # Full structured history, projects, credentials, and recognition
│   ├── travel.ts        # Visited-country labels and map identifiers
│   ├── garage.html      # Imported garage document; rendered at /garage/
│   ├── translations/es.json # Spanish UI and structured profile translations
│   ├── blog-es/         # Complete Spanish versions of the 10 detail articles
│   └── blog/            # Markdown used by the live career/project collection
├── content.config.ts    # Active Astro content loader and schema
├── layouts/             # Page layouts, metadata, and article typography
├── styles/theme.css     # Shared purple accent palette, sampled from the logo
├── lib/
│   ├── constants.ts     # GitHub, LinkedIn, and résumé links
│   └── world.json       # GeoJSON used by the globe
└── pages/               # Homepage, career pages, travel, and RSS
public/                  # Images, fonts, favicon, and social preview image
public/garage/           # Garage scripts, images, documents, and technical PDFs
scripts/sync-garage.mjs  # Repeatable import from Carro/web, with edit protection
docs/DESIGN_REVIEW.md    # Visual decisions and improvement proposals
docs/CONTENT_SOURCES.md  # Source inventory and factual reconciliation
docs/GARAGE_INTEGRATION.md # Integration, updates, and storage behavior
docs/LANGUAGES.md        # Language routes, content maintenance, and checks
```

### Update professional information

1. Review LinkedIn for the full inventory; the résumé is a selection of recent roles, not the complete career history. Resolve factual differences with the profile owner.
2. Update `src/data/career.ts` for `WORK_HISTORY`, `PORTFOLIO_PROJECTS`, `AWARDS`, `CREDENTIALS`, `COMMUNITY`, `VOLUNTEERING`, `EDUCATION`, and `LANGUAGES`. Use `featured: true` to select homepage career highlights and prominent entries; counts are derived automatically.
3. Keep stable entry IDs. Profile anchors use `#experience-{id}` and `#project-{id}`; related awards and community links open the relevant entry automatically, including entries inside a collapsed collection. The `links` arrays hold Markdown, project, and credential URLs explicitly.
4. Update `src/data/profile.ts` for identity, metadata, and skill groups. `EXPERIENCE` is derived from featured `WORK_HISTORY` entries so the homepage does not become the full résumé.
5. Keep the corresponding Markdown in `src/data/blog/` aligned for existing detail URLs. `period` controls the visible date range; `pubDate` is used by the content feed.
6. Run the checks and review desktop, mobile, keyboard navigation, expanded entries, and links into collapsed collections.

The LinkedIn integration is a **curated import**, not a live synchronization or embedded LinkedIn page. It needs no LinkedIn credentials, API keys, or third-party scripts at runtime. Future profile changes should be reviewed and applied to the data file.

Keep both languages aligned: update `src/data/translations/es.json` when profile or interface wording changes, and the matching article in `src/data/blog-es/` when an English detail article changes. See [language maintenance](docs/LANGUAGES.md).

The profile uses a sticky section menu, native HTML disclosures, and four credential groups. The main content is rendered by Astro and remains readable without JavaScript; a small script adds section highlighting and opens nested entries for direct anchor links. See [content sources](docs/CONTENT_SOURCES.md) for scope and reconciliation notes.

**Legacy content:** `src/content/blog/`, `src/content/experience/`, and `src/content/config.ts` are inherited copies, not the active loader. The live site reads `src/data/blog/` through `src/content.config.ts`. Overlapping résumé entries were reconciled in the legacy copies, but new work should use the active sources above.

### Add a visited country

Edit `src/data/travel.ts`:

```ts
{ name: "United States", mapName: "USA" }
```

`name` is the human-readable label. `mapName` must exactly match `properties.name` in `src/lib/world.json`. The homepage count, travel list, and globe all read the same array. The globe scales with its container and respects reduced-motion preferences.

### Update contact links and metadata

- Profile and contact facts: `src/data/profile.ts`.
- Social and résumé URLs: `src/lib/constants.ts`.
- Production domain: `site` in `astro.config.mjs`.
- Social preview image: `public/og-image2.png`.
- Structured data and canonical links: `src/layouts/BasicLayout.astro`.

### Update the accent palette

Edit `src/styles/theme.css`. The base accent, `--color-primary-500`, is **#d8bffe**, sampled from the logo. Buttons, links, focus rings, card borders, the globe, and UnoCSS `primary` utilities all use these shared tokens. Use a light accent on dark surfaces and dark text on filled accent buttons to preserve contrast.

## Technology

- **Astro 5** for pages, content collections, and server rendering.
- **SolidJS + D3** for the animated globe.
- **UnoCSS** and component CSS for styling.
- **Motion** for the homepage entrance animation.
- **TypeScript**, **Astro Icon**, and local variable fonts.
- **Netlify adapter** for the production server output. Svelte integration is retained for the existing playground components.

## Validation and deployment

Before publishing:

```bash
npm run check
npm run build
```

Review `/`, `/blog`, one career entry, and `/travel` at both desktop and mobile widths. Confirm that links work, date ranges agree with the reconciled source notes, and the United States is highlighted on the globe.

Review the same pages in Spanish and switch languages from a detail page and a section anchor. The optional personal section is reached through a small key icon in the footer; it has a visible return button in its header. See [integration notes](docs/GARAGE_INTEGRATION.md). It is excluded from the sitemap and retains its original `noindex, nofollow` metadata.

The site uses `output: "server"` and the Netlify adapter in `astro.config.mjs`. Netlify's Astro integration handles the server functions generated by the build; this is not a static-only site that can be deployed by copying HTML alone. The build command is `npm run build` and the asset output directory is `dist`. Validate the connected site's Netlify settings before publishing.

See [the design review](docs/DESIGN_REVIEW.md) for the next visual iteration.

## Credits and license

Adapted from [astro-bento-portfolio by Gianmarco Cavallo](https://github.com/Ladvace/astro-bento-portfolio). The original attribution is preserved in [LICENSE](LICENSE). The code is distributed under that license; résumé content and personal branding belong to their respective owners.
