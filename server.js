import express from "express";
const app = express();

const PORT = 8000;
app.use(express.json()); //using middle ware

app.get("", (req, res) => {
  res.send("hello world");
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
