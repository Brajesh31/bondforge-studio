# Contributing

Thanks for helping improve the Social Bond website. Keep changes focused, describe the user-facing result, and verify that documentation reflects the implementation in this repository.

## Before opening a change

1. Search the repository's issues for a similar report or request. For a substantial feature, agree on scope before building it.
2. Read the [README](README.md#current-implementation) and [HTTP route guide](docs/api.md); visible controls on placeholder pages may not be connected to a service.
3. For a suspected security issue, do not open a public issue. Follow [SECURITY.md](SECURITY.md).

## Local setup

Use [Installation](docs/installation.md) to install the locked dependencies and run the development server. Bun is preferred because `bun.lock` is committed. The repository does not currently contain a package-lock.json.

Create a focused branch, for example:

```text
feature/working-quote-form
fix/mobile-navigation
docs/static-hosting
```

## Implementation guidance

- Keep routes in `src/App.tsx` and page content under `src/pages/`; shared sections belong in `src/components/sections/` and reusable primitives in `src/components/ui/`.
- The active route table uses React Router DOM. Existing imports from `@tanstack/react-router` resolve through `src/lib/router-shim.tsx`, which is a compatibility layer with some no-op APIs. Do not assume a shimmed route helper implements TanStack Router behavior.
- Keep components typed with TypeScript, and include accessible labels, keyboard interaction, visible focus, and responsive states.
- Avoid adding a client-only success message for a workflow that implies data was sent or saved. A functioning contact, booking, or quote workflow needs an explicitly designed backend or trusted external service, privacy disclosures, and error handling.
- Treat all `VITE_*` values as public: they are compiled into client assets. Never put private credentials in frontend environment variables.
- Use local assets where appropriate. Confirm permission and attribution requirements before adding images, fonts, testimonials, logos, metrics, or client claims.
- Update the relevant docs when routes, environment requirements, external services, data handling, or deployment behavior changes.

## Verification

Run the checks that apply to your changes:

```powershell
bun run lint
bun run build
bunx prettier --check .
```

There is no automated test runner or test script in the current project. If adding one, include the setup and commands in the README. Do not use `bun run format` as a check: it rewrites files across the repository. If a check cannot be run, explain why and describe the manual verification performed.

## Pull requests

Include:

- The user need and intended behavior.
- A summary of the implementation and known limitations.
- Routes, external services, environment variables, or privacy impacts.
- Lint/build/format checks run and their results.
- Screenshots or a short recording for visible changes at desktop and mobile widths.
- Confirmation that assets and any quoted client claims are approved for use.

Keep each pull request focused and respond to review feedback. See [CODEOWNERS](CODEOWNERS) for the repository's review owner.

## Commit messages

Use a short imperative summary, optionally with a conventional prefix, such as `fix: make mobile menu keyboard accessible` or `docs: describe static hosting`.

## License

By contributing, you agree that your contribution is submitted under the project's [MIT License](LICENSE).
