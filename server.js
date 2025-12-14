const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

/* HOME */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

/* DATA TRIK */
const trikData = {
  pgsoft: `
🌟🌟 TRIK GACOR PG SOFT HARI INI 🌟🌟

🌟 Mahjong Ways 🌟
🎭 Manual Spin 15x
🎭 Auto Spin 30x
🎭 Turbo Spin 20x

🌟 Mahjong Ways 2 🌟
🎭 Manual Spin 10x
🎭 Auto Spin 40x
🎭 Turbo Spin 30x
`,

  playtech: `
🌟🌟 TRIK GACOR PLAYTECH HARI INI 🌟🌟

🌟 Jurassic Island II 🌟
🎭Manual Spin Biasa 35x 
🎭Auto Spin Biasa 10x 
🎭Auto Spin Turbo 30x
🎭Manual Spin Turbo 5x
`
};

/* ROUTE DINAMIS */
app.get("/trik/:provider", (req, res) => {
  const provider = req.params.provider.toLowerCase();

  if (!trikData[provider]) {
    return res.send("❌ Provider tidak ditemukan");
  }

  res.send(trikData[provider]);
});

/* HEALTH CHECK */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
