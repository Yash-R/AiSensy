const express = require("express");
const app = express();

app.use("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Server Started !!");
});

app.listen(3001, () => {
  console.log("Live !!");
});
