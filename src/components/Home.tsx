import { useEffect, useState } from "react"
import { recipes } from "../utils/recipes"
import Gallery from "./Gallery"
import { Recipe } from "./RecipeCard"
import { SideNav } from "./SideNav"
import SummaryView from "./SummaryView"

export default function Home() {
  const fullRecipes = recipes as []
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
      <div className="flex py-5 pl-5 gap-4">
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
