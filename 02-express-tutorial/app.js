const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
app.use("/", [logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});
app.listen(6313, () => {
  console.log("app is listening to port 6313");
});
