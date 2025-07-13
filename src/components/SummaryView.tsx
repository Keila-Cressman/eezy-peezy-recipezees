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
  return (
    <div
      className={cn(
        "flex flex-col gap-4 px-4 h-full w-full bg-blue-800",
        isMobile && "w-[17rem] pl-2 pr-4"
      )}
    >
      <div className="flex justify-center">
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
        />
      </div>
        <RecipeCard
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
        />
    </div>
  )
}
