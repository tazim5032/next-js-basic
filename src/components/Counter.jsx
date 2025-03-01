"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 text-white rounded-lg bg-red-500"
        >
          -
        </button>
        <p className="text-3xl font-semibold text-white">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 text-white rounded-lg bg-green-500"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
