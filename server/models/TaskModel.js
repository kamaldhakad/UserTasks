import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    taskText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("task", TaskSchema);
export default TaskModel;
