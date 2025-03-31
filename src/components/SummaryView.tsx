import { useState } from "react";
import { recipes } from "../utils/recipes";
import Gallery from "./Gallery";

export default function SummaryView(){
  const fullRecipes = recipes as []
    const [currRecipe, setCurrRecipe] = useState<
      { image: string; name: string }[]
    >([])
  return(
<div className="flex flex-col gap-4 mt-2 pl-5">
  Summary view in development
            {currRecipe.map((recipe) => ( 
              <ul className="text-left">
                <li>{recipe.name}</li>
              </ul>
            ))}
            {currRecipe.map((recipe) => (
              <Gallery recipeType={recipe.name} className="h-60" />
            ))}
          </div>  )
}