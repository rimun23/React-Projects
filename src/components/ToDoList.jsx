import React, { useState } from "react";
import ToDoItem from "./ToDoitem";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  return (
    <div className="cont">
      <h1>ToDo list</h1>
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="write your tasks"
        value={newTask}
      />
      <button onClick={addTask} className="send_btn">
        add new task
      </button>
      <ol>
        {tasks.map((task, index) => {
          return (
            <ToDoItem
              key={index}
              index={index}
              task={task}
              removeTask={removeTask}
            />
          );
        })}
      </ol>
    </div>
  );
}
export default ToDoList;
