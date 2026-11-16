# 📚 Social Bond Engineering Handbook

This handbook documents the **Social Bond** frontend in `bondforge-studio`. It describes the repository as it exists, including unfinished routes and the absence of server-side services.

> [!IMPORTANT]
> This is a frontend-only React SPA. There is no application API, database, authentication, CRM, calendar provider or server-side form processing. The contact form currently changes local UI state only. Documentation must not be treated as proof that a feature is implemented.

## 🧭 Start here

| Goal | Read |
|---|---|
| Understand product scope and limitations | [Product overview](product-overview.md), [Known limitations](known-limitations.md) |
| Understand runtime and components | [Architecture](architecture.md), [Project structure](project-structure.md) |
| Understand browser routes | [Route catalogue](route-catalogue.md), [Routes and integrations](api.md) |
| Understand visitor flows | [User journeys](user-journeys.md) |
| Install and contribute | [Installation](installation.md), [Development](development.md) |
| Understand configuration | [Environment reference](environment-and-configuration.md) |
| Review third-party dependencies | [External dependencies](external-dependencies.md) |
| Deploy static output | [Deployment](deployment.md), [Deployment checklist](deployment-checklist.md) |
| Review security and privacy | [Security](security.md), [Threat model](threat-model.md), [Privacy inventory](privacy-data-inventory.md) |
| Build accessible UI | [Accessibility](accessibility.md), [Accessibility test plan](accessibility-testing.md) |
| Verify quality | [QA](qa.md), [Quality gates](quality-gates.md), [Performance](performance.md) |
| Operate and recover | [Operations](operations.md), [Monitoring](monitoring-and-observability.md), [Backup and recovery](backup-and-recovery.md) |
| Reuse project templates | [Template index](templates/README.md) |

## 🗺️ Documentation map

Product and requirements lead to architecture and routes. Configuration and external dependencies inform security/privacy review. UX and accessibility feed into QA. QA gates deployment, operations, monitoring and recovery. Reusable templates support each stage.

## 🖼️ Project diagrams

- [Frontend architecture](assets/social-bond-architecture.svg)
- [Visitor journey](assets/visitor-journey.svg)
- [Trust boundaries](assets/trust-boundaries.svg)

## 📖 Guide catalogue

### Product and experience
- [Product overview](product-overview.md)
- [Requirements](requirements.md)
- [Route catalogue](route-catalogue.md)
- [User journeys](user-journeys.md)
- [UI/UX guidelines](ui-ux-guidelines.md)
- [FAQ](faq.md)
- [Known limitations](known-limitations.md)

### Engineering and development
- [Architecture](architecture.md)
- [Project structure](project-structure.md)
- [Routes and integrations](api.md)
- [Data and persistence](database.md)
- [Environment and configuration](environment-and-configuration.md)
- [External dependencies](external-dependencies.md)
- [Installation](installation.md)
- [Development](development.md)
- [Troubleshooting](troubleshooting.md)
- [Error handling](error-handling.md)
- [Decision log](decision-log.md)

### Security, privacy and accessibility
- [Security](security.md)
- [Threat model](threat-model.md)
- [Privacy](privacy.md)
- [Privacy data inventory](privacy-data-inventory.md)
- [Incident response](incident-response.md)
- [Accessibility](accessibility.md)
- [Accessibility testing](accessibility-testing.md)

### Quality, delivery and operations
- [QA strategy](qa.md)
- [Quality gates](quality-gates.md)
- [Performance](performance.md)
- [Deployment](deployment.md)
- [Deployment checklist](deployment-checklist.md)
- [Release management](release-management.md)
- [Operations](operations.md)
- [Monitoring and observability](monitoring-and-observability.md)
- [Backup and recovery](backup-and-recovery.md)
- [Maintenance](maintenance.md)
- [Risk register](risk-register.md)

## 🧩 Current implementation boundaries

- `src/App.tsx` is the active React Router route table.
- `src/data/site-pages.ts` is a page/content catalogue, not a route registry.
- The contact form has no HTTP submission or persistence.
- Consultation, quote and several proof-of-work routes are prototypes.
- Theme preference is stored in browser `localStorage`.
- No application-specific environment variables are currently read.
- No test runner or automated E2E suite is configured.

## 🧱 Source of truth

When documentation and code disagree, inspect the current source first. Important files include `src/main.tsx`, `src/App.tsx`, `src/lib/router-shim.tsx`, `vite.config.ts`, `package.json` and the affected page/component files.

## ✍️ Documentation maintenance

Update the relevant guide and diagrams in the same pull request as behavior changes. Use [templates](templates/README.md) for architecture decisions, features, test plans, audits, incidents and releases. Run `python scripts/validate-doc-links.py` and `python scripts/validate-project-structure.py` before submitting.
