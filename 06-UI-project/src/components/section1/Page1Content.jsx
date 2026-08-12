import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Content = () => {
  return (
    <div className="px-10 bg-amber-600 flex items-center justify-between h-screen">
      <Left />
      <Right />
    </div>
  );
};

export default Page1Content;
