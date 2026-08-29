import React, { use, useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const aChanging = () => {
    console.log("a is changing...");
  };
  const bChanging = () => {
    console.log("b is changing ....");
  };
  useEffect(
    function () {
      aChanging();
    },
    [a],
  );
  useEffect(
    function () {
      bChanging();
    },
    [b],
  );
  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <div className="btn">
        <button
          onClick={function () {
            setA(a + 1);
          }}
        >
          Click A
        </button>
        <button
          onClick={function () {
            setB(b - 1);
          }}
        >
          Click B
        </button>
      </div>
    </div>
  );
};

export default App;
