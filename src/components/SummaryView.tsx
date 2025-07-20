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
        "flex flex-col gap-4 px-4 h-full w-full mr-5",
        isMobile && "w-[17rem] pl-0 pr-4 gap-2"
      )}
    >
      <div className={cn( isMobile && "flex justify-self-center")}>
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
        />
      </div>
      <div className="flex w-full overflow-y-auto">
        <RecipeCard
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
        />
        </div>
    </div>
  )
}
