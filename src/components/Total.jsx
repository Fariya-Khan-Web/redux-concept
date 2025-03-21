import { useSelector } from "react-redux";

function Total() {

    const counters = useSelector((state)=> state.counters)

    const totalcount = counters.reduce((sum, current) => sum + current.value, 0)

    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Total Count</h2>
        <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 text-center">
          {totalcount}
        </div>
      </div>
    );
  }
  
  export default Total;