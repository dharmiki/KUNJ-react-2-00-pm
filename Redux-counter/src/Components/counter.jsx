import { useDispatch, useSelector } from "react-redux";
import { decre, incre } from "../Features/Slice";

function Counter() {
  const nu = useSelector((state) => state.slic.cou);
  const dis = useDispatch();

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Counter</h1>

      {/* Counter Value */}
      <p className="text-6xl font-extrabold text-indigo-600 mb-6">{nu}</p>

      {/* Buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => dis(decre())}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transform hover:scale-105 transition"
        >
          -
        </button>
        <button
          onClick={() => dis(incre())}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transform hover:scale-105 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
