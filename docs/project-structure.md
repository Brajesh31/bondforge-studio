# 🧱 Project Structure and File Ownership

This guide describes the repository as it exists today. It is intentionally a map of the current source, not a proposed architecture. Re-check the tree after structural changes.

## Repository map

```text
bondforge-studio/
├── .github/
│   ├── ISSUE_TEMPLATE/          # Structured bug, feature and documentation intake
│   ├── workflows/               # GitHub Actions quality and repository maintenance
│   └── PULL_REQUEST_TEMPLATE.md  # Change review checklist
├── docs/
│   ├── templates/                # Reusable engineering and governance templates
│   ├── README.md                 # Documentation entry point
│   ├── architecture.md           # Runtime and component architecture
│   ├── api.md                    # Browser route catalogue, not a server API
│   ├── database.md               # Current client-side state and absence of DB
│   ├── deployment.md             # Static SPA hosting guidance
│   ├── development.md            # Local contribution workflow
│   ├── product-overview.md       # Product scope and implementation truth
│   ├── security.md               # Frontend security controls and gaps
│   └── ...                       # QA, accessibility, privacy and operations guides
├── public/                       # Files served directly from the site root
├── src/
│   ├── assets/                   # Imported/bundled visual assets
│   ├── components/
│   │   ├── sections/             # Shared site sections, navigation and footer
│   │   └── ui/                   # Reusable UI primitives
│   ├── data/
│   │   └── site-pages.ts         # Hard-coded page plans and content metadata
│   ├── hooks/                    # Shared React hooks
│   ├── lib/                      # Utilities and router compatibility shim
│   ├── pages/                    # Route-level page components and page sections
│   ├── App.tsx                   # Active browser route table and shared shell
│   ├── main.tsx                  # React root and top-level providers
│   └── styles.css                # Global styles and theme tokens
├── .env.example                  # Documents that no app env values are required
├── index.html                    # SPA document, metadata and font references
├── package.json                  # Scripts and dependency manifest
├── bun.lock                      # Bun dependency lockfile
├── vite.config.ts                # Vite configuration, alias and dev server
└── tsconfig.json                 # TypeScript compiler configuration
```

## Runtime entry points

| File | Responsibility | Change carefully when |
|---|---|---|
| `index.html` | Document shell, title/description, font loading and root mount element | Updating global metadata, icons or font sources |
| `src/main.tsx` | Creates React root and mounts providers/router | Changing provider order or application bootstrap |
| `src/App.tsx` | Registers the active React Router routes, shared navigation/footer, scroll reset and 404 | Adding, removing or changing browser paths |
| `src/styles.css` | Global Tailwind entry, base styles and theme variables | Changing tokens, global typography or motion |
| `vite.config.ts` | Vite plugins, aliasing and development server configuration | Changing aliases, ports or build behavior |
| `src/lib/router-shim.tsx` | Partial compatibility layer for legacy TanStack imports | Migrating old page modules to React Router |

## Source ownership boundaries

- **Route-level UI:** keep page composition in `src/pages/`. Shared pieces belong in `src/components/sections/`.
- **Primitive controls:** use `src/components/ui/` for reusable controls. Preserve keyboard behavior, labels and ARIA attributes when wrapping Radix primitives.
- **Content data:** static content can live in `src/data/`; do not treat page-plan metadata as proof that a route is fully implemented.
- **Browser-only state:** clearly identify persistence and lifetime. Theme preference uses browser storage; form values are transient component state.
- **Public assets:** `public/` assets are referenced by URL and copied as-is. Imported assets under `src/assets/` are handled by Vite's module graph.
- **Generated output:** `dist/` is a build artifact. Do not commit it unless a separately documented hosting requirement explicitly calls for it.

## Active route ownership

The active route table is in `src/App.tsx`. Route components include home, about, case studies, contact, cookie policy, FAQs, consultation, portfolio, privacy policy, quote request, services and service details, terms, and testimonials. The exact paths and implementation state are listed in [Route catalogue](api.md).

## Important non-existent subsystems

The current tree does not establish the existence of:
- a backend service, REST/GraphQL endpoint or webhook receiver;
- a database, ORM, migration system or server-side persistence;
- user accounts, authentication or authorization;
- a real contact-delivery, booking, quote or newsletter integration;
- an automated unit, integration or browser test suite.

Do not add documentation or badges that imply these systems exist. If one is introduced, create its source, tests, security controls, deployment path and documentation together.

## Updating this document

When moving or adding a source directory:
1. Update this tree from the actual repository.
2. Add the responsibility and entry points for the new directory.
3. Update the architecture and development guides.
4. Check README links and GitHub workflow paths.
5. Run the documentation validation script and inspect its diff.
