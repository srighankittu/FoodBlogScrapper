import React from "react";

const Ingredients = ({ ingredient, index }) => {
  return (
    <div className="flex">
      <b>{index + 1}. </b>
      <span className="text-wrap">{ingredient}</span>
    </div>
  );
};

export default Ingredients;
