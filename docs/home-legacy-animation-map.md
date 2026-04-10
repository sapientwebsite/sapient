## Home Legacy Map (index.html)

Reference file: `public/legacy/index.html`

### Exact clone (production)

- **URL:** `/`
- **Source:** `public/legacy/index.html` (Framer export; also referenced as `LEGACY_HOME_HTML_URL` in `constants/legacyHome.ts`).
- **Route:** `routes/_index.tsx` → `LegacyInlinePage` — injects Framer CSS/scripts into the document so layout, breakpoints, and animations match the export.

### React rebuild (WIP)

- **URL:** `http://localhost:5173/home-react`
- **Route:** `routes/home-react.tsx` → `components/home/HomePage.tsx`

### Section Checklist (top to bottom)

1. Hero (headline + subtitle + primary CTA on image background)
2. Numbers/Trust Bar (`$1B+`, `70+`, `15000+`, `15+`)
3. S.T.E.A.R commitment card grid
4. Media/featured press card
5. Leadership section
6. Services (`What We Do Best`)
7. Audience/segment section (`Who We Serve`)
8. Global footprint section
9. Testimonials (`Trusted by Our Clients`)
10. Process section (`The Path to Financial Freedom`)
11. FAQ section
12. Final CTA banner

### Animation Mapping

- Hero content entrance:
  - `initial: { opacity: 0, y: 36 }`
  - `animate: { opacity: 1, y: 0 }`
  - duration ~0.6s easeOut
- Scroll reveal blocks (headings/rows/cards):
  - `initial: { opacity: 0, y: 28-40 }`
  - `whileInView: { opacity: 1, y: 0 }`
  - `viewport: { once: true, amount: 0.2 }`
- Stagger card groups:
  - parent variants with `staggerChildren: 0.08-0.12`
  - child variants `hidden -> show` with opacity+y
- Hover cards/buttons:
  - `whileHover: { y: -3, scale: 1.01 }`
- FAQ expand/collapse:
  - `animate` on height/opacity, or `AnimatePresence`

### Asset Strategy

- Keep all visual assets under `public/images/home/*` or local mirrored `/vendor/*` files.
- Avoid runtime dependency on external Framer CDN URLs.
