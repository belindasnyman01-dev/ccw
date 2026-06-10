# Deploy to GitHub Pages

This bundle is ready to publish as-is. Two ways — pick one.

## Option A — Deploy from a branch (simplest, no workflow)

1. Create a new repository, e.g. `ccw2026`.
2. Upload **all** these files to the repo **root** on the `main` branch,
   keeping the folder structure:
   ```
   index.html
   sw.js
   manifest.webmanifest
   .nojekyll
   icons/...
   ```
   (You can drag-and-drop the unzipped folder's contents in the GitHub web UI.)
3. Repo → **Settings → Pages**.
4. **Source:** "Deploy from a branch" → **Branch:** `main` → **Folder:** `/ (root)` → **Save**.
5. Wait ~1 minute. Your app is live at:
   ```
   https://<your-username>.github.io/ccw2026/
   ```
6. Open that URL on your phone → install (Add to Home Screen).

You can delete the `.github/` folder if you use this option.

## Option B — Deploy with Actions (auto-publish on every push)

1. Upload all files **including** the `.github/workflows/pages.yml` in this bundle.
2. Repo → **Settings → Pages → Source:** select **"GitHub Actions"**.
3. Push to `main` (or run the workflow manually under the Actions tab).
   Every push now redeploys automatically.

## Why the relative paths matter

GitHub project sites live under a subpath (`/ccw2026/`). The manifest, service
worker, and icons all use **relative paths**, so everything resolves correctly
at that subpath with zero edits.

## What Pages does and does not do

- ✅ HTTPS hosting → the app is **installable**, **works offline**, and the
  **QR camera** works.
- ✅ A stable, shareable URL and version history.
- ❌ Pages is **static** — it cannot store or sync captured data between
  devices. Each phone keeps its own data locally.

For real cross-device team sync (everyone seeing everyone's notes/follow-ups),
add a backend such as **Firebase/Firestore** and point the `loadKey` / `saveKey`
functions in `index.html` at it. Pages hosts the app; Firebase holds the shared
data. The two work together.
