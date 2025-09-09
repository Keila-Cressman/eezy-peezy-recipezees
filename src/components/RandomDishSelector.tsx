import { useState } from "react"
import { useRecipes } from "../hooks/useRecipes"
import { cn } from "../utils/cn"
import RecipeCard from "./RecipeCard"

export function RandomDishSelector() {
  const fullRecipeList = useRecipes()
  const [searchRecipeName, setSearchRecipeName] = useState("")

  const [hideSearchBar, setHideSearchBar] = useState(false)
  const mainTypeRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Main")
  )

  const [newRecipe, setNewRecipe] = useState(
    mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
  )

  function getNewRecipe() {
    const newRecipe =
      mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
    return setNewRecipe(newRecipe)
  }

  return (
    <div className={cn("rounded flex-1")}>
      Click for a new Main Dish:
      <div className="flex flex-col">
        <div className="h-32 flex items-center justify-center">
          <RecipeCard
            className="flex flex-col"
            currRecipe={[{ image: newRecipe.image, name: newRecipe.name }]}
            searchFor={searchRecipeName}
            recipeExpanded={(open: boolean) => {
              setHideSearchBar(open)
              setSearchRecipeName("")
            }}
            closeRecipeCard={hideSearchBar}
          />
        </div>

        <div className="flex items-center justify-center h-32">
          <button type="button" onClick={() => getNewRecipe()}>
            <div className="bg-blue-100 rounded-lg p-2">
              <div className="bg-blue-50 rounded-lg py-8 px-3">
              Refresh
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
