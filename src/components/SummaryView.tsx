import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"
// import { ViewAll } from "./side-nav-bar/ViewAll"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("")
  return (
    <div className="flex flex-col gap-4 mt-2 pl-5">
      {/* to be used for VIewALL */}
      <SearchBar
        searchRecipeName={searchRecipeName}
        setSearchRecipeName={setSearchRecipeName}
      />
      {/* <ViewAll
        searchFor={searchRecipeName}
      /> */}
      {/* to be used on side nav buttons */}
      <RecipeCard currRecipe={currRecipe as Recipe} searchFor={searchRecipeName}/>
    </div>
  )
}
