import { useEffect, useState } from "react"
import { recipes } from "../utils/recipes"
import Gallery from "./Gallery"
import { Recipe } from "./RecipeCard"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"
import { cn } from "../utils/cn"
import { useMobileSize } from "../hooks/useMobileSize"

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

    const inRecipe = recipes.filter((recipe) =>
      recipe.type.includes(recipeType)
    ) as []
    setCurrRecipe(inRecipe)
  }

  return (
      <div className={cn(" flex flex-1 py-5 px-5 gap-4",
        isMobile && "gap-2 px-2 py-2")}>
          <SideNav
            onClick={(recipeType: string) =>
              buttonSelection(fullRecipes, recipeType)
            }
          />

        <div className="border-blue-200 border flex" />

          <SummaryView currRecipe={currRecipe as Recipe} />
          {currRecipe.length === 0 && <Gallery recipeType={"View_all"} />}
      </div>
  )
}
