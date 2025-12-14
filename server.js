const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve static file (index.html)
app.use(express.static("public"));

// ===== API PROVIDERS =====
app.get("/api/providers", (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "providers.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal membaca providers.json" });
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
