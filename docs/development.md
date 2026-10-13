# Development

Follow [Installation](installation.md) to install the committed Bun lockfile. This guide describes the current SPA structure and the checks available to contributors.

## Run the app

Start Vite from the repository root:

```powershell
bun run dev
```

The site is served on port `8080` by default. Vite hot reloads the client as source files change.

## Where to make changes

- Add and edit route registrations in `src/App.tsx`; it is the active React Router route table.
- Put page components in `src/pages/` and reusable marketing sections in `src/components/sections/`.
- Use `src/components/ui/` for shared low-level UI components.
- Update `src/data/site-pages.ts` when navigation or shared page descriptions need to change. Most page content is currently authored directly in page and section components.
- Global styles and Tailwind entry points are in `src/styles.css`; Vite plugins and aliases are in `vite.config.ts`.
- Public files go in `public/`; imported/bundled assets go in `src/assets/`.

Some page files retain `createFileRoute` exports and imports from `@tanstack/react-router`, but Vite aliases those imports to `src/lib/router-shim.tsx`. The active routing behavior is defined in `src/App.tsx`; the shim's route declarations and metadata helpers are not full TanStack Router implementations. See [Architecture](architecture.md#routing-migration-compatibility).

## Forms and visitor data

The contact form currently stores entered values only in React component state, then clears the fields and displays a success state. It does not send or persist submissions. Meeting dates and times are mock data, and the booking action has no connected scheduler. Quote, consultation, portfolio, case-study, testimonial, and service-detail routes currently show placeholders. Do not describe these flows as operational until a complete implementation is connected and documented.

If a backend or third-party service is added, document where data goes, validation, failure behavior, retention, privacy disclosures, and any public environment values. Never ship private credentials to the client bundle.

## Checks before a pull request

Run the project lint and production build:

```powershell
bun run lint
bun run build
```

Prettier is installed as a development dependency. To check formatting without rewriting files:

```powershell
bunx prettier --check .
```

`bun run format` rewrites files; review its full diff before keeping those changes. There is no automated test runner or test suite in the current repository. If you add one, document its setup and include a stable command in `package.json`.

## Before submitting

- Verify every affected route through in-app navigation and direct URL refresh.
- Check narrow and wide viewports, keyboard navigation, focus visibility, image alternatives, and reduced-motion behavior.
- Confirm external assets and client claims are approved for publication.
- Update [HTTP routes](api.md), [Deployment](deployment.md), and the README when implementation behavior changes.
- Follow [Contributing](../CONTRIBUTING.md) for pull request details.
