import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("")
  return (
    <div className="relative flex flex-col gap-4 px-4 pt-0 w-[17rem] h-full">
      <div className="relative">
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
        />
      </div>
      <div className="relative h-full overflow-y-auto">
        <RecipeCard
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
        />
      </div>
    </div>
  )
}
