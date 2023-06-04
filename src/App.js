import React, { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editedIndex, setEditedIndex] = useState(null);
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleEditTaskChange = (event) => {
    setEditedTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const handleEditTask = (index) => {
    setEditedTask(tasks[index]);
    setEditedIndex(index);
  };
  const handleSaveTask = () => {
    if (editedTask !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editedIndex] = editedTask;
      setTasks(updatedTasks);
      setEditedTask("");
      setEditedIndex(null);
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div id="main">
      <textarea
        id="task"
        onChange={handleTaskChange}
        value={newTask}
      ></textarea>
      <button id="btn" onClick={handleAddTask}>
        Add Task
      </button>
      {tasks.map((task, index) => (
        <div key={index} className="list">
          {editedIndex === index ? (
            <>
              <textarea
                className="editTask"
                onChange={handleEditTaskChange}
                value={editedTask}
              ></textarea>
              <button className="saveTask" onClick={handleSaveTask}>
                Save
              </button>
            </>
          ) : (
            <>
              {task}
              <button className="edit" onClick={() => handleEditTask(index)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default App;
