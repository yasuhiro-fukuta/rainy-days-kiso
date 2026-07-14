# Rainy Days in the Kiso — working notes for Claude

Next.js 14 (App Router) + TypeScript LP for the Nerikiri Challenge, an indoor
wagashi workshop in Nagiso. Deployed on Vercel (project `rainy-days-kiso`,
scope `yakkuns-projects`).

## Deployment workflow (owner's standing instruction, 2026-07)

When the owner requests a change:

1. Develop on the session's designated branch, verify with `npx next build`.
2. Push the result to the `staging` branch as well
   (`git push origin <work-branch>:staging --force-with-lease` — staging only
   ever mirrors the latest proposal, so force-updating it is expected).
3. Reply with the staging preview link:
   https://rainy-days-kiso-git-staging-yakkuns-projects.vercel.app
4. Wait for the owner's explicit approval (e.g. 「本番化して」「承認」).
5. On approval: open a PR to `main`, merge it, and reply with the production
   link: https://rainy-days-kiso.vercel.app

Do not merge to `main` without that approval. Vercel auto-deploys every
branch push (previews) and `main` (production).

Note: preview URLs are only visible to third parties if Deployment
Protection (Vercel Authentication) is disabled in the Vercel project
settings — only the owner can change that setting.

## Copy guidelines

- Hero tagline: "The Nakasendo's Seasons, Captured in a Sweet".
- Emphasize that the workshop is indoors; do not build copy around
  "enjoy the rain" framing. Brand name "Rainy Days · Kiso" stays.
- The e-bike / Shower Cycling cross-sell was deliberately removed (2026-07);
  do not reintroduce it.

## Photos

Real workshop photos live in `public/assets/` (nerikiri_*.jpg, tea_service.jpg).
Source photos arrive via the team's Google Drive; before committing new ones,
convert HEIF→JPEG, resize to ≤1600px, and strip EXIF (phone originals contain
GPS coordinates).
