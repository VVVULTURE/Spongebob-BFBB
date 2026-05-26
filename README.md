# 🍍 SpongeBob GBA – Battle for Bikini Bottom

Browser-based GBA emulator using [EmulatorJS](https://emulatorjs.org/).  
Pick **any one** of the three deployment options below.

---

## 🚀 Option A — Vercel (Recommended — fastest, free)

1. Install the Vercel CLI (one-time):
   ```bash
   npm i -g vercel
   ```
2. From this folder:
   ```bash
   vercel
   ```
3. Follow the prompts. When asked for the output directory, enter `public`.  
   That's it — Vercel reads `vercel.json` automatically.

> **No build step needed.** Everything is in `public/`.

---

## 🚀 Option B — Netlify (Drag & Drop — easiest)

### Via CLI
```bash
npm i -g netlify-cli
netlify deploy --prod --dir public
```

### Via Browser (zero install)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `public/` folder onto the page.
3. Done — live in seconds.

`netlify.toml` handles headers automatically.

---

## 🚀 Option C — Render (free hosting, slight cold start)

1. Push this repo to GitHub.
2. Go to [render.com](https://render.com) → New → Web Service.
3. Connect your repo and use these settings:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Deploy.

---

## 📁 Project Structure

```
spongebob-gba/
├── public/
│   ├── index.html   ← game page + EmulatorJS setup
│   └── rom.gba      ← the GBA ROM
├── server.js        ← Express server (Render only)
├── package.json
├── vercel.json      ← Vercel config + COOP/COEP headers
├── netlify.toml     ← Netlify config + COOP/COEP headers
└── README.md
```

## ⌨️ Controls

| GBA Button | Keyboard |
|-----------|----------|
| D-Pad     | Arrow Keys |
| A         | Z |
| B         | X |
| L         | A |
| R         | S |
| Start     | Enter |
| Select    | Shift |
| Save State | F1 |
| Load State | F2 |
| Fullscreen | F |

---

> The COOP/COEP headers (`Cross-Origin-Opener-Policy: same-origin` + `Cross-Origin-Embedder-Policy: require-corp`) are **required** for SharedArrayBuffer support, which the emulator needs to run at full speed.
