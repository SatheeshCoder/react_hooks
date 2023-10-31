import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  // Calculate the factorial using useMemo
  const factorial = useMemo(() => {
    if (number === 0) return 1;
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Re-compute the factorial when the number changes

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value, 10);
    if (!isNaN(newNumber)) {
      setNumber(newNumber);
    }
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter a number"
      />
      <div>
        <strong>Factorial of {number}:</strong> {factorial}
      </div>
    </div>
  );
}

export default FactorialCalculator;
