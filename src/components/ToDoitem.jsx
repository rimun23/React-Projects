import React from "react";
function ToDoItem({ index, task, removeTask }) {
  return (
    <li key={index}>
      {task}{" "}
      <button
        onClick={() => {
          removeTask(index);
        }}
        className="remove_btn"
      >
        +
      </button>
    </li>
  );
}
export default ToDoItem;
