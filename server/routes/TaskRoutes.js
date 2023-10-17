import express from "express";
import {
  AddTask,
  AllTasks,
  EditTask,
  DeleteTask,
} from "../controllers/TaskControllers.js";

const router = express.Router();

// ADD TASK
router.post("/add-task", AddTask);

// ALL TASKS
router.get("/all-tasks", AllTasks);

// EDIT TASK
router.put("/edit-task/:id", EditTask);

// DELETE TASK
router.delete("/delete-task/:id", DeleteTask);

export default router;
