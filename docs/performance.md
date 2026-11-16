# ⚡ Frontend Performance Guide

## Performance goals

Treat performance as a user-experience requirement. This repository does not currently publish measured Core Web Vitals or a performance budget, so no score or threshold is claimed here.

## Main cost centres

- React application JavaScript and UI component dependencies.
- Large local image assets in `public/` and `src/assets/`.
- Remote image and font requests.
- Animation and rendering work on long marketing pages.
- Route-level code currently bundled according to the Vite build configuration.

## Practical optimization sequence

1. Measure a production build with Lighthouse or PageSpeed Insights on representative routes.
2. Identify the largest transferred images and convert/resize them appropriately.
3. Set intrinsic image dimensions to reduce layout shifts.
4. Lazy-load below-the-fold noncritical images.
5. Use font fallbacks and avoid blocking font requests.
6. Check route-level bundle size before adding large libraries.
7. Reduce unnecessary motion and expensive scroll listeners.
8. Re-measure on mobile network/CPU throttling.

## Performance review matrix

| Metric / area | What to inspect | Evidence |
|---|---|---|
| LCP | Main hero image/text and font loading | Lighthouse trace |
| CLS | Image dimensions, late fonts, injected content | Layout shift trace |
| INP | Event handlers, expensive state updates | Interaction trace |
| JavaScript | Main and route chunks | Vite build output |
| Images | Format, dimensions, compression and lazy loading | Asset inventory |
| Third-party | Remote fonts/images and their timing | Network waterfall |

## Suggested budget policy

Establish numeric budgets only after measuring the current baseline. Record route, device profile, network profile, test date and build SHA. A budget should be reviewed when a major visual feature or dependency is added.

## Release gate

Do not claim that a performance issue is resolved based only on code inspection. Capture before/after measurements using the same environment and include the evidence in the pull request.
