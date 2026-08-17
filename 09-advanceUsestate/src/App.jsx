import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState({ user: "Anshu", age: 21 });
//   const onbtnClicked = () => {
//     const newNum = { ...num };
//     newNum.user = "Palak";
//     newNum.age = "19";
//     setNum(newNum);
//   };
//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={onbtnClicked}>Click me</button>
//     </div>
//   );
// };

// export default App;



const App = () => {
  const [num, setNum] = useState([10, 20, 30, 40]);
  const onBtnClicked = () => {
   const newNum = [...num];
    newNum.push(99);
    setNum(newNum);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onBtnClicked}>Click me</button>
    </div>
  );
};

export default App;
