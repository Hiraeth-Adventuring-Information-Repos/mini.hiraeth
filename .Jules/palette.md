## 2026-01-22 - Replacing Alerts with Toasts
**Learning:** `alert()` interrupts the user's flow and feels like an error even when it's a success message. It also requires a click to dismiss.
**Action:** Use non-blocking toast notifications with `role="status"` for transient success messages like "Link copied".
