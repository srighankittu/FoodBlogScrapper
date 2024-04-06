import React from "react";
import Question from "./Question";

const FAQComponent = ({ FAQs }) => {
  return (
    <div className="flex flex-row p-2 m-2">
      {FAQs.map((item, index) => {
        return <Question key={index} question={item} />;
      })}
    </div>
  );
};

export default FAQComponent;
