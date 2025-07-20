import { useState } from "react"
import RecipeCard, { Recipe } from "./RecipeCard"
import { SearchBar } from "./SearchBar"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"

export type SummaryViewProps = {
  currRecipe: Recipe
}

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("")
  const isMobile = useMobileSize()
  const [hideSearchBar, setHideSearchBar] = useState(false)
  return (
    <div
      className={cn(
        "flex flex-col gap-4 h-full w-full",
        isMobile && "pl-0 gap-2"
      )}
    >
      <div>
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
          className={hideSearchBar ? "hidden" : undefined}
        /></div>
      <div className="overflow-y-auto ">
        <RecipeCard
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
          recipeExpanded={(open:boolean) => {
            setHideSearchBar(open)
          }}
        />
        </div>
    </div>
  )
}
