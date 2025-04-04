import { useState } from "react"
import { recipes } from "../utils/recipes"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"
import { Recipe } from "./RecipeCard"

export default function Home() {
  const fullRecipes = recipes as []
  const [currRecipe, setCurrRecipe] = useState<
    { image: string; name: string }[]
  >([])

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
        </div>
      </div>
    </div>
  )
}
