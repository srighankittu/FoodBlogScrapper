import React from "react";
import HowToStep from "./HowToStep";

const Approach = ({ approach }) => {
  console.log(approach);
  //   return <div>Hi</div>;
  return (
    <div>
      <h2 className="text-md pb-4 pt-2">
        <b>{approach.name}</b>
      </h2>
      {approach.itemListElement.map((step, index) => {
        return <HowToStep key={index} step={step} index={index} />;
      })}
    </div>
  );
};

export default Approach;
