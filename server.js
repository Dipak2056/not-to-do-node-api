import express from "express";
const app = express();
import cors from "cors";

const PORT = 8000;
app.use(cors()); //to resolve the security breaches
app.use(express.json()); //using middle ware
//mongo connection
import mongoClient from "./src/config/db.js";
mongoClient();

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
