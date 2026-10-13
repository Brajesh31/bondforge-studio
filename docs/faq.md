# FAQ

## What is this repository?

It is the React/Vite frontend for the Social Bond marketing website. The repository name is `bondforge-studio`, while the website branding says Social Bond.

## Is there a backend, API, or database?

No. This is a static client-side SPA. It has no backend endpoint, authentication system, or database. See [Data and persistence](database.md).

## How do I run it locally?

Install Bun, run `bun install --frozen-lockfile`, then `bun run dev`. Vite uses port 8080 by default. See [Installation](installation.md).

## Does the contact form send my message?

No. It stores values in component state, then shows a local success state and clears the fields. No message is sent or saved. Do not submit confidential information through it.

## Does the consultation page book a meeting?

No. The date/time picker is mock UI and has no calendar integration. Quote, consultation, portfolio, case-study, testimonial, and detailed service routes currently show under-construction matching-card games.

## Why does a deployed nested route show a 404?

The application uses `BrowserRouter`; the static host must return `index.html` for client-side paths such as `/about`. Configure an SPA fallback and verify direct visits and refreshes. See [Deployment](deployment.md).

## Is an `.env` file needed?

No application-specific variable is currently read by the source. `.env.example` records this. Never put a private key in a frontend `VITE_*` variable because it becomes public in the built assets.

## Does the site use cookies or analytics?

The source stores the theme preference in browser `localStorage`; it does not currently show a cookie-consent manager or analytics client. The static cookie and privacy policy pages must be reviewed against actual hosting behavior and any third-party services before launch. Google Fonts and remote images are requested from their external providers.

## Are tests configured?

No automated test runner or test script is present. The available package scripts include lint, build, development, preview, and formatting. See [Development](development.md).

## What license applies?

The project is licensed under MIT. See [LICENSE](../LICENSE).

## Where can I report a bug or security issue?

Use [SUPPORT.md](../SUPPORT.md) for general support. Report suspected vulnerabilities privately using [SECURITY.md](../SECURITY.md), not in a public issue.
