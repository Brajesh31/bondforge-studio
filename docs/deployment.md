# Deployment

The current application is a static single-page frontend. It has no server API, database, authentication, or server-side form processing. Deploy only the built files and do not promise that placeholder lead or booking workflows are operational.

## Build the site

Use the committed Bun lockfile to install dependencies and build the release artifact:

```powershell
bun install --frozen-lockfile
bun run lint
bun run build
```

Vite writes the production site to `dist/`. Upload the contents of `dist/` to a static hosting provider. Do not deploy `node_modules/` or the repository root as the public document root.

## Configure SPA routing

The app uses React Router's `BrowserRouter` with routes such as `/about` and `/services/video-editing`. Configure the static host to return `index.html` for valid client-side paths so a direct visit or browser refresh on a nested route reaches the SPA. Keep static asset requests mapped to their actual files, and preserve a clear not-found experience for unrecognized app paths.

Vite currently builds for the site root. If hosting under a subpath, configure Vite's `base` and verify all generated asset URLs and route behavior for that deployment path.

## Environment and secrets

No application-specific environment values are currently required. `.env.example` documents that state. Never add private credentials to source or `VITE_*` variables because frontend values are included in public browser assets. If a third-party API is introduced, call it through a trusted server-side integration when it requires a secret.

## Production checks

- Use HTTPS and configure the hosting account and deploy pipeline with restricted access.
- Configure appropriate security headers, including a Content Security Policy that accounts for Google Fonts and the external image hosts still referenced by the site.
- Verify asset caching. Fingerprinted build assets can generally be cached for longer than `index.html`; ensure a new HTML entry can reference the current asset set after releases.
- Open and refresh each route directly, including `/contact`, `/privacy-policy`, `/services`, and nested service paths.
- Check the desktop and mobile navigation, theme toggle, page scroll behavior, and unknown-route page.
- Confirm remote fonts and images load, and decide whether to self-host them or document the third-party requests.
- Confirm policy pages match the actual hosting, browser storage, and third-party integrations.

## Launch readiness limitations

The contact form currently shows a client-only success state and does not submit data. The booking UI is mock content; quote, consultation, portfolio, case-study, testimonial, and detailed service routes are under-construction placeholders. Connect these workflows to approved services and review data handling before advertising them as available.

The app currently has only document-level metadata in `index.html`; route-level metadata helpers are no-ops through the router compatibility shim. If search indexing of individual routes matters, add and verify a route-aware SEO or rendering strategy.

See [Security](../SECURITY.md), [Architecture](architecture.md), and [Troubleshooting](troubleshooting.md) for related constraints.
