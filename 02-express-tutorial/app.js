const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
//routes
app.use("/api/people", people);
app.use("/login", auth);

app.listen(6313, () => {
  console.log("app is listening to port 6313");
});
