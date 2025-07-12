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
        "relative flex flex-col gap-4 px-4 pt-0 h-full",
        isMobile && "w-[17rem]"
      )}
    >
      <div className={cn("relative justify-self-stretch", isMobile && "pl-5")}>
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
