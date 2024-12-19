import React, { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  return (
    <div className="app">
      <div className="cont">
        <h1>ToDo list</h1>
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="write your tasks"
          value={newTask}
        />
        <button onClick={addTask}>add new task</button>
        <ol>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
export default App;
