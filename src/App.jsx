import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/addTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Gwaji Element",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Gwaji Element",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Morning Walk",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 5,
      text: "Reading Book",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        displayForm={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
