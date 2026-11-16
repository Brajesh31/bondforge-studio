# 🧭 Route Catalogue and Page Ownership

The authoritative route registration is `src/App.tsx`. This catalogue supplements [docs/api.md](api.md), which also explains that there is no server API.

| Path | Component import | State summary |
|---|---|---|
| `/` | `src/pages/index.tsx` | Home page |
| `/about` | `src/pages/about.tsx` | About page |
| `/case-studies` | `src/pages/case-studies.tsx` | Prototype / under construction |
| `/contact` | `src/pages/contact.tsx` | Contact UI; local-only form |
| `/cookie-policy` | `src/pages/cookie-policy.tsx` | Static policy content |
| `/faqs` | `src/pages/faqs.tsx` | Static FAQ content |
| `/free-consultation` | `src/pages/free-consultation.tsx` | Prototype / no calendar provider |
| `/portfolio` | `src/pages/portfolio.tsx` | Prototype / under construction |
| `/privacy-policy` | `src/pages/privacy-policy.tsx` | Static policy content |
| `/request-a-quote` | `src/pages/request-a-quote.tsx` | Prototype / no quote submission |
| `/services` | `src/pages/services.tsx` | Services overview |
| `/services/digital-marketing` | `src/pages/services.digital-marketing.tsx` | Prototype / under construction |
| `/services/influencer-management` | `src/pages/services.influencer-management.tsx` | Prototype / under construction |
| `/services/social-media-management` | `src/pages/services.social-media-management.tsx` | Prototype / under construction |
| `/services/video-editing` | `src/pages/services.video-editing.tsx` | Prototype / under construction |
| `/terms` | `src/pages/terms.tsx` | Static terms content |
| `/testimonials` | `src/pages/testimonials.tsx` | Prototype / under construction |
| `* ` | `NotFound` in `src/App.tsx` | Catch-all 404 |

## Route update procedure

1. Add the page component under `src/pages/`.
2. Register its path in `src/App.tsx`.
3. Update this catalogue and [docs/api.md](api.md).
4. Add navigation links only where appropriate.
5. Verify direct URL load and refresh on the intended static host.
6. Test title/metadata, keyboard navigation and responsive layout.
7. Add the route to QA smoke testing.

## Important distinction

The page plan catalogue in `src/data/site-pages.ts` contains descriptive metadata and planned content. It is not a router and must not be used as the authoritative list of working pages.
