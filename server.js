const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// STATIC FILE
app.use(express.static("public"));

// HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// 🔥 ROUTE YANG BENAR (PERHATIKAN TITIK DUA)
app.get("/trik/:provider", (req, res) => {
  const provider = req.params.provider.toLowerCase();

  if (provider === "pgsoft") {
    return res.send(`
🌟🌟 TRIK GACOR PG SOFT 🌟🌟

🎭 Manual Spin 20x
🎭 Auto Spin 30x
🎭 Turbo Spin 10x

Salam JP Boskuuu 🚀
`);
  }

  res.status(404).send("Provider belum tersedia");
});

// START
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
