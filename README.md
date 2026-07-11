# Waka — Lagos, minus the guesswork

Tourism discovery site for Nigeria, starting with Lagos. Real prices, straight-talk
safety notes ("No wahala / Shine your eye / No try am"), curated spots.

Built with [Astro](https://astro.build) as a fully static site — no database, no
server costs. Designed to deploy free on **Cloudflare Pages**.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Add or edit spots

All content lives in [`src/data/spots.ts`](src/data/spots.ts). Add a new object to
the `spots` array and the listing page, filters, and detail page are generated
automatically on the next build.

## Deploy to Cloudflare Pages (free)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo and set:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy — you get a free `*.pages.dev` URL with unlimited bandwidth.

Or deploy straight from this machine without GitHub:

```sh
npm run build
npx wrangler pages deploy dist --project-name waka
```

## Roadmap (kept deliberately small)

- [ ] Real photos per spot (store in `public/`, or Cloudflare R2 later)
- [ ] WhatsApp contact buttons for vendors
- [ ] More Lagos spots → 50 before any new feature
- [ ] Reviews (Cloudflare D1) — only after real visitors exist
