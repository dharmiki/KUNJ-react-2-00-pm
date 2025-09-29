import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-white drop-shadow mb-8">
          📅 Redux To-Do List
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
