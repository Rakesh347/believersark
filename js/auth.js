/* Social sign-in through Firebase Authentication.
   Firebase checks every login with the provider, so the app never handles a password or a
   provider secret. Exposes window.ArkAuth and announces itself with window events:
     arkauth:ready     { configured, error? }  once loading has finished
     arkauth:signedin  user                    after a redirect-based sign-in returns
     arkauth:error     { code, message }       when a redirect-based sign-in failed */
const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
const cfg = (window.ARK_AUTH_CONFIG || {}).firebase || {};
const PROVIDER_OF = { 'google.com': 'google', 'facebook.com': 'facebook', 'microsoft.com': 'microsoft', 'apple.com': 'apple' };

function announce(name, detail) { window.dispatchEvent(new CustomEvent(name, { detail })); }

function shape(user, provider) {
  const first = (user.providerData && user.providerData[0]) || {};
  return {
    uid: user.uid,
    email: user.email || first.email || '',
    name: user.displayName || first.displayName || '',
    photoURL: user.photoURL || first.photoURL || null,
    emailVerified: !!user.emailVerified,
    provider: provider || PROVIDER_OF[first.providerId] || 'unknown'
  };
}

(async function start() {
  if (!cfg.apiKey || !cfg.authDomain || !cfg.projectId) {
    window.ArkAuth = { ready: false, configured: false };
    announce('arkauth:ready', { configured: false });
    return;
  }
  try {
    const [{ initializeApp }, A] = await Promise.all([
      import(SDK + 'firebase-app.js'),
      import(SDK + 'firebase-auth.js')
    ]);
    const auth = A.getAuth(initializeApp(cfg));
    auth.useDeviceLanguage();

    const make = {
      google() { const p = new A.GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' }); return p; },
      facebook() { const p = new A.FacebookAuthProvider(); p.addScope('email'); return p; },
      microsoft() { const p = new A.OAuthProvider('microsoft.com'); p.setCustomParameters({ prompt: 'select_account' }); return p; },
      apple() { const p = new A.OAuthProvider('apple.com'); p.addScope('email'); p.addScope('name'); return p; }
    };

    window.ArkAuth = {
      ready: true,
      configured: true,
      /* Resolves with the signed-in user, or null when the browser left for a redirect
         sign-in (the result then arrives as an arkauth:signedin event on return). */
      async signIn(name) {
        if (!make[name]) throw { code: 'ark/unknown-provider' };
        const provider = make[name]();
        try {
          const result = await A.signInWithPopup(auth, provider);
          return shape(result.user, name);
        } catch (e) {
          const code = e && e.code;
          if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
            await A.signInWithRedirect(auth, provider);
            return null;
          }
          throw e;
        }
      },
      async signOut() { await A.signOut(auth); }
    };

    try {
      const back = await A.getRedirectResult(auth);
      if (back && back.user) announce('arkauth:signedin', shape(back.user, PROVIDER_OF[back.providerId]));
    } catch (e) {
      announce('arkauth:error', { code: e && e.code, message: e && e.message });
    }
    announce('arkauth:ready', { configured: true });
  } catch (e) {
    window.ArkAuth = { ready: false, configured: true, loadError: true };
    announce('arkauth:ready', { configured: true, error: true });
  }
})();
