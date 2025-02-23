const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server berjalan dengan Ngrok!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
