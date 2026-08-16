import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function increaseby5() {
    setNum(num + 5);
  }
  function reset() {
    setNum(0);
  }

  return (
    <div>
      <h1>{num}</h1>
      <section>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increaseby5}>Increase by 5</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default App;
