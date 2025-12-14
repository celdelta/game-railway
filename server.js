const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// STATIC FILE (HTML)
app.use(express.static(path.join(__dirname, "public")));

// API GENERATE TRIK
app.get("/trik/:provider", (req, res) => {
  const provider = req.params.provider.toLowerCase();

  if (provider === "pgsoft") {
    return res.send(`
🌟🌟 TRIK GACOR PG SOFT HARI INI 🌟🌟

🎰 Game Random
🎭 Manual Spin Biasa 15x
🎭 Auto Spin Biasa 30x
🎭 Auto Spin Turbo 20x
🎭 Manual Spin Turbo 10x

Salam JP Boskuuu 🥰
    `);
  }

  res.send("❌ Provider belum tersedia");
});

// ROOT → LOAD HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
