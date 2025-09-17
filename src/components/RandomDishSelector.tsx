import { useState } from "react"
import { useRecipes } from "../hooks/useRecipes"
import { cn } from "../utils/cn"
import RecipeCard from "./RecipeCard"

export function RandomDishSelector() {
  const fullRecipeList = useRecipes()
  const [hidePageText, setHidePageText] = useState(false)
  const [hideMain, setHideMain] = useState(false)
  const [hideDessert, setHideDessert] = useState(false)

  const mainTypeRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Main")
  )
  const dessertTypeRecipes = fullRecipeList.filter((recipe) =>
    recipe.type.includes("Dessert")
  )

  const [mainRecipeToLoop, setMainRecipeToLoop] = useState(mainTypeRecipes)
  const [dessertRecipeToLoop, setDessertRecipeToLoop] =
    useState(dessertTypeRecipes)

  const [newMainRecipe, setNewMainRecipe] = useState(
    mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
  )
  const [newDessertRecipe, setNewDessertRecipe] = useState(
    dessertTypeRecipes[Math.floor(Math.random() * dessertTypeRecipes.length)]
  )

  function getNewMainRecipe() {
    const newRecipe =
      mainTypeRecipes[Math.floor(Math.random() * mainTypeRecipes.length)]
    return setNewMainRecipe(newRecipe)
  }
  function getNewDessertRecipe() {
    const newRecipe =
      dessertTypeRecipes[Math.floor(Math.random() * dessertTypeRecipes.length)]
    return setNewDessertRecipe(newRecipe)
  }

  function removeMainRecipe(recipeToRemove: string) {
    const removedRecipe = mainRecipeToLoop.filter(
      (recipe) => recipe.name !== recipeToRemove
    )
    setMainRecipeToLoop(removedRecipe)
    return setNewMainRecipe(
      removedRecipe[Math.floor(Math.random() * removedRecipe.length)]
    )
  }
  function removeDessertRecipe(recipeToRemove: string) {
    const removedRecipe = dessertRecipeToLoop.filter(
      (recipe) => recipe.name !== recipeToRemove
    )
    setDessertRecipeToLoop(removedRecipe)
    return setNewDessertRecipe(
      removedRecipe[Math.floor(Math.random() * removedRecipe.length)]
    )
  }

  return (
    <div className={cn("grid-cols-1 w-full overflow-y-auto")}>
      <div
        className={cn(
          "grid grid-rows-2 divide-y-2 divide-blue-300",
          hidePageText && "flex"
        )}
      >
        <div
          className={cn("flex flex-col justify-around", hideMain && "hidden")}
        >
          <div className={cn("text-2xl h-20", hidePageText && "hidden")}>
            Click for a Main Dish:
          </div>

          <div className="h-full flex justify-center">
            <div className="flex items-center justify-center">
              <RecipeCard
                currRecipe={[
                  { image: newMainRecipe.image, name: newMainRecipe.name },
                ]}
                searchFor="Random Dish Selector"
                recipeExpanded={(open: boolean) => {
                  setHidePageText(open)
                  setHideDessert(open)
                }}
              />
            </div>
          </div>

          <div className="h-full">
            <div
              className={cn("flex justify-center", hidePageText && "hidden")}
            >
              <button
                type="button"
                onClick={() => {
                  if (newMainRecipe && mainRecipeToLoop.length > 1) {
                    getNewMainRecipe()
                    removeMainRecipe(newMainRecipe.name)
                  } else {
                    getNewMainRecipe()
                    setMainRecipeToLoop(mainTypeRecipes)
                  }
                }}
              >
                <div className="bg-blue-100 rounded-lg p-2">
                  <div className="bg-blue-50 rounded-lg py-8 px-3">
                    {mainRecipeToLoop.length > 1
                      ? "Next Main Dish"
                      : "Restart Main Dish"}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col justify-around",
            hideDessert && "hidden"
          )}
        >
          <div className={cn("text-2xl", hidePageText && "hidden")}>
            Click for a Dessert:
          </div>

          <div className="h-full flex justify-center">
            <div className="flex items-center justify-center">
              <RecipeCard
                currRecipe={[
                  {
                    image: newDessertRecipe.image,
                    name: newDessertRecipe.name,
                  },
                ]}
                searchFor="Random Dish Selector"
                recipeExpanded={(open: boolean) => {
                  setHidePageText(open)
                  setHideMain(open)
                }}
              />
            </div>
          </div>

          <div className="h-full">
            <div
              className={cn("flex justify-center", hidePageText && "hidden")}
            >
              <button
                type="button"
                onClick={() => {
                  if (newDessertRecipe && dessertRecipeToLoop.length > 1) {
                    getNewDessertRecipe()
                    removeDessertRecipe(newDessertRecipe.name)
                  } else {
                    getNewDessertRecipe()
                    setDessertRecipeToLoop(dessertTypeRecipes)
                  }
                }}
              >
                <div className="bg-blue-100 rounded-lg p-2">
                  <div className="bg-blue-50 rounded-lg py-8 px-3">
                    {dessertRecipeToLoop.length > 1
                      ? "Next Dessert"
                      : "Restart Dessert"}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
