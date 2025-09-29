import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/slice";

function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
  };

  console.log(title)

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-4 mb-6 flex gap-3"
    >
      <input
        type="text"
        placeholder="Enter your task..."
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
