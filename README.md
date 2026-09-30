# Laila — Portfolio

A one-page portfolio (About me first, then TikTok Go campaign results) in the same Finder-window style as Visibility Map. English by default, with an EN / ID switch for Bahasa Indonesia (the choice is remembered in the visitor's browser).

Everything on the page (totals, charts, rankings, brand folders, case studies and the full campaign table) is calculated from `data.js`. There is no backend and nothing is sent anywhere.

## Files

```
index.html      the page (must stay at the top level of the repository)
styles.css      all styling, light and dark mode
script.js       calculations, charts, filters, language switch
data.js         YOUR DATA: 52 campaigns, profile, logo lists
assets/         favicon + logos/
README.md       this file
```

## Updating the numbers

Open `data.js`. Each campaign is one block like this:

```js
{ "name": "Martabak MPR", "brand": "Martabak Pecenongan 78", "launched": "2026-04-06",
  "targetCreators": 250, "targetPosts": 250, "creators": 250, "posts": 165,
  "sales": 35966190.54, "redeemed": 29492821.54, "orders": 1731, "redeemedOrders": 1422 }
```

Add, remove or edit blocks and every number on the site updates. Keep the commas between blocks.

## Adding brand logos

Logos live in `assets/logos/`. At the bottom of `data.js`:

- `BRAND_LOGOS`: one logo per brand, using the brand name exactly as in the campaign data.
- `CAMPAIGN_LOGOS`: a sub-brand logo used when a campaign name contains a keyword (for example `mpr` or `pavelle`).
- `GROUP_LOGOS`: extra logos shown on a brand's detail panel.

Brands without a logo show their initials.

## Updating About me and the campaign role

Also in `data.js`, under `window.PROFILE`: the introduction (`summary`) and the campaign role (`experience`). Every text has an English (`en`) and Indonesian (`id`) version.

## Pages

Each section is its own page: visitors move with the **Next / Back** buttons at the bottom, the sidebar (or the **Sections** menu on phones), or the browser's back button. Each page has its own link, for example `.../#brands` or `.../#campaigns`. The order is set by `SEC_ME` and `SEC_WORK` near the top of `script.js`.

## Small amounts

Every amount is shown, however small (including campaigns with only a few orders). To hide small figures later, set `MIN_RP` (transaction and redeemed values) or `MIN_AVG` (average order, sales per creator) near the top of `script.js`, for example `MIN_RP = 1e6` for Rp 1,000,000.

## Publishing on GitHub Pages

1. Create a new public repository (for example `portfolio`).
2. Click **Add file → Upload files** and drag in the **contents** of this folder: `index.html`, `styles.css`, `script.js`, `data.js`, `README.md` and the `assets` folder. Do not drag the folder itself, or you will get a 404.
3. Click **Commit changes**.
4. Go to **Settings → Pages**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
5. After a minute or two your site is at `https://your-username.github.io/portfolio/`.

The top of the repository should list `index.html` directly, with no folder around it.
