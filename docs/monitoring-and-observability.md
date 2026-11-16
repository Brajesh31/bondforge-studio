# 📈 Monitoring and Observability

## Current state

No application analytics, telemetry SDK, error-reporting service, uptime monitor or backend health endpoint is established by the current source. Static hosting may provide access logs and availability metrics, but those are configured outside this repository.

## Minimum static-site monitoring

- Availability checks for the deployed origin and key routes.
- TLS certificate expiry monitoring.
- Static asset 404 and 5xx monitoring from the hosting provider.
- Browser console and client-side error review during release smoke tests.
- Build/deployment status and commit SHA tracking.

## Privacy-conscious instrumentation

Before adding client telemetry:
1. Define the operational question it answers.
2. Minimize collected fields and avoid form contents.
3. Determine whether consent is required.
4. Document provider, region, retention and subprocessors.
5. Update privacy/cookie disclosures.
6. Provide a safe disable/consent path where required.
7. Test that no secrets or personal data enter event payloads.

## Incident signals

| Signal | First response |
|---|---|
| Site unavailable | Check hosting status, DNS, TLS and last deployment |
| Nested route returns 404 | Verify SPA fallback configuration |
| Assets return 404 | Compare deployed `dist/` with build output |
| Sudden client errors | Identify affected route and deployment SHA |
| Unexpected third-party request | Inspect source, dependency and browser network trace |

Do not add an uptime or performance badge until it is backed by a real monitoring source.
