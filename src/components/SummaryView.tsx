import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("")
  return (
    <div className="flex flex-col gap-4 px-5 pt-0 w-[17rem]">
      <SearchBar
        searchRecipeName={searchRecipeName}
        setSearchRecipeName={setSearchRecipeName}
      />
      <RecipeCard currRecipe={currRecipe as Recipe} searchFor={searchRecipeName}/>
    </div>
  )
}
