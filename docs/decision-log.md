# 🧠 Engineering Decision Log

This lightweight log records material implementation decisions and known constraints. Use a full Architecture Decision Record for new decisions that materially affect runtime, security, privacy or deployment.

## Current recorded decisions

### DEC-001: Browser-rendered SPA
- **Status:** Accepted
- **Decision:** The website is built and delivered as a client-side React single-page application using Vite.
- **Reason:** This matches the current entry point, router and build configuration.
- **Consequences:** Static hosting must support SPA fallback for nested routes. Server-side rendering and server endpoints are not available in this architecture.

### DEC-002: React Router is the active route registry
- **Status:** Accepted
- **Decision:** `src/App.tsx` is the source of truth for browser routes.
- **Reason:** The active route table imports React Router DOM components.
- **Consequences:** Legacy TanStack imports routed through `src/lib/router-shim.tsx` must not be treated as active file-based routing.

### DEC-003: No server-side lead capture
- **Status:** Current limitation, not a product endorsement
- **Decision:** Contact and consultation UI must be documented as non-delivering until a real service is integrated.
- **Reason:** The contact submit handler only changes local component state.
- **Consequences:** Do not promise that a message, booking or quote has been sent or stored.

### DEC-004: Bun lockfile is committed
- **Status:** Accepted
- **Decision:** Use Bun with the committed `bun.lock` for reproducible installs in CI.
- **Reason:** The repository does not commit an npm lockfile.
- **Consequences:** CI and contributor instructions should use the frozen Bun lockfile install.

## New decision process

1. Describe the context and problem.
2. List viable options, including the cost of doing nothing.
3. Record the selected option and rejected alternatives.
4. Explain security, accessibility, privacy, operational and migration impact.
5. Assign an owner and review date.
6. Link implementation and tests.

Template: [ADR template](templates/adr-template.md).
