import { useState } from "react"
import { recipes } from "../utils/recipes"

export type SideNavProps ={
  fullRecipes:any[]
  currRecipe:{ image: string; name: string }[]
}

export function SideNav({fullRecipes,currRecipe}:SideNavProps) {
  const [currRec, setCurrRecipe] = useState(currRecipe)
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
    <div className="flex flex-col text-base gap-2">
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "View_all")}
      >
        View All
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Breakfast")}
      >
        Breakfast
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Side")}
      >
        Side
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Main")}
      >
        Main
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Drink")}
      >
        Drink
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Dessert")}
      >
        Dessert
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Holiday_Thanksgiving")}
      >
        Thanksgiving
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Holiday_Christmas")}
      >
        Christmas
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Pre-requisite")}
      >
        Pre-requisite
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Bakery")}
      >
        Bakery
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Jam")}
      >
        Jam
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Sauce")}
      >
        Sauce
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Misc")}
      >
        Misc
      </button>
      <button
        type="button"
        className="rounded bg-blue-100"
        onClick={() => buttonSelection(fullRecipes, "Tips_and_tricks")}
      >
        Tips & Tricks
      </button>
    </div>
  )
}
