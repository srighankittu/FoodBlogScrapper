import React from "react";

const NutritionType = ({ type, value }) => {
  return (
    <div className="flex justify-between">
      <b>{type}</b> <span>{value}</span>
    </div>
  );
};

export default NutritionType;
