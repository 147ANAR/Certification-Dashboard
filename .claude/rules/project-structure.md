---
description: Project file structure and layout
globs: ["src/**/*"]
---

# Project Structure

```
src/
├── server.ts              # Express server, serves static files from src/public
└── public/
    └── index.html         # Full dashboard UI (styles, markup, data, charts)
```

- `server.ts` is a minimal Express server that serves static files from `src/public/`.
- The entire dashboard lives in a single `index.html` — CSS, HTML, and JS are co-located.
