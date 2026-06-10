/* ============================================================
   FIREBASE CONFIG  —  fill this in to turn on live team sync.
   Until you paste a real config below, the app runs in local mode
   (per-device) and everything still works.

   Where to get these values:
   Firebase console -> Project settings (gear icon) -> "Your apps"
   -> Web app -> "SDK setup and configuration" -> Config.
   Copy each value into the matching line below.
   These values are NOT secret — they are safe to commit to GitHub.
   Security is enforced by Firestore Rules + Google sign-in.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

/* Restrict sign-in to your company. Any email CONTAINING this string is
   allowed. Use the bare word "datavoice" to allow all Datavoice domains,
   or set an exact domain like "datavoice.co.za" to be strict. */
window.ALLOWED_DOMAIN = "datavoice";
