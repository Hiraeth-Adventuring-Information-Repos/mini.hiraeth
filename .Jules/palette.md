## 2026-01-22 - Replacing Alerts with Toasts
**Learning:** `alert()` interrupts the user's flow and feels like an error even when it's a success message. It also requires a click to dismiss.
**Action:** Use non-blocking toast notifications with `role="status"` for transient success messages like "Link copied".

## 2026-02-12 - Adding ARIA Labels to Text Symbol Icons
**Learning:** Icon-only buttons that use text symbols (like ‹, ›, ✕) are often skipped or misread by screen readers, creating an inaccessible experience for visual UI components like carousels and lightboxes.
**Action:** Always add descriptive `aria-label` attributes to icon-only buttons, especially when they use text characters for visual icons instead of semantic SVGs or text content.

## 2026-01-22 - Adding ARIA labels to Icon-Only Buttons
**Learning:** Icon-only buttons using text symbols like '‹', '›', and '✕' are completely opaque to screen readers.
**Action:** Always add descriptive `aria-label` attributes to any button that does not contain meaningful, readable text.
## 2024-05-17 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Using `tabindex="0"` on non-interactive elements like `div` or `article` is not sufficient for keyboard accessibility. While it makes them focusable, they will not trigger click events when pressing Enter or Space, unlike native `<button>` or `<a>` elements.
**Action:** When making custom elements interactive via `tabindex="0"`, always add `role="button"` to inform screen readers of their interactive nature, and attach `keydown` event listeners to handle "Enter" and "Space" key presses to trigger the same action as a mouse click. Also consider using semantic interactive elements like `<button>` directly where possible (e.g., for chips/tags).
## 2026-05-09 - Providing Fallback for outline: none
**Learning:** Removing default focus outlines with `outline: none;` without providing an alternative completely breaks keyboard navigation visibility.
**Action:** Always provide a global `*:focus-visible` fallback rule (e.g., using `--accent` color and `outline-offset`) to ensure custom interactive elements and inputs remain accessible to keyboard users.

## 2026-05-24 - Active Filter Chips
**Learning:** Complex filters hidden inside a dropdown must have persistent, at-a-glance active state representations (like chips) visible outside the panel so users maintain context.
**Action:** Always provide a visual summary of active filters with an easy way to clear them outside of the dropdown.

## 2026-05-25 - Synchronizing Custom Filter UI and Native Checkboxes
**Learning:** When programmatically updating filter states via custom UI elements (like removing an active filter chip), the underlying native UI controls (e.g., checkboxes in a dropdown menu) may become out of sync if not explicitly updated.
**Action:** Always ensure that when custom filter tags or chips are removed, the corresponding native controls (`input[type="checkbox"]`) are explicitly unchecked to prevent confusing state mismatches for users.
