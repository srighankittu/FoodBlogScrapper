import React from "react";
import Approach from "./Approach";

const Instructions = ({ instructions }) => {
  console.log(instructions);
  return (
    <div>
      {instructions.map((approach, index) => {
        return <Approach key={index} approach={approach} />;
      })}
    </div>
  );
};

export default Instructions;
