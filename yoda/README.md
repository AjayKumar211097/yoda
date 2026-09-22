# Yoda — web app

The React frontend for [Yoda](../README.md), a private household habit and goal tracker. Bootstrapped with Create React App and installable as a PWA.

## Getting started

```bash
npm install
npm start
```

Opens on http://localhost:3000.

The app calls the **deployed** API at `https://yoda-backend.vercel.app`. That base URL is declared at the top of each module in `src/api/`, so pointing the app at a locally running backend means editing those files. (`src/.env` exists but is empty and is not read by anything.)

## Scripts

| Script | What it does |
| --- | --- |
| `npm start` | Dev server with hot reload on :3000 |
| `npm run build` | Production build into `build/` |
| `npm test` | Jest + React Testing Library, watch mode |
| `npm run precache` | Regenerates `build/service-worker.js` via Workbox — run **after** `npm run build` |
| `npm run eject` | One-way CRA eject. Don't. |

Run a single test:

```bash
npx react-scripts test --watchAll=false -t "renders the header"
```

## How it hangs together

State lives in one React context; there is no router and no data-fetching library.

- `src/context/PeopleContext.jsx` — holds `currentUser` and `currentUserGoals`, and nothing else.
- `src/pages/Header.jsx` → `src/pages/subs/UserSelection.jsx` — renders an avatar per person. Picking one is the only action in the app that writes to the context: it sets the current user *and* fetches that person's goals.
- `src/pages/subs/GoalCard.jsx` — reads `currentUserGoals` and renders the coloured cards.
- `src/api/` — one file per endpoint, plain `fetch`, each returning parsed JSON.
- `src/index.js` — registers the service worker that makes this a PWA.

`src/components/GoalCard.jsx` and `src/pages/Home.jsx` are empty leftovers; the component actually rendered is the one under `pages/subs/`.

## Dependency notes

Two versions are deliberately held back and should not be bumped casually:

- **ESLint stays on 8.x.** `react-scripts` lints at build time using the `eslintConfig` key in `package.json`, which is eslintrc format. ESLint 9 removed support for it and the build fails.
- **`eslint-plugin-react-hooks` stays on 4.x**, because `eslint-config-airbnb@19` requires it as a `^4.3.0` peer.

Remaining `npm audit` findings are all inside `react-scripts`' own dependency tree and cannot be resolved while the project stays on Create React App, which is no longer maintained upstream. `npm audit fix --force` will break the build.
