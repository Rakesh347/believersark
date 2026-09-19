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
| Following | Connects with churches | Follows churches, joins communities (with admin approval) |
| Communities | Creates them and approves every join request | Sees only communities of churches they follow |
| Reacting | — | Amen, Bless, Peace, Love, Spirit, plus comment, save, share |

Think of it as LinkedIn for churches and Instagram for believers.

## Joining

1. Sign in with Google, Facebook, Microsoft or Apple (or email).
2. Fill in your details: username, email, contact number, city, country and language are required. Gender and a square-cropped profile photo are optional. You must accept the Terms & Conditions.
3. Enter your church's invite code. This step is required. You can join more churches later from **Me → Join another church**.
4. Pick personal goals, such as Bible in a year, Psalms in 30 days or journaling. You can skip this step.

Prototype invite codes:

| Church | Code |
|---|---|
| Grace Cathedral | GRACE-7291 |
| Bethel Assembly | BETHEL-3304 |
| St. Thomas Marthoma | MARTHOMA-1876 |
| New Life Fellowship | NEWLIFE-6112 |
| Living Hope Church | HOPE-2210 |
| Emmanuel Baptist | EMMANUEL-1994 |

Church admins see their own code in the church console and can copy or share it.

## What is where

- **Home:** stories open in a blurred overlay, with reactions and share but no comments. The feed shows posts from churches you follow, then "Suggested for you" based on what you interact with. On desktop, a right-hand column holds the newsroom (admin articles that open full screen with text, images, audio and video). The calendar icon in the header pops up your event calendar.
- **Churches:** search with suggestions, a filter panel (day, time, language, city, ministries, live now, following) and cards that show service times and connections on hover.
- **Community:** communities belong to a church. Only admins create them, only followers see them, and admins approve every join request.
- **BibleGPT and Settings & privacy:** at the bottom of the left menu. BibleGPT answers only questions about the Bible.
- **Me:** your profile, all on one page. Edit it, change your photo, join another church, and see your churches, communities, saved posts and family.

The platform has no giving or donations and no denominations.

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
js/auth-config.js   Firebase web config and which sign-in buttons to show
js/auth.js          social sign-in through Firebase Authentication
docs/               setup guides
assets/photos/      feed, church and event photographs
assets/media/       newsroom audio and video
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

- No real payments, SMS or OTP delivery. The email code is shown on screen.
- Sign-in with Google, Facebook, Microsoft and Apple is real once Firebase keys are added. See [docs/SIGN_IN_SETUP.md](docs/SIGN_IN_SETUP.md).
- Live streams, BibleGPT answers and sermon summaries are illustrative.
- Newsroom articles are seeded; there is no admin authoring screen yet.
- Worship music and the marketplace are designed "coming soon" screens.

## Photo and media credits

Photographs are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license). The newsroom audio is public domain and the video is CC BY-SA 4.0. See `assets/photos/CREDITS.md`.
