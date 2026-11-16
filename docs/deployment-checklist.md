# 🚀 Static Deployment Checklist

## Before build

- [ ] Confirm the target branch and reviewed commit SHA.
- [ ] Install with `bun install --frozen-lockfile`.
- [ ] Run `bun run lint`.
- [ ] Run `bun run build`.
- [ ] Review generated `dist/` output.
- [ ] Check the built HTML title, description, icons and canonical URLs.
- [ ] Confirm no secrets are present in source maps or generated assets.
- [ ] Confirm local and remote assets resolve.

## Static host configuration

- [ ] Publish the contents of `dist/`, not the source tree.
- [ ] Configure SPA fallback so nested browser paths return `index.html`.
- [ ] Preserve static file requests and do not rewrite existing assets to HTML.
- [ ] Configure HTTPS and the intended custom domain.
- [ ] Set cache headers intentionally: hashed assets can be cached longer than the HTML shell.
- [ ] Configure an appropriate Content Security Policy after inventorying actual origins.
- [ ] Confirm 404 behavior for unknown routes.
- [ ] Confirm no private build configuration is exposed.

## Smoke test after deployment

- [ ] Open the home page in a private browser window.
- [ ] Direct-load and refresh `/about`, `/services`, `/contact` and `/faqs`.
- [ ] Test navigation and the 404 page.
- [ ] Test mobile layout and theme behavior.
- [ ] Verify image/font fallbacks.
- [ ] Confirm the contact form is described accurately as client-only until a backend exists.
- [ ] Inspect browser console and network failures.
- [ ] Record deployment URL, commit SHA, date and tester.

## Rollback

Keep the previous known-good static artifact available. If the release breaks navigation, rendering, assets or security policy, restore the previous artifact and investigate from logs and the failed commit. Do not overwrite evidence before identifying the cause.
