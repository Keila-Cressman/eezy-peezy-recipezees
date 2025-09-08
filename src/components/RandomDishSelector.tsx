import { useState } from "react"
import { cn } from "../utils/cn"
import { useRecipes } from "../hooks/useRecipes"

export function RandomDishSelector() {
  const fullRecipeList = useRecipes()
  const mainTypeRecipes = fullRecipeList
    .filter((recipe) => recipe.type)
    .filter((r) => r.type.includes("Main"))

  const [newRecipe, setNewRecipe] = useState(
    mainTypeRecipes[mainTypeRecipes.length - 1]
  )

  function getNewRecipe() {
    const newRecipe =
      mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
    return setNewRecipe(newRecipe)
  }
  return (
    <div className={cn("rounded bg-blue-100 flex-1")}>
      welcome!!!
      <div className="flex flex-col">
        <div className="bg-green-400">{newRecipe.name}</div>

        <div className="bg-red-400">
          <button type="button" onClick={() => getNewRecipe()}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}
