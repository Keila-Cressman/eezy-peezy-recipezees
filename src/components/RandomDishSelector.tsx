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
    <div className={cn("rounded bg-blue-100 flex-1")}>
      welcome!!!
      <div className="flex flex-col">
        <div className="bg-green-400 h-32 flex items-center justify-center">
          <div className="bg-blue-200 rounded-md h-24 w-full items-center flex justify-center">
            {newRecipe.name}
            {mainTypeRecipes.map((recipe) => (
            
              <RecipeCard
                        currRecipe={[{ image: recipe.image, name: recipe.name }]}
                        searchFor={searchRecipeName}
                        recipeExpanded={(open: boolean) => {
                          setHideSearchBar(open)
                          setSearchRecipeName("")
                        }}
                        closeRecipeCard={hideSearchBar}
                      />
            ))}
          </div>
        </div>

        <div className="bg-red-400 flex items-center justify-center h-32">
          <button type="button" onClick={() => getNewRecipe()}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}
