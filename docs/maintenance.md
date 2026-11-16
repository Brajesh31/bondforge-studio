# 🧰 Maintenance Guide

## Routine maintenance
| Trigger | Task | Evidence |
| --- | --- | --- |
| Dependency update | Review manifest and bun.lock; install, lint, build | PR checks |
| Route/content change | Update route catalogue, README, related docs | Documentation diff |
| Release | Smoke-test routes/assets | Release checklist |
| New external host | Review privacy, licensing, CSP, fallback | Security/privacy review |
| New visitor form | Review validation, abuse, delivery, retention, notice | Threat assessment |
| Periodic review | Revisit stale issues, links, policies, dependencies, roadmap | Maintenance issue |

## Safe dependency updates
1. Create a focused branch.
2. Update only intended dependencies.
3. Review package.json and bun.lock together.
4. Read upstream notes for breaking changes.
5. Run frozen install, lint, and production build.
6. Smoke-test affected routes/components.
7. Record unresolved vulnerabilities or deferred upgrades in risk register.

## Documentation maintenance
- Update docs/api.md when src/App.tsx changes.
- Update docs/architecture.md when provider, routing, asset, or build boundaries change.
- Update docs/database.md and docs/privacy.md when persistence/data collection changes.
- Update docs/security.md and docs/threat-model.md when trust boundaries change.
- Update README when setup, scripts, scope, or limitations change.

Before removing a component or asset, search all imports/references. Confirm it is not used by public routes, metadata, or hosting. Never delete existing media or components during unrelated documentation work.