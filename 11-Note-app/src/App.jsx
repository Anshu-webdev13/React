import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    setTitle("");
    setDetail("");
  };
  const deleteBtn = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl font-bold text-center">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter the notes heading"
          className="flex px-5 py-2  w-full border-2 font-medium outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea

          placeholder="Enter the details of notes"
          className="flex px-5 py-2 h-32 flex-row w-full font-medium border-2 outline-none rounded items-start"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="flex justify-center px-5 py-2 w-full font-medium bg-white text-black border-2 outline-none rounded">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (elm, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start relative h-52 w-40 p-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black rounded-2xl"
              >
                <div>
                  <h3 className="leading-tight font-bold text-xl">
                    {elm.title}
                  </h3>
                  <p className="mt-4 leading-tight font-semibold text-gray-500">
                    {elm.detail}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteBtn(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
