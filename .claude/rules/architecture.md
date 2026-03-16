---
description: Architecture decisions and data flow
globs: ["src/**/*"]
---

# Architecture

- `server.ts` is a minimal Express server that serves static files from `src/public/`.
- The entire dashboard lives in a single `index.html` — CSS, HTML, and JS are co-located.
- Static sample data is embedded in `<script>` (TILE_DATA, SUMMARY_DATA, RECORDS arrays).
- Charts: 3D pie chart drawn with Canvas 2D API; line chart uses Chart.js CDN.
- Server runs on port **3001** (configurable via `PORT` env variable).
