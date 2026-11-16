# ♿ Accessibility Test Plan

## Objective

Evaluate whether key visitor journeys can be completed with keyboard, screen reader, zoom and reduced-motion settings. The target for new and revised UI is WCAG 2.2 AA. This plan is not a conformance statement.

## Test scope

Prioritize routes that are currently implemented: `/`, `/about`, `/services`, `/contact`, `/faqs`, and policy pages. Include prototype routes when their behavior changes.

## Test matrix

| Test | Procedure | Expected result | Evidence |
|---|---|---|---|
| Keyboard navigation | Tab and Shift+Tab through page | Logical order, no keyboard trap | Screen recording or notes |
| Activation | Enter/Space on controls | Correct action without pointer | Reproducible steps |
| Focus visibility | Navigate all interactive elements | Focus indicator visible and not obscured | Screenshot |
| Heading structure | Inspect accessibility tree | Headings describe page hierarchy | Audit notes |
| Labels | Inspect all form controls | Each input has an accessible name | DOM/accessibility tree |
| Validation | Submit invalid contact form | Errors are understandable and associated | Screenshot + steps |
| Status messages | Trigger local form confirmation | Status is announced without forced focus jump | Screen-reader notes |
| Contrast | Sample text and controls in both themes | Applicable contrast thresholds are met | Contrast report |
| Zoom/reflow | 200% zoom and narrow viewport | No loss of content or function | Screenshots |
| Motion | Enable reduced motion | Nonessential motion is reduced | Test notes |
| Images | Inspect alt text | Informative image described; decorative image ignored | Asset review |

## Assistive technology coverage

Use at least one screen reader/browser combination available to the team, such as NVDA with Firefox or Chrome on Windows. Record versions and settings. Manual checks remain necessary even if an automated axe scan reports no violations.

## Defect severity

- **Blocker:** a core journey cannot be completed by keyboard or assistive technology.
- **High:** critical information or control is unavailable or misleading.
- **Medium:** substantial friction or inconsistent semantics.
- **Low:** minor clarity or presentation issue with a viable workaround.

## Completion evidence

Attach route, browser, OS, assistive technology, reproduction steps, expected/actual behavior, screenshots where appropriate, severity and retest result. Never mark an issue resolved without retesting the affected journey.
