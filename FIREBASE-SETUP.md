# Turn on live team sync (Firebase) — step by step

Right now the app works per-device. These steps switch it to **live sync** with
**Google sign-in**, so every teammate sees everyone's notes, jots, contacts and
follow-ups in real time (and it still works offline, reconciling when signal
returns). It's free — Firebase's no-cost tier covers a team easily.

You only do this once. Takes about 10 minutes.

---

## 1. Create a Firebase project
1. Go to https://console.firebase.google.com and sign in with your Google account.
2. **Add project** → name it e.g. `ccw2026` → continue. You can turn Google
   Analytics off. → **Create project**.

## 2. Register a Web app and copy the config
1. On the project home, click the **web icon** `</>` ("Add app").
2. Nickname it `ccw` → **Register app**. (Skip "Firebase Hosting".)
3. You'll see a `firebaseConfig = { ... }` block. Copy those six values into
   **`firebase-config.js`** in your repo, replacing the `PASTE_…` placeholders.
   (These values are not secret — safe to commit.)
4. Commit/push `firebase-config.js`.

## 3. Create the Firestore database
1. Left menu → **Build → Firestore Database** → **Create database**.
2. Choose **Production mode** → pick the region closest to the event
   (e.g. `europe-west…`) → **Enable**.
3. Open the **Rules** tab, delete what's there, paste the entire contents of
   **`firestore.rules`** (in this repo), and click **Publish**.

## 4. Turn on Google sign-in
1. Left menu → **Build → Authentication** → **Get started**.
2. **Sign-in method** tab → **Google** → enable → set a support email → **Save**.
3. **Settings** tab → **Authorized domains** → **Add domain** →
   add **`belindasnyman01-dev.github.io`**
   (`localhost` is already there for local testing).

## 5. Done — test it
1. Make sure `firebase-config.js` (with your real values) is pushed and GitHub
   Pages has redeployed.
2. Open **https://belindasnyman01-dev.github.io/ccw/** on your phone.
3. The login screen now shows **Sign in with Google**. Sign in with your
   Datavoice account. Capture a note. Have a colleague do the same on their
   phone — you'll each see the other's entries appear live.

---

## How access is controlled
- Only signed-in Google accounts whose email contains **`datavoice`** can read or
  write data — enforced by the Firestore rules, not just the app. To require an
  exact domain, change `datavoice` to `datavoice\\.co\\.za` in **both**
  `firestore.rules` (re-publish) and `window.ALLOWED_DOMAIN` in
  `firebase-config.js`.
- Anyone on the team can update a follow-up's status; only the person who
  created an item can delete it.

## If something doesn't work
- **"Sign-in failed / unauthorized domain"** → you missed step 4.3 (add the
  github.io domain to Authorized domains).
- **"Missing or insufficient permissions"** → rules not published (step 3.3), or
  your email doesn't match the domain string.
- **Login still shows name/email fields** → `firebase-config.js` still has
  `PASTE_…` values, or wasn't pushed/redeployed. The app falls back to local
  mode until a real config loads.
- **Nothing breaks if you skip Firebase** — leave the placeholders and the app
  runs exactly as before, per device.
