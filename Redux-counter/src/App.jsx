import React from "react";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import { useSelector } from "react-redux";

function App() {
  const nu = useSelector((state) => state.slic.cou);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-8">
      {/* Main Redux Counter */}
      <Counter />

      {/* Show the same Redux value in Counter1 & Counter2 */}
      <div className="flex gap-8">
        <Counter1 value={nu} />
        <Counter2 value={nu} />
      </div>
    </div>
  );
}

export default App;
