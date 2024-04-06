import React from "react";

const Question = ({ question }) => {
  return (
    <div className="border border-black w-[500px] h-[250px] flex flex-col p-4 gap-4 bg-gray-50 shadow-lg overflow-hidden m-2">
      <div className="text-sm md:text-base font-semibold">
        <span className="font-bold">Question:</span> {question.name}
      </div>
      <div className="text-sm md:text-base overflow-y-auto no-scrollbar">
        <span className="font-bold">Answer:</span>
        <div className="pr-2">{question.acceptedAnswer.text}</div>
      </div>
    </div>
  );
};

export default Question;
