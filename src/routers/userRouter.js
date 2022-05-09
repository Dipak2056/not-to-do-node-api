import express from "express";
import {
  deleteUser,
  getAllUser,
  insertUser,
} from "../models/user/user.model.js";

const router = express.Router();

//return user info
router.get("/", async (req, res) => {
  const users = await getAllUser();
  res.json({
    message: "get method",
    users,
  });
});

//create new user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "new user created",
        })
      : res.json({
          status: "error",
          message: "unable to create new user, try agin later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//delete user
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const result = await deleteUser(_id);
  res.json({ message: "delete method", result });
});

export default router;
