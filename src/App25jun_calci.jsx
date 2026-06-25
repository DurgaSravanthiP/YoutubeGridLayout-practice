import { useState } from "react";
export default function App25jun_calci() {
  //   const data = "Hello, World!";
  //   const name = "Sravanthi";
  //   const num1=10;
  //   const num2=20;
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  function handleSubmit() {
    setResult(num1 + num2);
    setNum1(0);
    setNum2(0);
  }

  return (
    <>
      {/* <h2>{data}</h2>
      <h3>My name is {name}</h3>
      <h4>Sum of {num1} and {num2} is {num1+num2} </h4> */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-8 rounded-xl shadow-2xl w-80 text-center">
          <h1 className="text-3xl font-bold text-black mb-6">Calculator</h1>

          <input
            type="number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            className="w-full bg-gray-200 border border-black rounded-lg px-4 py-2 mb-4 "
          />

          <input
            type="number"
            placeholder="Number 2"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="w-full bg-gray-200 border border-black rounded-lg px-4 py-2 mb-6 "
          />

          <div className="border-2 border-black rounded-lg py-3 bg-blue-300">
            <button
              className="text-xl font-semibold text-black"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="border border-black rounded-lg py-3 mt-10">
            <h2 className="text-3xl font-semibold text-black">{result}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
