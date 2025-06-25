import { useEffect, useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { recipes } from "../utils/recipes"
import Gallery from "./Gallery"
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

    const inRecipe = recipes.filter((recipe) =>
      recipe.type.includes(recipeType)
    ) as []
    setCurrRecipe(inRecipe)
  }

  if (isMobile) {
    return (
      <div className="relative">
        <div className="absolute flex pt-5 px-5 gap-4 divide divide-x-2 divide-blue-200">
          <div className="flex flex-col ">
            <SideNav
              onClick={(recipeType: string) =>
                buttonSelection(fullRecipes, recipeType)
              }
            />
          </div>
          <div className="left-32 flex flex-col h-screen overflow-y-auto">
            <SummaryView currRecipe={currRecipe as Recipe} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute flex pt-5 px-5 gap-4 divide divide-x-2 divide-blue-200">
        <div className="flex flex-col ">
          <SideNav
            onClick={(recipeType: string) =>
              buttonSelection(fullRecipes, recipeType)
            }
          />
        </div>
        <div className="left-32 flex flex-col h-screen overflow-y-auto">
          <SummaryView currRecipe={currRecipe as Recipe} />
          {currRecipe.length === 0 && <Gallery recipeType={"View_all"} />}
        </div>
      </div>
    </div>
  )
}
