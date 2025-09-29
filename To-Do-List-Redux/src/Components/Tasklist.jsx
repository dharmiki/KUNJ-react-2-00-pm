import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, updateTask } from "../features/slice";

function TaskList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  console.log(editId)
  console.log(editTitle)

  const handleSave = (id) => {
    if (editTitle.trim()) {
      dispatch(updateTask({ id, newTitle: editTitle }));
    }
    setEditId(null);
    setEditTitle("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditTitle("");
  };

  const renderTask = (task) => (
    <li
      key={task.id}
      className={`flex justify-between items-center p-3 rounded-lg shadow transition ${
        task.status === "completed"
          ? "bg-green-100 line-through text-gray-600"
          : "bg-yellow-100"
      }`}
    >
      <div className="flex flex-col">
        {editId === task.id ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border px-2 py-1 rounded-lg"
          />
        ) : (
          <p className="font-medium text-lg">{task.title}</p>
        )}
        <span className="text-sm text-gray-500">
          {task.date} ⏰ {task.time}
        </span>
      </div>

      <div className="flex gap-2">
        {editId === task.id ? (
          <>
            <button
              onClick={() => handleSave(task.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => dispatch(toggleTask(task.id))}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
            >
              {task.status === "pending" ? "Complete" : "Undo"}
            </button>
            <button
              onClick={() => handleEdit(task)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">
        📝 Pending Tasks
      </h2>
      {tasks.filter((t) => t.status === "pending").length === 0 ? (
        <p className="text-gray-500">No pending tasks</p>
      ) : (
        <ul className="space-y-3">
          {tasks.filter((t) => t.status === "pending").map(renderTask)}
        </ul>
      )}

      <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
        ✅ Completed Tasks
      </h2>
      {tasks.filter((t) => t.status === "completed").length === 0 ? (
        <p className="text-gray-500">No completed tasks</p>
      ) : (
        <ul className="space-y-3">
          {tasks.filter((t) => t.status === "completed").map(renderTask)}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
