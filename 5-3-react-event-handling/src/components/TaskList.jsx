import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 && (
        <p className="placeholder">No tasks yet. Add one above!</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
