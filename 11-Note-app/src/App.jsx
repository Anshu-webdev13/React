import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter the notes heading"
          className="flex px-5 py-2  w-full border-2 font-medium outline-none rounded"
        />
        <textarea
          type="text"
          placeholder="Enter the details of notes"
          className="flex px-5 py-2 h-32 flex-row w-full font-medium border-2 outline-none rounded items-start"
        />
        <button className="flex px-5 py-2 flex-row w-full font-medium  bg-white text-black  border-2 outline-none rounded text-center">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          <div className="h-52 w-40 bg-white rounded-2xl"></div>
          <div className="h-52 w-40 bg-white rounded-2xl"></div>
          <div className="h-52 w-40 bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
