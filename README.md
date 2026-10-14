# Social Bond website

This repository contains the **Social Bond** marketing website, built as a client-side React single-page application. The repository is named `bondforge-studio`; the site branding and page content use Social Bond.

> **Project status:** this is a frontend prototype/in-progress website. It has no server API or database. Some lead-generation and portfolio routes are placeholders. Read [Current implementation](#current-implementation) before treating a visible button or form as a working service.

## Contents

- [Technology](#technology)
- [Requirements](#requirements)
- [Run locally](#run-locally)
- [Available scripts](#available-scripts)
- [Current implementation](#current-implementation)
- [Routes](#routes)
- [Repository layout](#repository-layout)
- [Environment and privacy](#environment-and-privacy)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Technology

- React 19 and TypeScript
- Vite 7 and Tailwind CSS 4
- React Router DOM 7 for browser navigation
- Radix UI primitives and reusable UI components
- Framer Motion / Motion animations, Lucide icons, and TanStack Query provider
- Bun lockfile (`bun.lock`) for reproducible dependency installation

This repository is a static frontend. It does not include a backend, database, authentication system, or implemented JSON API.

## Requirements

Install Bun and a runtime compatible with the Vite 7 toolchain. Bun is the recommended package manager because the repository commits `bun.lock`. The project also contains standard npm scripts, but it does not include `package-lock.json`, so npm installs are not pinned by a committed npm lockfile.

## Run locally

Clone the repository and install the locked dependencies:

```powershell
git clone https://github.com/Brajesh31/bondforge-studio.git
Set-Location bondforge-studio
bun install --frozen-lockfile
```

Start the development server:

```powershell
bun run dev
```

Vite is configured for port `8080` and listens on available network interfaces. Open the local address printed by Vite, usually `http://localhost:8080`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the Vite development server. |
| `bun run build` | Create a production frontend build in `dist/`. |
| `bun run build:dev` | Build with Vite's development mode. |
| `bun run preview` | Preview the generated `dist/` build locally. |
| `bun run lint` | Run ESLint over the repository. |
| `bun run format` | Rewrite files with Prettier; review the diff before keeping its changes. |

There is no test script or automated test suite in the current repository. See [Development](docs/development.md) for the recommended verification workflow.

## Current implementation

| Area | Current state |
| --- | --- |
| Home, About, Services overview, Contact, FAQs, and policy pages | Implemented as frontend pages with mostly hard-coded content and local assets. |
| Navigation and theme | Client-side navigation; light/dark preference is stored in browser `localStorage`. |
| Contact form | Collects fields in component state, then displays a success state and clears them. It does not send or persist the message. |
| Consultation booking | Displays a mock date/time picker; no calendar provider or booking endpoint is connected. |
| Quote, case studies, portfolio, testimonials, and detailed service routes | Marked under construction and currently render a matching-card mini-game rather than the advertised workflow/content. |
| Data and services | No backend, database, authentication, analytics integration, or API client is present in the source. |

Do not rely on the contact form, booking controls, or notification inputs to transmit information. The legal policy pages are static copy; review them against the site's real hosting, data collection, and third-party integrations before publishing. Some images and fonts load from third-party hosts.

## Routes

The SPA routes are declared in `src/App.tsx`. The current paths include `/`, `/about`, `/services`, `/contact`, `/faqs`, `/portfolio`, `/case-studies`, `/testimonials`, `/free-consultation`, `/request-a-quote`, `/privacy-policy`, `/cookie-policy`, `/terms`, and four service-detail paths. See [HTTP routes](docs/api.md) for the full list and status.

## Repository layout

```text
public/                     Static public images, icons, and robots.txt
src/App.tsx                 BrowserRouter route table and shared page shell
src/main.tsx                React entry point and providers
src/assets/                 Imported image assets
src/components/sections/    Shared marketing page sections and navigation
src/components/ui/          Reusable Radix-based UI components
src/data/                   Hard-coded page and navigation content
src/lib/                    Utilities and router compatibility shim
src/pages/                  Route-level page components
src/styles.css              Global Tailwind and theme styles
```

## Environment and privacy

The frontend currently reads no application-specific environment variables, and no `.env` file is required to run it. The included `.env.example` documents this. Never put private API keys or credentials in a `VITE_*` variable: Vite exposes client-side environment values in the generated bundle.

The theme choice is saved in browser storage. The source also references Google Fonts, Unsplash, and other remote image hosts; those requests are made by visitors' browsers. There is no cookie-consent interface or analytics integration visible in the app source. Review [Security](SECURITY.md) and the site's policy pages before launch.

## Documentation

- [Architecture](docs/architecture.md)
- [Installation](docs/installation.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [HTTP routes](docs/api.md)
- [Data and persistence](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)

## Contributing

Bug reports and focused improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Do not use a public issue to report a security vulnerability; follow [SECURITY.md](SECURITY.md).

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for the complete terms.

Last updated: 2026-10-14 11:43 UTC
