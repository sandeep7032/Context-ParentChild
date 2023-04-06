import React from "react";
import { useContext } from "react";
import Context from "./Context";

const D = () => {
  const ContextData = useContext(Context);
  return (
    <div>
      <h2>D Component</h2>
      <p>{ContextData}</p>
    </div>
  );
};

export default D;
