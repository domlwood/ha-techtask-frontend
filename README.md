# HA | Wisdom Wellbeing — Resource Centre

A single-page resource centre that displays mock resources grouped by category, with sorting and filtering. Built as a frontend tech task with a deliberate focus on visible TDD process.

## Stack
- React (Vite) + Typescript
- Vitest + React Testing Library
- ESLint + Prettier
- Tailwind

## Setup

Requires Node 24.19.0 (pinned in `.nvmrc` — run `nvm use` if you have nvm installed) and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # start the dev server
pnpm test       # run the test suite
pnpm build      # typecheck + production build
pnpm lint       # eslint
pnpm format     # prettier --write
```

## What I'd add with more time

- **Detail View** - (click-to-expand showing full description + date uploaded)
- **Debounced filter input** — the filter currently re-runs on every keystroke; fine at this data size, but the first thing I'd change for a larger dataset.
- **Test coverage for `Button`, `useAverageColor`, and `useResourceGrid`.**
- **Accessibility audit** — `eslint-plugin-jsx-a11y` to prevent accessibility drifting.
- **Integration tests** - Cover the flow of the ResourceGrid in its entirety.