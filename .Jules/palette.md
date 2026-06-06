## 2026-06-06 - Decorative SVGs and Screen Readers
**Learning:** Screen readers may incorrectly announce raw SVG elements (like "group" or read internal tags) if they are inside a button, even if the button has an `aria-label`. This creates a confusing experience for visually impaired users.
**Action:** Always add `aria-hidden="true"` to decorative `<svg>` icons, especially when they are nested inside buttons that already provide text or an `aria-label` describing their function.
