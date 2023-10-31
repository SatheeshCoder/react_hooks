import React, { useState, useMemo } from "react";

function MemoExample() {
  const [numbers, setNumbers] = useState([]);
  const [filterEven, setFilterEven] = useState(false);

  const addNumber = (newNumber) => {
    
    setNumbers([...numbers, newNumber]);
  };

  const evenNumbers = useMemo(() => {
    console.log("Calculating even numbers...");
    return numbers.filter((number) => number % 2 === 0);
  }, [numbers]);

  const sumEvenNumbers = useMemo(() => {
    console.log("Calculating sum of even numbers...");
    return evenNumbers.reduce((acc, num) => acc + num, 0);
  }, [evenNumbers]);

  return (
    <div>
      <h1>Memo Example</h1>
      <button onClick={() => addNumber(Math.floor(Math.random() * 100))}>
        Add Random Number
      </button>
      <label>
        Filter Even Numbers:
        <input
          type="checkbox"
          checked={filterEven}
          onChange={() => setFilterEven(!filterEven)}
        />
      </label>
      <div>
        <h2>Numbers:</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      {filterEven && (
        <div>
          <h2>Even Numbers:</h2>
          <ul>
            {evenNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
          <h2>Sum of Even Numbers:</h2>
          <p>{sumEvenNumbers}</p>
        </div>
      )}
    </div>
  );
}

export default MemoExample;
