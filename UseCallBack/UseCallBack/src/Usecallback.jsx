import { useCallback, useState } from "react";

const Usecallback = () => {
  const [count, setCount] = useState(0);

  const handleIn = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-100 via-green-200 to-lime-200">
      <div className="relative bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.3)] p-10 w-[360px] text-center transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]">
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-3 text-emerald-700 tracking-widest drop-shadow-md">
          useCallback
        </h1>
        <p className="text-gray-700 mb-8 text-sm italic">
          A React hook for optimized functions ⚡
        </p>

        {/* Count Display */}
        <div className="mb-8">
          <p className="text-2xl font-semibold text-gray-800">
            Count:
          </p>
          <span className="text-6xl font-bold text-emerald-600 drop-shadow-lg">
            {count}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5">
          <button
            onClick={handleIn}
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-full shadow-md hover:from-emerald-600 hover:to-green-700 hover:shadow-lg active:scale-95 transition-all"
          >
            ➕ Increment
          </button>

          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-medium rounded-full shadow-md hover:from-gray-300 hover:to-gray-400 active:scale-95 transition-all"
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecallback;

