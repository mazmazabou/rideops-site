# CLAUDE.md — rideops-site

Marketing website for RideOps at https://ride-ops.com

## Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via next/font
- **Icons:** Lucide React (Monitor, Smartphone, MapPin, Clock, Radio, Timer, Shield, Key, Plug, Database, BarChart3, Zap, CircleCheck, Menu, X)
- **Analytics:** Vercel Analytics + Speed Insights
- **Deployment:** Vercel (auto-deploys on push to `main`)

## Project Structure
```
app/
  page.tsx        — Homepage (13-section single page site)
  layout.tsx      — Root layout (Navbar, Footer, Analytics)
  demo/page.tsx   — Demo request intake form
  api/demo/       — Demo form API endpoint
  globals.css     — Tailwind theme + custom colors
  icon.svg        — SVG favicon (steel blue circle, white "RO")
components/
  Hero.tsx        — Hero section with USC dispatch screenshot
  Navbar.tsx      — Sticky nav with mobile menu ("use client")
  SocialProof.tsx — "Trusted by" campus strip
  PersonaCards.tsx — 3-column persona grid (Operations, Drivers, Riders)
  TabbedFeature.tsx — Reusable tabbed screenshot viewer ("use client")
  RiderCarousel.tsx — 3-phone booking wizard ("use client")
  DriverShowcase.tsx — Driver app with overlapping phone frames
  FeatureSection.tsx — Reusable feature block (text + screenshot + optional features list)
  BentoGrid.tsx   — Staff calendar + fleet management cards
  ThemeShowcase.tsx — 4-campus theme grid
  OriginStory.tsx — USC DART origin story + founder bio
  TechSection.tsx — 6-card enterprise features grid
  FinalCTA.tsx    — Dark gradient CTA section
  BrowserFrame.tsx — Desktop browser mockup wrapper
  PhoneFrame.tsx  — iPhone mockup wrapper
  DemoForm.tsx    — Demo request form ("use client")
  ScrollFadeObserver.tsx — Intersection Observer for fade-in ("use client")
  Footer.tsx      — Footer with section links + security note
public/screenshots/ — 19 marketing product screenshots (4 campuses)
public/demo/        — Demo page screenshots
```

## Section Order (Homepage) — 13 Sections
1. **Hero** — "Campus transportation ops, finally under control." (USC dispatch in BrowserFrame)
2. **Social Proof** — "Trusted by USC · UCLA · Stanford · UCI"
3. **Persona Cards** — "One platform, three apps" (Operations, Drivers, Riders)
4. **Dispatch Tabs** — "Your entire operation, one screen" (3 tabs: Dispatch/Rides/Details) `id="features"`
5. **Rider Carousel** — "Riders book in three taps" (3 static phones desktop, scroll-snap mobile)
6. **Driver Showcase** — "Drivers stay focused, not frustrated" (overlapping phones, bg-gray-50)
7. **Analytics Dashboard** — "Know what's happening before anyone asks" (FeatureSection with checkmarks) `id="analytics"`
8. **Analytics Deep-Dive** — "Five analytics views, zero guesswork" (3 tabs: Hotspots/Attendance/Reports)
9. **Staff & Fleet Bento** — "Schedule drivers, track vehicles" (2-column grid)
10. **Theme Showcase** — "Your campus, your brand" (#F0F5FA background, 2x2 dispatch grid) `id="theming"`
11. **Origin Story** — "Born at USC DART" + founder bio with photo `id="story"`
12. **Tech Section** — "Enterprise-ready from day one" (6 cards: FERPA, SSO, API, isolation, export, real-time)
13. **Final CTA** — "Ready to modernize your campus transportation?" (dark gradient) `id="contact"`

## Screenshot Inventory (public/screenshots/)
Campus-specific screenshots rotated across sections:
- **USC (hero campus):** dispatch-board-usc, rider-booking-where/when, rider-myrides, driver-grace-timer, analytics-dashboard-usc, analytics-hotspots, theme-usc
- **UCLA:** dispatch-board-ucla, rides-filtered-ucla, driver-home-ucla, analytics-attendance, theme-ucla
- **Stanford:** analytics-reports-stanford, staff-calendar-stanford, theme-stanford
- **UCI:** fleet-drawer-uci, theme-uci

## Key Design Decisions
- **13-section comprehensive page** with alternating white/gray-50 backgrounds
- **Tabbed interfaces** (TabbedFeature) for dispatch and analytics — reduces scroll, shows depth
- **Persona-first structure** — introduces 3 user types before deep-diving each
- **Campus rotation** — USC flagship in hero, then UCLA/Stanford/UCI rotated across sections
- **Dark CTA section** — charcoal gradient breaks page rhythm, signals "act now"
- **Origin story with founder photo** — personal, credible, university-rooted
- **Scroll fade-in** on all sections except Hero (visible on load)

## Color System
Defined in `globals.css` via `@theme inline`:
- `--color-brand-primary: #4682B4` (SteelBlue)
- `--color-brand-dark: #36648B`
- `--color-brand-light: #EEF3F8`
- `--color-brand-charcoal: #1a1a2e`

## Anchor Navigation
- `#features` → Dispatch Tabs section
- `#analytics` → Analytics Dashboard section
- `#theming` → Theme Showcase
- `#story` → Origin Story / About
- `#contact` → Final CTA

## Commands
```bash
npm run dev    # Dev server on :3000
npm run build  # Production build
npm run start  # Production server
```

## Related
- **App:** https://app.ride-ops.com (separate repo: RideOps)
- **Screenshots generated by:** `RideOps/scripts/take-screenshots.js`
