# ✅ Quality Gates and Release Evidence

## Current automation

The repository currently has a GitHub Actions quality workflow that installs the committed Bun lockfile, runs ESLint and creates a production build. There is no configured test runner or automated browser test suite at the time of writing.

## Required pull request checks

| Gate | Current automation | Release expectation |
|---|---|---|
| Dependency install | Bun frozen-lockfile install | Must pass |
| Lint | ESLint | Must pass or documented baseline issue |
| Production build | Vite build | Must pass |
| Unit/integration tests | Not configured | Add when behavior warrants tests |
| Browser E2E | Not configured | Add for real lead/booking flows |
| Accessibility | Manual guidance only | Manual review required for UI changes |
| Dependency security | Additional workflow being introduced | Review findings and exceptions |
| Secret scanning | Repository settings/tooling | No credentials in commits |
| Documentation links | Validation script | Local relative links must resolve |

## Pull request evidence

A complete change description includes:
- problem and user impact;
- implementation summary;
- routes/components affected;
- commands executed and exact results;
- screenshots for visual changes;
- keyboard and responsive checks;
- privacy/security impact;
- documentation updates;
- known limitations and rollback notes.

## Exceptions

Do not suppress a failing gate to make a green badge. Record the reason, risk, owner and expiry date for any temporary exception. A passing build does not prove that runtime behavior, accessibility, privacy or security is correct.
