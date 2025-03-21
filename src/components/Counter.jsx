import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counters/countersSlice";

function Counter({ id, label }) {

    const dispatch = useDispatch();
    const count = useSelector((state) =>
      state.counters.find((counter) => counter.id === id)?.value
    );

    return (
      <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{label}</h2>
        <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => dispatch(decrement(id))}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch(increment(id))}
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
  
  export default Counter;