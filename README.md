# Yoda

A private habit and goal tracker for a single household.

Yoda answers one question per person, per day: *what did I say I'd do today, and did I do it?* Everyone in the household picks their face from a row of avatars on the home screen and immediately sees their own goals as a stack of colour-coded cards — "Complete 30 mins Zumba", "Drink 3 Lits water", "Read Swedish for 30 mins". There are no accounts, no passwords and no invitations: the people are a fixed, hand-seeded list, because the app is only ever meant to be used by the family that runs it.

It is installable as a PWA, so it sits on the home screen of a phone and works like an app rather than a bookmark.

## Repository layout

This repo holds the **frontend only**. The React app lives one level down, in [`yoda/`](yoda) — that is where `package.json` is and where all npm commands are run.

The REST API it talks to is a separate repository: [Ajay2123/yoda-backend](https://github.com/Ajay2123/yoda-backend).

## Quick start

```bash
cd yoda
npm install
npm start
```

The app opens on http://localhost:3000.

Note that it calls the **deployed** backend at `https://yoda-backend.vercel.app`, not a local one. That base URL is hardcoded in each module under `src/api/`; to point the app at a backend running on your own machine, change it there.

See [`yoda/README.md`](yoda/README.md) for the full list of scripts and the project structure.

## Tech stack

React 19 · MUI 9 · Create React App · Workbox (PWA service worker)

## Status

Personal side project, built for one household's own use, and still partly scaffolding.

What works today: picking a person, and listing that person's goals as cards.

What doesn't, yet: the **Complete** button on each card is inert — it renders as a link to a `goal.link` field that the API never returns, so it goes nowhere and marks nothing. Creating, editing and deleting goals are implemented in `src/api/goals/` and supported by the backend, but no component imports them yet. Daily completion tracking (`/track`) exists server-side only.
