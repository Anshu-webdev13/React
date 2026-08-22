import React from "react";

const App = () => {
  let student = {
    'user': 'Anshu',
    'age':20,
    'Gender':'female'
  }
  localStorage.setItem('student',JSON.stringify(student));
  let students = JSON.parse(localStorage.getItem("student"));
  console.log(students.user);
  localStorage.clear();

  return <div>App</div>;
};

export default App;
