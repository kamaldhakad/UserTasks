import TaskModel from "../models/TaskModel.js";

// ADD TASK
export const AddTask = async (req, res) => {
  try {
    const { taskText } = req.body;
    const task = await TaskModel.create({ taskText });

    res.status(201).send({
      success: true,
      message: "Task Added",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};

// ALL TASKS
export const AllTasks = async (req, res) => {
  try {
    const { taskText } = req.body;
    const tasks = await TaskModel.find();

    res.status(200).send({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};

// EDIT TASK
export const EditTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Task updated",
      updatedTask,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};

// DELETE TASK
export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await TaskModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};
