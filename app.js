const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to a simple tutorial project by Eric Francis");
})

app.get("/product", (req, res) => {
  res.send("This is the product page for OtSego Industries.");
})

app.get("/health", (req, res) => {
  res.send("Everything is OK");
})

app.listen(8080, () => console.log("Sever is listening on Port 8080"))
