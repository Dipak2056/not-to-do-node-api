import express from "express";
const router = express.Router();

import {
  getAllTask,
  insertTask,
  getTask,
  deleteTask,
  updateTask,
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
router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);
    console.log(result);
    res.json({
      status: "Succes",
      message: "Data is updated successfull",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const result = await deleteTask(_id);
  res.json({
    status: "delete method execujted successfully",
    result,
  });
});

export default router;
