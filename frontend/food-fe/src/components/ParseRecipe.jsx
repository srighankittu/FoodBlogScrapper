import { useRef, useState } from "react";
import FAQComponent from "./FAQ";
import Recipe from "./Recipe";

const ParseRecipe = () => {
  const url = useRef();
  const [recipe, setRecipes] = useState(null);
  const [FAQs, setFAQs] = useState([]);
  const [title, setTitle] = useState("");
  async function ParseURL() {
    const recipe_url = { url: url.current.value };
    const parseUrl = await fetch("http://localhost:3000/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe_url),
    });
    const data = await parseUrl.json();
    const resipeList = data["@graph"].filter((item) => {
      return item["@type"] === "Recipe";
    });
    const FAQList = data["@graph"].filter((item) => {
      return item["@type"] === "Question";
    });
    const title = data["@graph"].filter((item) => {
      return item["@type"] === "Article";
    })[0].headline;
    setRecipes(resipeList);
    setTitle(title);
    setFAQs(FAQList);
  }

  return (
    <div className="p-4 m-4">
      <div className="flex flex-row">
        <label>URL</label>
        <input
          className="flex border border-solid border-black"
          ref={url}
          type="text"
        ></input>
        <button
          className="border border-solid border-black rounded-md p-2 m-2 bg-slate-500"
          onClick={ParseURL}
        >
          Get Recipes
        </button>
        <div className="text-3xl font-extrabold p-2 m-2">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="text-bold ">
        <div>
          <div className="mx-4 pt-2 px-2 text-2xl">
            <b>FAQs</b>
          </div>
        </div>
        <FAQComponent FAQs={FAQs} />
      </div>
      {recipe && (
        <div>
          <div className="text-2xl">
            <b>Instructions To Cook</b>
          </div>
          <div>
            <Recipe recipe={recipe} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ParseRecipe;
