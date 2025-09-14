import { useState } from "react"
import { useRecipes } from "../hooks/useRecipes"
import { cn } from "../utils/cn"
import RecipeCard from "./RecipeCard"

export function RandomDishSelector() {
  const fullRecipeList = useRecipes()

  const mainTypeRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Main")
  )

  const [recipeToLoop, setRecipeToLoop] = useState(mainTypeRecipes)

  const [newRecipe, setNewRecipe] = useState(
    mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
  )

  function getNewRecipe() {
    const newRecipe =
      mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
    return setNewRecipe(newRecipe)
  }

  function removeRecipe(recipeToRemove: string) {
    const removedRecipe = recipeToLoop.filter(
      (recipe) => recipe.name !== recipeToRemove
    )
    setRecipeToLoop(removedRecipe)
    return setNewRecipe(
      removedRecipe[Math.floor(Math.random() * removedRecipe.length)]
    )
  }
// To Do:
// hide Title and refresh button when recipe card is expanded
// center recipe card
  return (
    <div className={cn("flex flex-col gap-4 h-full w-full bg-blue-500")}>
      <div>Click for a Main Dish:</div>
      <div className="flex flex-col gap-8 overflow-y-auto bg-purple-500">
        <div className="flex items-center justify-center">
          <RecipeCard
            // className={{ recipeCard: "" }}
            currRecipe={[{ image: newRecipe.image, name: newRecipe.name }]}
            searchFor="Random Dish Selector"
          />
        </div>

        <div className="flex items-center justify-center h-32">
          <button
            type="button"
            onClick={() => {
              if (newRecipe && recipeToLoop.length > 1) {
                getNewRecipe()
                removeRecipe(newRecipe.name)
              } else {
                getNewRecipe()
                setRecipeToLoop(mainTypeRecipes)
              }
            }}
          >
            <div className="bg-blue-100 rounded-lg p-2">
              <div className="bg-blue-50 rounded-lg py-8 px-3">
                {recipeToLoop.length > 1
                  ? "Next Main Dish"
                  : "Restart Main Dish"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
