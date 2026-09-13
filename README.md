# believersArk

One ark. Every church. Every believer.

A mobile-first web app that gives churches and believers one shared place instead of scattered WhatsApp groups, Facebook pages and YouTube channels.

## How the platform is shaped

The two account types have deliberately different powers.

| | Church account | Believer account |
|---|---|---|
| Profile | Verified church profile and portfolio | Personal profile |
| Publishing | Posts, stories, sermons, events, occasions, broadcasts | Conversations inside communities only |
| Messaging | Connects with and messages other verified churches | No direct messages |
| Following | Connects with churches | Follows churches, joins communities |
| Reacting | — | Amen, Bless, Peace, Love, Spirit, plus comment, save, share |

Think of it as LinkedIn for churches and Instagram for believers.

## Run it locally

There is no build step. Open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

On the sign-in screen for churches, the prototype shortcut logs you in as one of the seeded churches, so the church-to-church inbox and connections are populated straight away.

## Project structure

```
index.html          page shell
css/styles.css      design tokens and all styles
js/app.js           views, actions, seed data and the data layer
assets/photos/      feed, church and event photographs
```

## Design system

- Palette follows The Austin Stone: white ground `#FFFFFF`, surface `#F4F4F4`, charcoal ink `#282828`, accent blue `#00A3E1`.
- A charcoal dark theme is available under Settings.
- Figtree for all interface text; Newsreader italic is reserved for scripture.
- Every colour is a CSS custom property at the top of `css/styles.css`. Change tokens there, not in components.

## Data

- Seed data for churches, posts, events, communities, prayer requests and church-to-church threads lives in `js/app.js`.
- Dates in the seed are relative, so the demo never looks stale.
- When hosted as a Claude artifact the app syncs through `window.claude`. Anywhere else it runs in offline mode and keeps your changes in the browser's `localStorage`.
- Communities, church threads and connections are always kept on the device.

## Prototype limits

- No real payments, SMS, OTP delivery or Google/Apple sign-in.
- Live streams, BibleGPT answers and sermon summaries are illustrative.
- Christian news, worship music and the marketplace are designed "coming soon" screens.

## Photo credits

Photographs are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license). See `assets/photos/CREDITS.md`.
