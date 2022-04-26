const express = require("express");
const app = express();

const PORT = 8000;
//for the request
app.get("/", (req, res) => {
  res.send("<h1>this is my first app</h1>");
});
//task api
const taskFunc = (req, res) => {
  res.json({ message: "added the task to the database" });
};
app.get("/api/v1/task", taskFunc);

app.post("/api/v1/task", (req, res) => {
  res.send("posting the data");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is running at localhost:${PORT}`);
});
