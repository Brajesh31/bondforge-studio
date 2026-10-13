# Installation

This guide sets up the Social Bond frontend for local development. The project has no backend or database to install.

## Prerequisites

- Bun, recommended because the repository commits `bun.lock`.
- A Bun release compatible with the Vite 7 dependencies in `package.json`.
- Git, if cloning the repository.

Check your installed tools:

```powershell
bun --version
node --version
```

Node is not used directly by the documented Bun commands; it can be useful for other local tooling. If you choose npm instead, note that the repository does not include `package-lock.json`, so npm cannot reproduce the committed Bun lockfile exactly.

## Clone and install

```powershell
git clone https://github.com/Brajesh31/bondforge-studio.git
Set-Location bondforge-studio
bun install --frozen-lockfile
```

The frozen-lockfile option installs the dependency versions recorded in `bun.lock` and reports a lockfile mismatch rather than silently updating it.

## Start the development server

```powershell
bun run dev
```

Vite uses port `8080` and binds to available network interfaces. Open the local URL printed in the terminal, typically `http://localhost:8080`. Keep the process running while developing so Vite can serve the app and refresh changes.

## Environment configuration

No application-specific environment variable is currently read by the source, so no `.env` file is required. `.env.example` records this. Never put a private credential in a `VITE_*` variable; Vite exposes those values in browser-delivered assets.

## Build and inspect the production output

Create the static site bundle:

```powershell
bun run build
```

Vite writes the deployable files to `dist/`. To inspect that output locally, run:

```powershell
bun run preview
```

`vite preview` is for local inspection, not a production web server. See [Deployment](deployment.md) for hosting requirements.

## Available checks

Run ESLint with:

```powershell
bun run lint
```

The repository does not currently include automated tests or a test script. See [Development](development.md) for additional contributor checks and the current project limitations.
