import React, { useState, useMemo } from "react";

function MemoExample() {
  const [age, setAge] = useState(0);

  // Here, we use useMemo to memoize the "someValue" object.
  const someValue = useMemo(() => {
    return { value: "67" };
  }, []); // The empty dependency array means this value is only computed once.

  const handleClick = () => {
    setAge(age + 1);
  };

  const doSomething = () => {
    return someValue;
  };

  return (
    <>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </>
  );
}

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  );
};

const Instructions = React.memo((props) => {
  return (
    <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
      {/* Access the memoized value here */}
      <p>Memoized Value: {props.doSomething().value}</p>
    </div>
  );
});

export default MemoExample;
