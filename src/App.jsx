import { useEffect, useState } from 'react';
import Counter from './components/counter';
import Total from './components/Total';
import './App.css'

function App() {



  return (
    <div className="min-h-screen min-w-screen transition-colors duration-300 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button> */}

        <div className="flex flex-col items-center justify-center space-y-8 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Counter App
          </h1>

          <div className="flex gap-8">
            <Counter
              id={1}
              label="Counter 1"
            />
            <Counter
              id={2}
              label="Counter 2"
            />
          </div>

          <Total />
        </div>
      </div>
    </div>
  );
}

export default App;