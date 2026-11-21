import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {

  // Store tasks in state
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  // Complete or uncomplete task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app">
      <div className="todo-container">

        <h1>My TODO List</h1>
        <p className="subtitle">
          Organize your daily tasks
        </p>

        <TaskForm addTask={addTask} />

        <div className="task-summary">
          <span>Total Tasks: {tasks.length}</span>
          <span>Completed: {completedCount}</span>
          <span>Pending: {tasks.length - completedCount}</span>
        </div>

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;