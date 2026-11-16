# 🚀 Static Website Release Checklist

## Change readiness
- [ ] Change reviewed and merged to intended branch.
- [ ] README, route catalogue, and affected docs current.
- [ ] Changelog describes user-visible changes without inventing a release.
- [ ] Known limitations and accepted risks documented.

## Build verification
- [ ] bun install --frozen-lockfile
- [ ] bun run lint
- [ ] bun run build
- [ ] bunx prettier --check .
- [ ] Build output checked for accidental secret/config exposure.

## UX and accessibility
- [ ] Home and changed routes load.
- [ ] Nested route direct access and refresh work.
- [ ] Desktop and mobile layouts reviewed.
- [ ] Keyboard and visible focus verified.
- [ ] Forms, menus, accordions, dialogs, theme controls reviewed.
- [ ] Reduced motion and contrast checked.
- [ ] Images have appropriate alternatives.

## Security and privacy
- [ ] External assets and requests reviewed.
- [ ] Production HTTPS and security headers verified.
- [ ] No private key or credential shipped to browser.
- [ ] Privacy/cookie copy reflects real behavior.
- [ ] Contact/booking flows do not claim unimplemented delivery.

## Deployment and rollback
- [ ] Only dist/ is published.
- [ ] Prior artifact or rollback path exists.
- [ ] Production smoke test complete.
- [ ] Release commit and verification evidence recorded.

## Release details
- **Commit:**
- **Build artifact:**
- **Deployment URL:**
- **Verified by:**
- **Date:**
- **Known issue:**