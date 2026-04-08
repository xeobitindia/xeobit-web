# XEOBIT Web

Marketing website for XEOBIT — built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Routes

| Path | Page |
|------|------|
| `/` | Home — full landing page |
| `/xeobit` | Product page — XEOBIT Connect AI |

## Adding a new product

1. Create `src/pages/NewProduct.jsx` and `NewProduct.module.css`
2. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/newproduct" element={<NewProduct />} />
   ```
3. Add a nav link in `src/components/Navbar.jsx`

## Stack

- React 18
- Vite 5
- React Router v6
- CSS Modules (no external UI library)

## Brand tokens (src/index.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | #c4522a | Terracotta — primary brand colour |
| `--ink` | #1c1a18 | Near-black text + dark backgrounds |
| `--bg` | #f7f4f0 | Warm off-white page background |
| `--serif` | DM Serif Display | Headings |
| `--sans` | DM Sans | Body text |

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```
