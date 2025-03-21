function Total({ count1, count2 }) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Total Count</h2>
        <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 text-center">
          {count1 + count2}
        </div>
      </div>
    );
  }
  
  export default Total;