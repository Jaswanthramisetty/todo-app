import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span>{task.text}</span>
      </label>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;