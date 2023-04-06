import { useState } from "react";
import B from "./B";
import Context from "./Context";

const A = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>A Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue(input);
        }}
      >
        Send to D Component
      </button>
      <hr />
      <Context.Provider value={value}>
        <B />
      </Context.Provider>
    </div>
  );
};

export default A;
