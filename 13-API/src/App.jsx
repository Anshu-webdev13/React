import React from "react";

const App = () => {
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/posts");

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <button onClick={getData}>Click me</button>
    </div>
  );
};

export default App;
