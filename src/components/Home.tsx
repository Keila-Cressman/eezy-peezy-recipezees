import { useState } from "react"
import { recipes } from "./recipes"
import Gallery from "./Gallery"

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
        <div className="flex flex-row gap-4">
          <div className="flex flex-col divde divide-y-2 gap-2 divide-blue-200">
            <div className="rounded bg-blue-100 ">
              <button
                type="button"
                onClick={() => buttonSelection(fullRecipes, "View_all")}
              >
                View All
              </button>
            </div>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Breakfast")}
            >
              Breakfast
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Side")}
            >
              Side
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Main")}
            >
              Main
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Drink")}
            >
              Drink
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Dessert")}
            >
              Dessert
            </button>
            <button
              type="button"
              onClick={() =>
                buttonSelection(fullRecipes, "Holiday_Thanksgiving")
              }
            >
              Thanksgiving
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Holiday_Christmas")}
            >
              Christmas
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Pre-requisite")}
            >
              Pre-requisite
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Bakery")}
            >
              Bakery
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Jelly")}
            >
              Jelly
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Sauce")}
            >
              Sauce
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Misc")}
            >
              Misc
            </button>
            <button
              type="button"
              onClick={() => buttonSelection(fullRecipes, "Tips_and_tricks")}
            >
              Tipe & Tricks
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {currRecipe.map((recipe) => (
              <Gallery recipeType={recipe.name} className="h-80" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
