const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS - allow anyone to fetch any resource
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Required for SharedArrayBuffer (WASM threading in emulator)
      // same-origin-allow-popups is less strict than same-origin
      // and still enables cross-origin isolation with credentialless COEP
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
      res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
    }
    if (filePath.endsWith('.gba')) {
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    }
  }
}));

app.listen(PORT, () => {
  console.log(`🍍 SpongeBob GBA running on port ${PORT}`);
});
