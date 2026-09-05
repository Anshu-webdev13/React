import React, { use } from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  let Navigate = useNavigate();
  return (
    <div className="bg-cyan-800 px-2 py-1">
      <button
        onClick={() => {
          Navigate("/");
        }}
        className="bg-amber-500 px-2 py-1 m-2 rounded cursor-pointer gap-5"
      >
        Return To Home Page
      </button>
      <button
        onClick={() => {
          Navigate(-1);
        }}
        className="bg-amber-500 px-4 py-1 m-2 rounded cursor-pointer gap-5"
      >
        Back
      </button>

      <button
        onClick={() => {
          Navigate(+1);
        }}
        className="bg-amber-500 px-5 py-1 m-2 rounded cursor-pointer gap-5"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
