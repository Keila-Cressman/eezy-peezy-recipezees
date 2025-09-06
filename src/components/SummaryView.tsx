import { useEffect, useRef, useState } from "react"
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
  const SummaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        SummaryRef.current &&
        !SummaryRef.current.contains(event.target as Node)
      ) {
        setHideSearchBar(false)
        setSearchRecipeName("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setHideSearchBar, setSearchRecipeName])

  return (
    <div
      ref={SummaryRef}
      className={cn(
        "flex flex-col gap-4 h-full w-full bg-red-800",
        isMobile && "pl-0 gap-2"
      )}
    >
      <div>
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
          className={hideSearchBar ? "hidden" : undefined}
        />
      </div>
      <div className="overflow-y-auto ">
        <RecipeCard
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
          recipeExpanded={(open: boolean) => {
            setHideSearchBar(open)
            setSearchRecipeName("")
          }}
          closeRecipeCard={hideSearchBar}
        />
      </div>
    </div>
  )
}
