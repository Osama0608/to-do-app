const express = require("express");
const router = express.Router();

let tasks = [];

// Get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Add a new task
router.post("/", (req, res) => {
  const task = req.body;
  console.log("Received task:", task); // Log the received task
  tasks.push(task);
  console.log("Current tasks:", tasks); // Log the current tasks array
  res.status(201).json(task);
});

module.exports = router;
