import { useState } from "react";

function Counter() {
  console.log("counter-render");
  const [number, setNumber] = useState(0);

  function handle(e) {
    e.stopPropagation();

    setNumber(number + 1);
    console.log((number) => number + 1);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handle}>Add</button>
    </>
  );
}

export default Counter;
