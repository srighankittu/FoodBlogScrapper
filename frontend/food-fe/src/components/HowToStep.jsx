import React from "react";

const HowToStep = ({ step, index }) => {
  return (
    <div>
      <span>
        <b>{index + 1}.</b>
        {step.text}
      </span>
    </div>
  );
};

export default HowToStep;
