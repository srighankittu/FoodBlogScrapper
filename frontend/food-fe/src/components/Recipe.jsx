import React from "react";
import Instructions from "./Instructions";
import NutritionalValue from "./NutritionalValue";
import Ingredients from "./Ingredients";

const Recipe = ({ recipe }) => {
  const nutritionInfo = recipe[0].nutrition;
  const ingredients = recipe[0].recipeIngredient;
  const instructions = recipe[0].recipeInstructions;
  return nutritionInfo !== null ? (
    <div className="flex">
      <div className="w-8/12 p-2 border border-solid border-black rounded-md">
        <Instructions instructions={instructions} />
      </div>
      <div className="w-4/12 flex flex-col">
        <div className="m-2 p-2 border border-solid border-black rounded-md">
          <h2 className="pb-4">
            <b>Ingredients</b>
          </h2>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredients key={index} index={index} ingredient={ingredient} />
            );
          })}
        </div>
        <div>
          <NutritionalValue nutritionInfo={nutritionInfo} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Recipe;
