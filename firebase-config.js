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

const firebaseConfig = {
  apiKey: "AIzaSyBAHLeqXjNkZjxAoWWElAYVjZ6mXH4-fu8",
  authDomain: "ccw2026-1b331.firebaseapp.com",
  projectId: "ccw2026-1b331",
  storageBucket: "ccw2026-1b331.firebasestorage.app",
  messagingSenderId: "409702335664",
  appId: "1:409702335664:web:aa45008f9126eea2d32775"
};

/* Restrict sign-in to your company. Any email CONTAINING this string is
   allowed. Use the bare word "datavoice" to allow all Datavoice domains,
   or set an exact domain like "datavoice.co.za" to be strict. */
window.ALLOWED_DOMAIN = "datavoice";
