# CompactLab website

Marketing site and docs for [CompactLab](https://compactlab.dev), a browser IDE for writing, compiling and deploying [Compact](https://docs.midnight.network/compact) contracts on Midnight Preprod and Preview.

This project is built on the Midnight Network.

## Stack

- Next.js 16 (App Router, every page is static)
- Tailwind CSS v4 with the shared CompactLab tokens (`styles/compactlab-tokens.css`)
- Inter and JetBrains Mono, lucide-react icons

## Structure

```
app/
  layout.tsx          Root layout: metadata, fonts, shared header and footer
  page.tsx            Home
  docs/               Docs: content.tsx (text) and nav.ts (sidebar)
  changelog/          Release history and what's planned
  privacy/, terms/    Legal pages
components/
  site/               Header, Footer, LegalPage, CompactCode and ui primitives
  home/               Home sections (Hero, ProductPreview, Features, ...)
  docs/               Docs sidebar and building blocks
lib/
  site.ts             Public URLs, toolchain versions and outside links
```

## Keeping it true

The site only describes what the playground does today. When the playground changes:

- **Versions:** update `TOOLCHAIN` in `lib/site.ts` when `compactlab/lib/version.ts` changes.
- **Changelog:** add a release to `app/changelog/page.tsx`.
- **Docs:** update `app/docs/content.tsx`. Compact examples there are copied from playground templates so they compile.
- **Roadmap features:** anything not shipped yet is marked as planned.

## Design

Colours and fonts come from the shared design system in `compactlab/design-system`. Don't edit `styles/compactlab-tokens.css` or `lib/design-tokens.ts` by hand; change `compactlab/design-system/tokens.mjs` and run `node compactlab/design-system/sync.mjs` from the workspace root.

## Develop

```bash
cp .env.example .env.local
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

| Variable | Default |
|----------|---------|
| `NEXT_PUBLIC_BASE_URL` | `https://compactlab.dev` |
| `NEXT_PUBLIC_PLAYGROUND_URL` | `https://playground.compactlab.dev` |

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds on the VPS and reloads the `compactlab-web` pm2 process.
