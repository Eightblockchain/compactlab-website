# Compact Lab — Landing Page

Marketing and documentation site for [Compact Lab](https://compactlab.dev) — a browser-based IDE for writing, simulating, and deploying [Compact](https://docs.midnight.network/compact) smart contracts on the [Midnight](https://midnight.network) blockchain.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Fonts** — Inter (sans) · JetBrains Mono (code)

## Project Structure

```
app/
  layout.tsx          # Root layout, metadata, fonts
  page.tsx            # Home — assembles all sections
  changelog/          # Playground release history
  docs/               # Compact Lab usage documentation
  privacy/            # Privacy Policy
  terms/              # Terms of Service
components/
  Navbar.tsx          # Fixed top nav with mobile menu
  Hero.tsx            # Above-the-fold with live code mock
  Features.tsx        # Feature grid
  HowItWorks.tsx      # Three-step walkthrough
  DevExperience.tsx   # DX highlights + syntax demo
  CTA.tsx             # Call-to-action section
  Footer.tsx          # Links, legal, status
  ComingSoon.tsx      # Coming-soon toast system
  DemoModal.tsx       # Video demo overlay
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Environment

No environment variables are required to run the landing page locally. The playground URL (`playground.compactlab.dev`) is hardcoded and gated behind a coming-soon toast until launch.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to `main` triggers an automatic production deployment.
