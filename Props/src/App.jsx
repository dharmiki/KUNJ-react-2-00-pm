import { useState } from "react";
import Counter1 from "./components/counter1";

function App() {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increase = () => setCounter(counter + 1);

  const decrease = () => {
    if (counter <= 0) {
      alert("Value not valid");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-r from-teal-400 via-cyan-500 to-orange-400"
      }`}
    >
      <div
        className={`shadow-2xl rounded-2xl p-8 sm:p-12 text-center w-full max-w-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Toggle Switch */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full font-medium shadow-md transition ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
          Counter App
        </h1>
        <p className="opacity-70 mb-6">Made with React & Props</p>

        {/* Counter Display */}
        <div
          className={`text-6xl font-bold mb-6 transition-all duration-300 ${
            darkMode ? "text-yellow-400" : "text-cyan-600"
          }`}
        >
          {counter}
        </div>

        {/* Child Component */}
        <Counter1 multipro={counter} />

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={decrease}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition transform hover:scale-105 active:scale-95"
          >
            –
          </button>
          <button
            onClick={increase}
            className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-600 transition transform hover:scale-105 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;






