# Roadmap

This is a planning list based on the current source tree, not a release commitment. Priorities should be revisited as product requirements are confirmed.

## Make visitor actions real

- Replace the contact form's local-only success state with an approved, secured submission workflow and clear failure/success behavior.
- Connect consultation booking to a real scheduling provider or remove the mock date/time controls until one is selected.
- Replace the quote page's under-construction matching game with a real quote request flow.
- Add server-side validation, abuse protection, retention rules, and a privacy notice for any information that is collected.

## Complete public content

- Replace the matching-game placeholders on case studies, portfolio, testimonials, and service-detail routes with approved content.
- Confirm client names, outcomes, ratings, metrics, images, and testimonial permissions before publication.
- Align internal links and navigation with the pages that are ready for visitors.

## Improve reliability and accessibility

- Add automated checks for page rendering, links, forms, responsive navigation, and route fallback behavior.
- Add a CI workflow for the lockfile-based install, lint, build, and any future test suite.
- Review keyboard navigation, focus states, reduced motion, image alternatives, contrast, and mobile layouts across pages.
- Simplify the routing migration by removing unused router compatibility code after all callers have been migrated and verified.

## Review privacy and operations

- Reconcile the static privacy and cookie-policy text with actual hosting logs, browser storage, external font/image requests, and any integrations added later.
- Document the selected static host, HTTPS setup, content security policy, cache rules, and deep-link fallback.
- Reduce unnecessary third-party assets and confirm asset licensing and attribution.
