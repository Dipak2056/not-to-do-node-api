import express from "express";
const router = express.Router();

import { insertTask } from "../models/task/TaskList.model.js";

router.get("/", (req, res) => {
  res.json({
    message: "get method",
  });
});
router.post("/", async (req, res) => {
  const data = req.body;
  const result = await insertTask(data);
  console.log(result);
});
router.delete("/", (req, res) => {
  res.json({
    message: "delete method",
  });
});

export default router;
