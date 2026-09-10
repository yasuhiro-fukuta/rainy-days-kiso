# Nakasendo Indoors — working notes for Claude

Next.js 14 (App Router) + TypeScript LP for the Nerikiri Challenge, an indoor
wagashi workshop in Nagiso. English at `/`, Japanese at `/ja` (all copy lives
in one en/ja dictionary in `components/Landing.tsx`). Deployed on Vercel
(project `nakasendo-indoors`, scope `yakkuns-projects` — renamed from
`rainy-days-kiso` in 2026-09; the GitHub repo keeps the old name, which is
fine). Old `rainy-days-kiso*.vercel.app` URLs are dead or frozen — never
share them.

## Deployment workflow (owner's standing instruction, 2026-07)

When the owner requests a change:

1. Develop on the session's designated branch, verify with `npx next build`.
2. Push the result to the `staging` branch as well
   (`git push origin <work-branch>:staging --force-with-lease` — staging only
   ever mirrors the latest proposal, so force-updating it is expected).
3. Reply with the staging preview link:
   https://nakasendo-indoors-git-staging-yakkuns-projects.vercel.app
4. Wait for the owner's explicit approval (e.g. 「本番化して」「承認」).
5. On approval: open a PR to `main`, merge it, and reply with the production
   link: https://nakasendo-indoors.vercel.app

Do not merge to `main` without that approval. Vercel auto-deploys every
branch push (previews) and `main` (production).

Note: preview URLs are only visible to third parties if Deployment
Protection (Vercel Authentication) is disabled in the Vercel project
settings — only the owner can change that setting.

## Copy guidelines

- Brand: "Nakasendo Indoors" (renamed from "Rainy Days · Kiso", 2026-09).
  Positioning is "the Nakasendo's indoor experience", not a rainy-day
  activity — do not build copy around weather framing.
- Hero tagline: "The Nakasendo's Seasons, Captured in a Sweet" /
  「中山道の四季を、ひとつの和菓子に。」
- The e-bike / Shower Cycling cross-sell was deliberately removed (2026-07);
  do not reintroduce it.
- Offerings: the main ~2h session (Wednesdays, bookings from Nov 2026) and
  the Morning Session, 8:30–9:30 — sweets as the after-breakfast treat,
  free shuttle for guests staying at Kashiwaya.

## Photos

Real workshop photos live in `public/assets/` (nerikiri_*.jpg, tea_service.jpg).
Source photos arrive via the team's Google Drive; before committing new ones,
convert HEIF→JPEG, resize to ≤1600px, and strip EXIF (phone originals contain
GPS coordinates).
