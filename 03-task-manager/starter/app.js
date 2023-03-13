const connectDB = require("./database/connect");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
require("dotenv").config();
//middleware

app.use(express.json());
//routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
