import { useEffect, useState } from "react"
import { recipes } from "../utils/recipes"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"
import { Recipe } from "./RecipeCard"
import Gallery from "./Gallery"

export default function Home() {
  const fullRecipes = recipes as []
  const [currRecipe, setCurrRecipe] = useState<
    { image: string; name: string }[]
  >([])

  useEffect(() => {
    if (currRecipe.length === 0) {
      setCurrRecipe(fullRecipes)
    }// eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div>
      <div className="flex flex-col pt-5 px-5">
        <div className="flex flex-row gap-4 divide divide-x-2 divide-blue-200">
          <SideNav
            onClick={(recipeType: string) =>
              buttonSelection(fullRecipes, recipeType)
            }
          />
          <SummaryView currRecipe={currRecipe as Recipe} />
          {currRecipe.length === 0 && <Gallery recipeType={"View_all"} />}
        </div>
      </div>
    </div>
  )
}
