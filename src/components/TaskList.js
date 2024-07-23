import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get("/tasks")
      .then((response) => {
        console.log("Fetched tasks:", response.data); // Log the fetched tasks
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          setTasks([]);
          console.error("Expected an array but got", response.data);
        }
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
