/* Sign-in configuration.
   The Firebase web config below is a set of public identifiers, not secrets, so it is safe
   to commit. Provider secrets (Facebook app secret, Apple private key, Microsoft client
   secret) are entered in the Firebase console and must never be put in this file.
   Leave apiKey empty and the social buttons show as "not set up yet". */
window.ARK_AUTH_CONFIG = {
  firebase: {
    apiKey: 'AIzaSyAdxNieumUPcofaOj5chdWuAVI3w2ZA-N0',
    authDomain: 'believersark.firebaseapp.com',
    projectId: 'believersark',
    appId: '1:901389509313:web:e7bbb80500d8dd2975aa40'
  },
  /* Buttons appear in this order. Remove a name to hide that provider. */
  providers: ['google', 'facebook', 'microsoft', 'apple']
};
