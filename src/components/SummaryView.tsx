import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"
import { recipes } from "../utils/recipes"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [recipeName, setRecipeName] = useState("")

  const findRecipe = () => {
    recipes.map((recipe)=> recipe.name.includes(recipeName))
  }
  return (
    <div className="flex flex-col gap-4 mt-2 pl-5">
      <SearchBar recipeName={recipeName} setRecipeName={setRecipeName}/>
      <RecipeCard currRecipe={currRecipe as Recipe} />
    </div>
  )
}
