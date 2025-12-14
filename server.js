const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// ⬇️ WAJIB PALING ATAS
app.use(express.static("public"));

// API generate trik
app.get("/trik/:provider", (req, res) => {
  const provider = req.params.provider;

  if (provider === "pgsoft") {
    return res.send(`
🌟🌟 TRIK GACOR PG SOFT HARI INI 🌟🌟

🌟 Mahjong Ways 🌟
🎭 Manual Spin Biasa 20x
🎭 Auto Spin Turbo 30x
🎭 Manual Turbo 10x

Salam JP Bosku 🥰
`);
  }

  res.send("Provider belum tersedia");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
