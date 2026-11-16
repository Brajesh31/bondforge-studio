# 🧰 Backup and Recovery

## Current architecture implications

The repository is a static frontend. It has no application database or server-side user records to back up. Recovery therefore focuses on source control, deployment artifacts, domain configuration and static assets.

## Recovery assets

| Asset | Recovery source | Owner action |
|---|---|---|
| Source code and docs | Git repository history | Restore a reviewed commit |
| Dependency graph | `bun.lock` | Reinstall using frozen lockfile |
| Static build | CI artifact or hosting release history | Redeploy known-good artifact |
| Domain/DNS/TLS settings | Hosting and registrar control plane | Export/document provider configuration securely |
| External image/font dependencies | Original asset source/provider | Keep licensed local copies for critical assets |

## Recovery procedure

1. Confirm the incident and affected routes.
2. Identify the last known-good commit and deployment artifact.
3. Preserve logs and current configuration before changing anything.
4. Restore the previous artifact or redeploy the known-good commit.
5. Verify home, nested routes, static assets, HTTPS and mobile rendering.
6. Record incident timeline, impact, root cause and corrective actions.
7. Update the risk register and operational documentation.

## Recovery testing

Perform a controlled rollback test before a major launch. Record duration, person responsible, artifact SHA, observed errors and follow-up work. Do not claim a recovery-time objective until it has been measured.
