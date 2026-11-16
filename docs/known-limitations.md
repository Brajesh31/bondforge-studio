# ⚠️ Known Limitations and Technical Debt

This list records limitations supported by the current repository inspection. It should be updated as implementation changes.

## Product limitations

- Contact form submission is local UI state only; no message is sent or persisted.
- Consultation UI is not connected to a scheduling provider.
- Quote request has no backend submission workflow.
- Portfolio, case-study, testimonial and detailed service routes currently contain under-construction experiences.
- Static policy pages do not implement consent management or data-subject workflows.

## Architecture limitations

- Client-side SPA only; no server-side rendering or backend.
- No database, schema, migrations or persistence service.
- No authentication or authorization.
- No API contract or webhook receiver.
- Legacy TanStack Router imports remain in some page modules and rely on a partial compatibility shim.
- No configured automated test runner or browser E2E suite.

## Operational limitations

- Static host must be configured for SPA fallback.
- Remote fonts and image hosts create availability and privacy dependencies.
- No repository-defined uptime, error-rate or performance monitoring.
- No measured performance budget or public quality score.

## Prioritization guidance

| Priority | Work | Why |
|---|---|---|
| P0 before lead-gen launch | Implement real contact delivery or remove misleading submit language | Prevent lost leads and false confirmation |
| P0 before legal launch | Review privacy/cookie/terms content against actual processing | Avoid inaccurate legal claims |
| P1 | Replace prototype routes with real content or clearly label them | Improve visitor trust |
| P1 | Add automated tests for forms, navigation and core components | Reduce regression risk |
| P1 | Audit accessibility on implemented routes | Remove barriers |
| P2 | Complete router migration and remove compatibility shim | Reduce maintenance complexity |
| P2 | Add performance and uptime measurement | Establish a real baseline |

## Closure rule

A limitation is closed only when implementation and evidence exist. Updating this document alone does not resolve the underlying issue.
