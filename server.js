const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Required for SharedArrayBuffer (used by emulator cores)
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  next();
});

app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.gba')) {
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

app.listen(PORT, () => {
  console.log(`🍍 SpongeBob GBA running on port ${PORT}`);
});
