import express from "express";
const app = express();

const PORT = 8000;
//for the request
app.get("/", (req, res) => {
  res.send("<h1>this is my first app</h1>");
});
//load rrouter
import taskRouter from "./src/routers/taskRouter.js";
//task api
app.use("/api/v1/task/", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is running at localhost:${PORT}`);
});
