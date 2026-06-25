import { useState } from "react";

export default function App25jun_counter() {
  let [count, setCount] = useState(0);
  function handleSubmit() {
    setCount(count++);
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl mb-5">Count is {count}</div>
        <button
          className="border-2 border-black rounded-lg py-2 px-2 bg-blue-300"
          onClick={handleSubmit}
        >
          Increment
        </button>
      </div>
    </>
  );
}
