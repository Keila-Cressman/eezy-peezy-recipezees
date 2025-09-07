import { use, useEffect, useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
// import { recipes } from "../utils/recipes"
import { ExpandRecipeCard } from "./ExpandRecipeCard"
import Gallery from "./Gallery"
import { useRecipes } from "../hooks/useRecipes"

export type Recipe = [
  {
    image: string
    name: string
  }
]

export type RecipeCardProps = {
  searchFor: string
  currRecipe: Recipe
  recipeExpanded: (hide: boolean) => void
  closeRecipeCard: boolean
}

export default function RecipeCard({
  searchFor,
  currRecipe,
  recipeExpanded,
  closeRecipeCard,
}: RecipeCardProps) {
  const isMobile = useMobileSize()
  const [openRecipeCard, setOpenRecipeCard] = useState(false)
  const [selectRecipe, setSelectRecipe] = useState("")
  const lowerCase = (str: string): string => {
    return str.toLowerCase()
  }
  const recipes = useRecipes()

  useEffect(() => {
    if (!closeRecipeCard) {
      setOpenRecipeCard(false)
    }
  }, [closeRecipeCard])


  return (
    <div
      className={cn(
        "flex flex-1 gap-4 overflow-y-auto",
        isMobile && "text-base font-semibold"
      )}
    >
      {searchFor !== "" && !openRecipeCard && (
        <div className="flex flex-1 flex-col gap-2">
          {recipes
            .filter((recipe) =>
              lowerCase(recipe.name).includes(lowerCase(searchFor))
            )
            .map((recipe) => (
              <button
                key={recipe.name}
                type="button"
                onClick={() => {
                  setOpenRecipeCard(!openRecipeCard)
                  setSelectRecipe(recipe.name)
                  recipeExpanded(true)
                }}
                className={cn("bg-blue-100 rounded-xl w-full p-2")}
              >
                <div
                  className={cn(
                    "flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden",
                    isMobile && "pb-0"
                  )}
                >
                  <span>{recipe.name}</span>
                </div>
              </button>
            ))}
        </div>
      )}

      {openRecipeCard && (
        <div className="w-full h-full">
          <ExpandRecipeCard
            recipeSelectedName={selectRecipe}
            onClose={() => {
              setOpenRecipeCard(false)
              recipeExpanded(false)
            }}
          />
        </div>
      )}

      {searchFor === "" && !openRecipeCard && (
        <div
          className={cn(
            "grid grid-cols-2 gap-2 w-full overflow-auto",
            isMobile && "flex flex-col"
          )}
        >
          {currRecipe.map((recipe) => (
            <button
              type="button"
              onClick={() => {
                setOpenRecipeCard(!openRecipeCard)
                setSelectRecipe(recipe.name)
                recipeExpanded(true)
              }}
              className=" bg-blue-100 rounded-xl w-full p-2"
            >
              <Gallery
                recipeType={recipe.name}
                className="rounded-xl h-36 my-4"
              />
              <div
                className={cn(
                  "flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden",
                  isMobile && "pb-0"
                )}
              >
                <span>{recipe.name.replaceAll("_", " ")}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
