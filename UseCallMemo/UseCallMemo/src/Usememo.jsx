import { useMemo, useState } from "react";

const Usememo = () => {
  const [count, setCount] = useState(0);

  const handleIn = () => {
    setCount(count + 1);
  };

  const counting = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div className="relative p-8 bg-gradient-to-r from-blue-200 to-blue-400 rounded-2xl shadow-xl w-[320px] mx-auto my-8 text-center overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      
      {/* Hover pseudo-elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <span className="absolute top-0 left-0 w-0 h-0 border-t-[120px] border-l-[120px] border-t-white border-l-transparent opacity-20 animate-ping"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[120px] border-r-[120px] border-b-white border-r-transparent opacity-20 animate-ping animation-delay-200"></span>
      </div>

      <h1 className="text-3xl font-extrabold mb-4 text-blue-900 animate-bounce">UseMemo Example</h1>

      <div className="mb-4">
        <h2 className="text-xl mb-1 text-blue-800">
          Count: <span className="font-semibold">{count}</span>
        </h2>
        <h2 className="text-xl text-blue-900">
          Counting: <span className="font-semibold">{counting}</span>
        </h2>
      </div>

      <button
        onClick={handleIn}
        className="relative px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-800 hover:text-yellow-100 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-10 after:absolute after:bottom-0 after:right-0 after:w-full after:h-full after:border-2 after:border-yellow-300 after:rounded-lg after:scale-0 after:transition-all after:duration-500 hover:after:scale-100"
      >
        +
      </button>
    </div>
  );
};

export default Usememo;
    