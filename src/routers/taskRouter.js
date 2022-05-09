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
  try {
    const data = req.body;
    console.log(data, "kljljlkjljl");
    const result = await insertTask(data);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "status successfull",
      });
    }

    console.log(result);
    res.json({
      status: "error",
      message: "unable to access the data please try again letter",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: "unable to access the data please try again letter",
    });
  }
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

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(req.body);
  const result = await deleteTask(_id);
  res.json({
    status: "delete method execujted successfully",
    result,
  });
});

export default router;
