import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Content = () => {
  return (
    <div className=" px-10 py-10  gap-10 h-[90vh]  flex items-center">
      <Left />
      <Right />
    </div>
  );
};

export default Page1Content;
