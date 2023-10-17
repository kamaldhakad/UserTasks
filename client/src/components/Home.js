import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [taskText, setTaskText] = useState("");
  const [taskData, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("");

  const addTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/add-task",
        { taskText }
      );
      toast.success(res.data.message);
      setTaskText("");
      console.log(res, "res");
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const getTasks = async () => {
    try {
      const res = await axios("http://localhost:5000/api/v1/task/all-tasks", {
        taskText,
      });
      setData(res.data.tasks);
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/api/v1/task/delete-task/" + id
      );
      toast.success(res.data.message);
      console.log(res, "res");
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const editFieldTask = (id) => {
    const editText = taskData.filter((item) => item._id == id);
    console.log(editText, "editexr");
    setTaskText(editText[0].taskText);
    setIsEditable(true);
    setEditId(id);
  };

  const editTask = async (id) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/v1/task/edit-task/" + id,
        { taskText }
      );
      toast.success(res.data.message);
      setTaskText("");
      setIsEditable(false);
      setEditId("");
    } catch (error) {
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    getTasks();
  }, [taskData]);

  return (
    <>
      <div className="home-page page">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="heading">
                <img src="/assets/images/right1.png" /> To Do's
              </h4>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <div className="search-wrap">
                <span className="search-icon">
                  <HiSearch />
                </span>
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="tasks">
              {taskData.map((item) => (
                <div className="task" key={item._id}>
                  <div className="card">
                    <h6>{item.taskText}</h6>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className="actions">
                    <span
                      className="close"
                      onClick={() => deleteTask(item._id)}
                    >
                      <img src="/assets/images/icon1.svg" />
                    </span>
                    <span
                      className="edit"
                      onClick={() => editFieldTask(item._id)}
                    >
                      <img src="/assets/images/icon2.svg" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="add-task-wrap">
                <input
                  type="text"
                  placeholder="Add new task"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                  required
                />
                <button onClick={() => addTask}>+</button>
                <button onClick={() => editTask(editId)}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
