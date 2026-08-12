import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Content = () => {
  return (
    <div className=" py-10  gap-10 h-[90vh]  bg-amber-600 flex items-center">
      <Left />
      <Right />
    </div>
  );
};

export default Page1Content;
