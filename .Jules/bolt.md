## 2024-05-20 - [Optimize Search Text Generation]
**Learning:** Found a performance bottleneck in the filtering logic where dynamic string concatenation and lowercasing were computed on the fly for every single item on every keystroke. In a Vanilla JS app with a decent dataset size, these redundant string operations cause unnecessary CPU load, GC pauses, and UI lag.
**Action:** When filtering a static or infrequently changing dataset based on text searches, always precompute and cache the searchable text representations (e.g. joining and lowercasing all searchable fields once during initialization) rather than computing them on the fly.
## 2024-05-20 - [Debounce Search Input]
**Learning:** In a vanilla JS application that renders an entire DOM grid based on filter state, attaching synchronous `applyAndRender()` to a raw `'input'` event causes jank. Every keystroke triggers a full array filter + DOM rebuild.
**Action:** When working with vanilla JS inputs that trigger expensive layout/filtering logic, wrap the logic in a debounce wrapper (e.g. `clearTimeout` / `setTimeout`) to batch updates, especially if there isn't a framework doing it automatically.
