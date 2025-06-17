import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("")
  return (
    <div className="flex flex-col gap-4 mt-2 pl-5">
      <SearchBar
        searchRecipeName={searchRecipeName}
        setSearchRecipeName={setSearchRecipeName}
      />
      <RecipeCard currRecipe={currRecipe as Recipe} searchFor={searchRecipeName}/>
    </div>
  )
}
