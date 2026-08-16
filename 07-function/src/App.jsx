import React from "react";

const App = () => {
  const onchanging = (val) => {
    console.log(val);
  };
  return (
    <div>
      <input
        onChange={function (elem) {
          onchanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter the value"
      />
    </div>
  );
};

export default App;
