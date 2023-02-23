const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> resource not found </h1>");
});

app.listen(6313, () => {
  console.log("server listening to port 6313");
});
