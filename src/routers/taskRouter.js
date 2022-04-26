import express from "express";
const router = express.Router();

import {
  getAllTask,
  insertTask,
  getTask,
} from "../models/task/TaskList.model.js";

router.post("/", async (req, res) => {
  const data = req.body;
  const result = await insertTask(data);
  console.log(result);
});
router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const result = _id ? await getTask(_id) : await getAllTask();

  res.json({
    status: "success",
    message: "get method",
    result,
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "delete method",
  });
});

export default router;
