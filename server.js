const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/trik/playtech", (req, res) => {
  res.send(`🌟🌟 TRIK GACOR PLAYTECH HARI INI 🌟🌟

🌟 Jurassic Island II 🌟
🎭Manual Spin Biasa 35x
🎭Auto Spin Biasa 10x
🎭Auto Spin Turbo 30x
🎭Manual Spin Turbo 5x
`);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
