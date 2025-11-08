const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/test", (req, res) => {
  console.log("/api/test に対してPOSTリクエストされました。");
  res.json({ status: 200 });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
