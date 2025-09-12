import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaBroom } from "react-icons/fa";


function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddOrUpdateTask = () => {
    if (!task.trim()) return;

    if (isEditing) {
      const updatedList = [...list];
      updatedList[editIndex].name = task;
      setList(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setList([...list, { name: task }]);
    }
    setTask("");
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  // Edit Task
  const handleEditTask = (index) => {
    setTask(list[index].name);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Clear All
  const handleClearAll = () => {
    setList([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-8">
        My To-Do List
      </h1>

      {/* Input + Add/Update */}
      <div className="flex w-full max-w-md gap-4 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="✍️ Write a task..."
          className="flex-1 px-4 py-3 rounded-full border border-white/30 bg-white/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 backdrop-blur-sm transition"
        />
        <button
          onClick={handleAddOrUpdateTask}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition"
        >
          {isEditing ? <FaEdit /> : <FaPlus />}
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      {/* Clear All Button */}
      {list.length > 0 && (
        <button
          onClick={handleClearAll}
          className="flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition"
        >
          <FaBroom /> Clear All
        </button>
      )}

      {/* Task List */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {list.length > 0 ? (
          list.map((el, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <span className="text-gray-900 font-medium text-lg">{el.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditTask(i)}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white hover:scale-105 hover:shadow-md transition"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(i)}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white hover:scale-105 hover:shadow-md transition"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic py-4">
            No tasks available
          </p>
        )}
      </div>
    </div>
  );
}

export default App;


