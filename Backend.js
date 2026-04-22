const express = require("express");
const app = express();

app.use(express.json());

let payments = [];

app.post("/pay", (req, res) => {
  payments.push(req.body);
  res.json({message: "saved"});
});

app.listen(5000, () => console.log("Server running"));