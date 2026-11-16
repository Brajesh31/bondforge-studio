# 🔌 API Contract Template

> Use only when a real API is introduced. This repository currently has browser routes, not an API server.

## Service metadata
- Service name:
- Base URL by environment:
- Owner:
- Version:
- Authentication:
- Data classification:

## Endpoint
- Method:
- Path:
- Purpose:
- Idempotency:
- Rate limit:
- Timeout:

## Request
| Field | Type | Required | Constraints | Sensitive? |
|---|---|---|---|---|
| | | | | |

Example request:
```json
{}
```

## Success response
- HTTP status:
- Response schema:
- Example:

## Error contract
| Status | Meaning | Retry safe? | Client behavior |
|---|---|---|---|
| 400 | Invalid request | No | Show field-level guidance |
| 401/403 | Authentication/authorization failure | No | Do not expose protected data |
| 429 | Rate limited | Later, with backoff | Explain retry timing |
| 5xx | Service failure | Depends on operation | Show safe failure state |

## Security and privacy
- Authentication and authorization:
- Validation:
- Abuse prevention:
- PII fields:
- Retention/deletion:
- Audit logging:
- CORS and origin policy:

## Operational expectations
- Availability target:
- Monitoring:
- Alert owner:
- Backward compatibility:
- Deprecation policy:

## Test cases
- [ ] Valid request
- [ ] Missing/invalid fields
- [ ] Unauthorized request
- [ ] Oversized payload
- [ ] Rate limit
- [ ] Timeout and 5xx
- [ ] Duplicate/idempotent request
