const express = require("express");
const app = express();

// WAJIB untuk Railway
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Game Railway is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
