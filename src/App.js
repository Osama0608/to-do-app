import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [taskAdded, setTaskAdded] = useState(false);

  const handleTaskAdded = () => {
    setTaskAdded(!taskAdded); // Toggle the state to trigger re-fetching tasks
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList key={taskAdded} />{" "}
      {/* Re-mount TaskList to fetch tasks again */}
    </div>
  );
};

export default App;
