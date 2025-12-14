const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// STATIC FILE
app.use(express.static("public"));

// API
app.get("/trik/:provider", (req, res) => {
  const provider = req.params.provider.toLowerCase();

  if (provider === "pgsoft") {
    return res.send("🔥 TRIK PG SOFT AKTIF 🚀");
  }

  res.send("Provider belum tersedia");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
