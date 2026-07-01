# Rainy Days in the Kiso

Landing page for a rainy-day activity in the Kiso Valley (Nagiso, Nagano) — the **Nerikiri Challenge** —
with a cross-sell to the sister site, *Beyond Nakasendo Cycling* ("Shower Cycling").

Built with **Next.js 14 (App Router) + TypeScript**, matching the stack of `kiso-ebike-lp`.

## Stack & features

- Next.js App Router, TypeScript, React 18
- Fonts via `next/font/google` (Instrument Serif + Hanken Grotesk) — self-hosted at build, no layout shift
- SEO: Metadata API (Open Graph + Twitter), canonical URL, `app/robots.ts`, `app/sitemap.ts`
- AI answer-engine friendly: JSON-LD structured data (`TouristAttraction` + `Organization` + `WebSite`) and `public/llms.txt`
- Signature rain animation over the dark hero → warm washi interior, with `prefers-reduced-motion` respected
- All 6 images pre-optimized in `public/assets/`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

> Note: `next/font/google` downloads the fonts from Google at build time, so the first `build`/`dev`
> needs internet access (Vercel has this by default).

## Deploy: GitHub → Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Rainy Days in the Kiso — initial LP"
git branch -M main
git remote add origin https://github.com/<your-username>/rainy-days-kiso.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to https://vercel.com/new and import the `rainy-days-kiso` repo.
2. Framework preset is auto-detected as **Next.js** — leave the defaults (build `next build`, output handled automatically).
3. Click **Deploy**. No environment variables are required.

### 3. Set the final URL (one edit)

After the first deploy you'll get a URL like `https://rainy-days-kiso.vercel.app`.
Open **`lib/site.ts`** and set `url` to that (or your custom domain), then commit & push — Vercel redeploys automatically.
This keeps the canonical URL, Open Graph tags, `sitemap.xml`, `robots.txt`, and JSON-LD all pointing at the right place.

## Where to edit things

| What | File |
| --- | --- |
| Contacts, links, site URL, brand name | `lib/site.ts` |
| Page copy / structure | `app/page.tsx` |
| Colours, type, layout (design tokens) | `app/globals.css` |
| SEO metadata & JSON-LD | `app/layout.tsx` |
| Rain / scroll / reveal behaviour | `components/Effects.tsx` |
| Images | `public/assets/` |

## Still to finalize

- **Brand name** — currently the working title *Rainy Days · Kiso* (alt: *Beyond Nakasendo — Rainy Days*).
- **Nerikiri price** — not shown yet; add a per-person + matcha figure to the "how to reserve" section when set.
- **Booking** — currently WhatsApp / email / phone. To wire Square like the e-bike site, add the service link in `lib/site.ts` and swap the primary CTA in `app/page.tsx`.
