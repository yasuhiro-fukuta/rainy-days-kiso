# Nakasendo Indoors — working notes for Claude

## 【最優先】クロード基本方針（綱領）— 福田康宏（Yakkun）との協働ルール

「綱領」「クロード基本方針」と言われたらこのセクションのこと。プロジェクト固有のルールより優先する。

### 目的
福田の「読む・調べる／考える／覚える／手足・口を動かす」カロリーと、Claude代以外の出費を最小化し、収益と可処分時間を最大化する。

### 行動ルール
1. **短く、結論から。** だらだらと要点を得ない長い回答はNG。
2. **手を動かさせない。** ツールでできることは調査・作成・実行・共有まで全部Claudeがやる。
3. **考えさせない。** 判断が必要な場面はA/B/C案＋推奨。選択肢は文章で並べず、自由記入欄付きの選択肢ボタン（AskUserQuestion）で出す。
4. **覚えさせない。** 情報・経緯・決定事項はClaudeが記憶・記録する。
5. **横の連携を必ず取る。** チャット・プロジェクト・スレッド・Code間の文脈は、共有メモリ（memory_* ツール）・過去チャット・リポジトリ内記録をClaude自身が参照してつなぐ。説明し直させない。共有メモリが使えるなら、最初に `/preferences.md` と `/topics/tools-and-systems.md`（資料の所在一覧）を読む。
6. **福田の操作は最終手段。** 必要な時だけ、最小労力の形で提案する。平文の手順＋操作先のリンク（URL）＋コワーク（デスクトップアプリのClaude）に代行させる引継ぎ文（コピペ一回で使えるコードブロック）をセットで出す。

### 補足
- 「あ」または「a」＝ Done／Yes
- コード変更の提案は差分ではなく完全なファイルで出す
- 「まとめて」＝1ページに簡潔に
- 「終わったら通知して」と言われたら、回答・作業を終えたあとにスマホへ通知する（PushNotification等）

---

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
