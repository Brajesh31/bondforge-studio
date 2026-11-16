# 🎨 UI and UX Engineering Guidelines

## Visual direction

The site uses the Social Bond brand and a modern marketing layout. Preserve existing design decisions unless a deliberate redesign is approved. Avoid introducing an unrelated design system or arbitrary visual language.

## Layout and responsive behavior

- Prefer fluid containers with a readable maximum line length.
- Check the smallest supported mobile viewport, tablet widths and wide desktop layouts.
- Prevent horizontal overflow from long headings, tables, navigation and media.
- Use responsive image sizing and avoid shipping unnecessarily large source images.
- Keep primary actions visually distinct without making every control look primary.
- Preserve consistent spacing, radii, typography and alignment across shared sections.

## Component rules

| Component category | Guidance |
|---|---|
| Navigation | Use links for navigation, buttons for actions; expose active state and mobile menu state |
| Forms | Visible labels, clear required indicators, inline errors and truthful submission status |
| Cards | Use meaningful headings and avoid nested interactive elements |
| Dialogs | Trap and restore focus, support Escape, label the dialog |
| Accordions | Expose expanded state and support keyboard activation |
| Icons | Decorative icons are hidden from assistive technology; icon-only actions need accessible names |
| Motion | Respect `prefers-reduced-motion`; never make motion necessary to understand content |

## Interaction states

Every interactive component should have intentional:
- default state;
- hover state where a pointer is available;
- keyboard focus-visible state;
- pressed/active state;
- disabled state where relevant;
- loading state only when real work is pending;
- error and success states where an operation exists.

Do not display a success state that implies an external operation completed when the UI only changed local state.

## Typography and color

Use the existing CSS tokens in `src/styles.css` as the first source of truth. Avoid hard-coded color additions where a semantic token exists. Check contrast for normal text, large text, controls, borders and focus indicators in both themes.

## Content and imagery

- Write clear, descriptive headings and link labels.
- Provide meaningful alternative text for informative images.
- Use empty alt text for purely decorative images.
- Do not embed essential instructions only in images.
- Confirm rights and privacy implications before adding third-party images or font services.

## Review checklist

- [ ] Desktop, tablet and mobile layouts checked.
- [ ] Keyboard-only interaction checked.
- [ ] Focus is visible and not obscured.
- [ ] Labels, errors and status announcements are accessible.
- [ ] Both themes checked where theme switching is available.
- [ ] Reduced-motion preference checked.
- [ ] Images have appropriate alternative text.
- [ ] No placeholder action is presented as a working service.

Related: [Accessibility](accessibility.md), [User journeys](user-journeys.md), [QA](qa.md).
