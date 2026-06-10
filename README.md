# CCW 2026 — Datavoice Field Companion (PWA)

An installable, offline-capable Progressive Web App for the Datavoice team at
Critical Communications World 2026.

## What's in this folder

```
index.html              ← the app
manifest.webmanifest    ← PWA manifest (name, icons, colours)
sw.js                   ← service worker (offline caching)
icons/                  ← app icons (192, 512, maskable, apple-touch, favicon)
```

## Important: why it must be hosted

A service worker — the thing that makes the app installable and work offline —
**only runs over HTTPS (or http://localhost).** It will **not** run if you just
double-click `index.html` from your file system (`file://`). So to get the
install button and offline mode, the folder needs to be served from a web host.

## Fastest ways to publish (pick one)

**A. Netlify Drop (no account, ~30 seconds)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live HTTPS link. Open it on your phone → install.

**B. GitHub Pages**
1. Create a repo, upload these files (keep the folder structure).
2. Settings → Pages → deploy from `main` branch, root.
3. Visit the published HTTPS URL.

**C. Any web server / company intranet (HTTPS)**
   Copy the folder to a directory served over HTTPS. Done.

**D. Test locally first**
```bash
cd this-folder
python3 -m http.server 8080
# then open http://localhost:8080 (localhost counts as a secure context)
```

## Installing on a phone

- **iPhone (Safari):** open the URL → Share → *Add to Home Screen*.
- **Android (Chrome):** open the URL → you'll see an *Install* prompt, or use
  the in-app **Install app** button in Profile, or the browser menu →
  *Install app / Add to Home screen*.

Once installed it launches full-screen with the DV icon and works offline.

## Data & sync — how it behaves

The app auto-detects where it's running:

| Where it runs                | Storage                          | Team sync |
|------------------------------|----------------------------------|-----------|
| Hosted PWA (this bundle)     | On-device, offline, persistent   | No*       |
| Inside Claude (artifact)     | Shared storage                   | **Yes, live** |

\* For true cross-device team sync on the hosted PWA, point the storage layer
at a backend (Firebase/Firestore is a clean drop-in — the `loadKey` / `saveKey`
functions in `index.html` are the only thing to swap). Until then, use the
**Export (TSV)** button in Profile to push captures into the master Google Sheet.

## Login note

The Datavoice-email login establishes *identity* (so captures are attributed and
shared). Real verification of Google Drive folder membership requires Google
Workspace SSO/OAuth on a backend; the login screen marks where that integrates.
