import { useState } from "react";

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

 
  const addTask = () => {
    if (taskInput.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: taskInput,
        urgent: isUrgent,
      },
    ]);

    setTaskInput("");
    setIsUrgent(false);
  };

 
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Task Tracker</h2>

      {/* Controlled Form */}
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        Urgent
      </label>

      <button onClick={addTask}>Add Task</button>

      <hr />


      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <span>
              {task.name} {task.urgent && "🔥"}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
