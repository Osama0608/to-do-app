import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title };
    console.log("Sending task:", newTask); // Log the task being sent
    axios
      .post("/tasks", newTask)
      .then((response) => {
        setTitle("");
        console.log("Task added:", response.data); // Log the added task
        onTaskAdded(); // Callback to notify parent component that a task was added
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
