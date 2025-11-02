import { useEffect, useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"
import { RandomDishSelector } from "./RandomDishSelector"
import { Recipe } from "./RecipeCard"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"

export default function Home() {
  const fullRecipes = recipes as []
  const isMobile = useMobileSize()
  const [currRecipe, setCurrRecipe] = useState<
    { image: string; name: string }[]
  >([])

  useEffect(() => {
    if (currRecipe.length === 0) {
      setCurrRecipe(fullRecipes)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function buttonSelection(recipes: any[], recipeType: string): void {
    if (recipeType === "View_all") {
      setCurrRecipe(fullRecipes)
      return
    }

    const getRecipeByType = recipes.filter((recipe) =>
      recipe.type.includes(recipeType)
    ) as []
    setCurrRecipe(getRecipeByType)
  }

  return (
    <div
      className={cn(
        "flex flex-1 py-5 px-5 gap-4",
        isMobile && "gap-2 px-2 py-2"
      )}
    >
      <SideNav
        onClick={(recipeType: string) =>
          buttonSelection(fullRecipes, recipeType)
        }
      />

      <div className="border-blue-200 border flex" />

      {currRecipe.length === 0 ? (
        <RandomDishSelector />
      ) : (
        <SummaryView currRecipe={currRecipe as Recipe} />
      )}
    </div>
  )
}
