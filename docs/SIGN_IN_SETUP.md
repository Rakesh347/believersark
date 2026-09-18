# Setting up social sign-in

believersArk signs people in with Google, Facebook, Microsoft and Apple through **Firebase Authentication**. Firebase checks each login with the provider, so the app never handles passwords or provider secrets.

The code is already in place. It needs keys from the consoles below. Until they're added, the sign-in screen shows the four buttons with a "switches on once the Firebase keys are added" note, and email sign-in keeps working.

## What goes where

| Item | Where it lives | Secret? |
|---|---|---|
| Firebase web config (apiKey, authDomain, projectId, appId) | `js/auth-config.js` | No. It's public by design and safe to commit. |
| Facebook App Secret | Firebase console only | **Yes.** Never put it in the code. |
| Microsoft client secret | Firebase console only | **Yes.** |
| Apple private key (.p8) | Firebase console only | **Yes.** |

## 1. Firebase project (about 5 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and click **Create a project**. Name it `believersark`. Google Analytics is optional.
2. On the project home, click the **Web** icon (`</>`) to add a web app. Name it `believersArk web`. Skip Firebase Hosting for now.
3. Copy the four values `apiKey`, `authDomain`, `projectId` and `appId` into `js/auth-config.js`.
4. Open **Build → Authentication → Get started**.
5. Under **Settings → Authorized domains**, add:
   - `believersark.com`
   - `www.believersark.com`
   - `localhost` is there already, for testing on your laptop.

Every provider below asks for a **redirect URI**. Use:

```
https://<your-project-id>.firebaseapp.com/__/auth/handler
```

Firebase shows the exact value when you enable each provider.

## 2. Google (about 2 minutes)

1. In Firebase, go to **Authentication → Sign-in method → Add new provider → Google**.
2. Turn on **Enable**, choose a **support email**, and click **Save**.

That's all. Google is managed by Firebase directly.

## 3. Facebook (about 15 minutes)

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps) and click **Create app**. Choose **Authenticate and request data from users with Facebook Login**.
2. In the app's **App settings → Basic**, copy the **App ID** and **App secret**.
3. In Firebase, go to **Add new provider → Facebook**, turn on **Enable**, paste the App ID and App secret, and copy the **OAuth redirect URI** it shows.
4. Back in Facebook, open **Facebook Login → Settings**, paste that URI into **Valid OAuth Redirect URIs**, and save.
5. Facebook requires a **Privacy Policy URL** before the app can go **Live**, for example `https://believersark.com/privacy`. Until it's live, only people you add as testers in the Facebook app can sign in.

## 4. Microsoft (about 10 minutes)

1. Go to [portal.azure.com](https://portal.azure.com), then **Microsoft Entra ID → App registrations → New registration**.
2. Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts**. This covers Outlook, Hotmail and work accounts.
3. Set **Redirect URI** to **Web** and paste the Firebase handler URI. Click **Register**.
4. Copy the **Application (client) ID**.
5. Open **Certificates & secrets → New client secret**. Copy the secret's **Value**, which is only shown once. It expires, so note the date.
6. In Firebase, go to **Add new provider → Microsoft**, paste the client ID and secret, and save.

A company Microsoft account may need your IT admin's approval to register apps. A personal Microsoft account avoids that.

## 5. Apple (about 20 minutes, paid)

This needs an **Apple Developer Program** membership (USD 99 per year) from [developer.apple.com](https://developer.apple.com).

1. Go to **Certificates, Identifiers & Profiles → Identifiers**. Create an **App ID** with **Sign in with Apple** ticked.
2. Create a **Services ID**, for example `com.believersark.web`. This is the client ID for the web. Tick **Sign in with Apple**, click **Configure**, and add:
   - Domain: `<your-project-id>.firebaseapp.com`
   - Return URL: the Firebase handler URI
3. Go to **Keys**, create a key with **Sign in with Apple**, and download the `.p8` file. Note the **Key ID** and your **Team ID**.
4. In Firebase, go to **Add new provider → Apple** and enter the Services ID, Team ID, Key ID and the `.p8` contents.

Apple only shares a person's name on their very first sign-in. The app asks for it during onboarding anyway.

## Choosing providers

To hide a provider, remove it from the `providers` list in `js/auth-config.js`. For example, leave out `'apple'` until the developer membership is sorted.

## Hosting on believersark.com

Sign-in only works from `https`, which rules out opening the file directly from disk. Either host works with your domain:

- **GitHub Pages:** free, built from this repo. Add a `CNAME` file containing `believersark.com` and point the domain's DNS at GitHub.
- **Firebase Hosting:** free, in the same project as sign-in. You can then set `authDomain` to `believersark.com`, which keeps the sign-in popup on your own domain. That works more reliably in Safari and in-app browsers.

## Testing on your laptop

Serve the folder with any static server and open `http://localhost:<port>`. Google and Microsoft work from localhost. Facebook and Apple usually need the real https domain.

## Known limits

- Profiles are stored on the device (`localStorage`). A person who signs in on a second device goes through onboarding again, until a shared database such as Firestore is added.
- If someone uses the same email with two providers, Firebase blocks the second one by default and the app asks them to use their original button. Firebase can link accounts instead, as a later improvement.
