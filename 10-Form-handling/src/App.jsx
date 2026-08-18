import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const onSubmited = (event) => {
    event.preventDefault();
    console.log("Form is submited by", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          onSubmited(event);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
