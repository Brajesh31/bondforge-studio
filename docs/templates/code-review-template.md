# 🔍 Code Review Checklist

## Correctness
- [ ] Change solves the stated problem
- [ ] Edge cases and error states are handled
- [ ] Existing routes and behavior are preserved unless intentionally changed
- [ ] No dead code or accidental unrelated changes

## React and TypeScript
- [ ] Types are meaningful and safe
- [ ] Effects and state are used correctly
- [ ] Keys and component boundaries are appropriate
- [ ] No avoidable rendering or bundle cost

## Accessibility and UX
- [ ] Semantic elements are used
- [ ] Keyboard and focus behavior work
- [ ] Labels and status messages are accessible
- [ ] Responsive and reduced-motion behavior considered

## Security and privacy
- [ ] No secrets or personal data in client bundle/logs
- [ ] Untrusted content is handled safely
- [ ] External dependencies and requests reviewed
- [ ] Privacy documentation updated if data handling changes

## Quality and delivery
- [ ] Lint and build run
- [ ] Tests added where behavior requires them
- [ ] Documentation and diagrams updated
- [ ] Screenshots/evidence attached for UI changes
- [ ] Rollback and known limitations recorded

## Review decision
Approve / Request changes / Comment only

Blocking findings:
