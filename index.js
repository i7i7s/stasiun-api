import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

// Baca file JSON
const data = JSON.parse(fs.readFileSync("./stasiun_api.json", "utf-8"));

// Endpoint utama
app.get("/", (req, res) => {
  res.send("API Stasiun Kereta aktif 🚉");
});

// Endpoint untuk data stasiun
app.get("/stasiun", (req, res) => {
  res.json(data);
});

// Jalankan server (untuk lokal)
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

export default app;
