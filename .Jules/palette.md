## 2026-01-22 - Replacing Alerts with Toasts
**Learning:** `alert()` interrupts the user's flow and feels like an error even when it's a success message. It also requires a click to dismiss.
**Action:** Use non-blocking toast notifications with `role="status"` for transient success messages like "Link copied".

## 2026-02-12 - Adding ARIA Labels to Text Symbol Icons
**Learning:** Icon-only buttons that use text symbols (like ‹, ›, ✕) are often skipped or misread by screen readers, creating an inaccessible experience for visual UI components like carousels and lightboxes.
**Action:** Always add descriptive `aria-label` attributes to icon-only buttons, especially when they use text characters for visual icons instead of semantic SVGs or text content.

## 2026-01-22 - Adding ARIA labels to Icon-Only Buttons
**Learning:** Icon-only buttons using text symbols like '‹', '›', and '✕' are completely opaque to screen readers.
**Action:** Always add descriptive `aria-label` attributes to any button that does not contain meaningful, readable text.