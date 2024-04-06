import React from "react";
import NutritionType from "./NutritionType";

const NutritionalValue = ({ nutritionInfo }) => {
  return (
    <div className="m-2 p-2 border border-solid border-black rounded-md">
      <h2 className="pb-4">
        <b>Nutritional details</b>
      </h2>
      {Object.keys(nutritionInfo)
        .filter((key) => key !== "@type")
        .map((key) => (
          <NutritionType key={key} type={key} value={nutritionInfo[key]} />
        ))}
    </div>
  );
};

export default NutritionalValue;
