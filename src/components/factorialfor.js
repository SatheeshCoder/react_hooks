import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  // Calculate the factorial of the number using useMemo
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      console.log(result);
      for (let i = 2; i <= number; i++) {
        result *= i;
        console.log(`Intermediate result for i = ${i}: ${result}`);
      }
      return result;
    }
  }, [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
}

export default FactorialCalculator;
