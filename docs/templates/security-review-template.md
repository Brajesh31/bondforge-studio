# 🔐 Security Review

## Change overview
- Feature/component:
- Author:
- Reviewer:
- Commit/PR:
- Data classification:

## Architecture and trust boundaries
Describe browser, static host, external providers and any new server-side components. Include a data-flow diagram.

## Assets and entry points
| Asset/entry point | Exposure | Control |
|---|---|---|
| Browser route/form | Public | Input validation and safe UI behavior |
| Build configuration | Build-time | No secrets in client variables |
| External dependency | Supply chain | Lockfile and advisory review |

## Threat assessment
| Threat | Preconditions | Impact | Mitigation | Residual risk |
|---|---|---|---|---|
| Injection | Untrusted content reaches a sink | XSS or data exposure | Contextual escaping and safe rendering | |
| Secret exposure | Secret placed in client bundle | Credential compromise | Server-side secret storage | |
| Dependency compromise | Malicious or vulnerable package | Supply-chain impact | Lockfile, updates and scanning | |
| Privacy leakage | Unnecessary data sent externally | Visitor data exposure | Minimize requests and disclose processing | |

## Verification
- [ ] Authentication/authorization assumptions checked
- [ ] Input validation checked
- [ ] Output encoding checked
- [ ] Secrets and build artifacts inspected
- [ ] Dependency changes reviewed
- [ ] Logging avoids sensitive data
- [ ] Privacy impact reviewed
- [ ] Abuse/rate limiting reviewed where server endpoints exist
- [ ] Tests/evidence attached

## Findings and decision
| Finding | Severity | Owner | Due date | Status |
|---|---|---|---|---|
| | | | | |

Decision: Approve / Reject / Approve with time-bound exception.
