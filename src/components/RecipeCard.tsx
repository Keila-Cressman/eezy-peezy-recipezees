import { useEffect, useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import { ExpandRecipeCard } from "./ExpandRecipeCard"
import Gallery from "./Gallery"

export type Recipe = {
  image: string
  name: string
}[]

export type RecipeCardProps = {
  searchFor?: string
  currRecipe: Recipe
  recipeExpanded?: (hide: boolean) => void
  closeRecipeCard?: boolean
  className?: { recipeCard?: string; expandedCard?: string }
}

export default function RecipeCard({
  searchFor,
  currRecipe,
  recipeExpanded,
  closeRecipeCard,
  className,
}: RecipeCardProps) {
  const isMobile = useMobileSize()
  const [openRecipeCard, setOpenRecipeCard] = useState(false)
  const [selectRecipe, setSelectRecipe] = useState("")
  const lowerCase = (str: string): string => {
    return str.toLowerCase()
  }

  useEffect(() => {
    if (!closeRecipeCard) {
      setOpenRecipeCard(false)
    }
  }, [closeRecipeCard])

  function searchBarInput(): Recipe {
    if (searchFor && searchFor !== "") {
      return currRecipe.filter((recipe) =>
        lowerCase(recipe.name).includes(lowerCase(searchFor))
      )
    }
    return currRecipe
  }
  
  return (
    <div
      className={cn(
        className?.recipeCard,
        isMobile && "text-base font-semibold",
        searchFor === "Random Dish Selector" &&
          isMobile &&
          "text-2xl font-semibold"
      )}
    >
      {!openRecipeCard && searchFor !== "Random Dish Selector" && (
        <div
          className={cn(
            "grid grid-cols-2 gap-2 w-full overflow-auto",
            isMobile && "flex flex-1 flex-col gap-2"
          )}
        >
          {searchBarInput().map((recipe) => (
            <button
              key={recipe.name}
              type="button"
              onClick={() => {
                setOpenRecipeCard(!openRecipeCard)
                setSelectRecipe(recipe.name)
                if (recipeExpanded) {
                  recipeExpanded(true)
                }
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
              if (recipeExpanded) {
                recipeExpanded(false)
              }
            }}
            className={className?.expandedCard}
          />
        </div>
      )}

      {searchFor === "Random Dish Selector" && !openRecipeCard && (
        <div className={cn(isMobile && "flex flex-col")}>
          {currRecipe.map((recipe) => (
            <button
              type="button"
              onClick={() => {
                setOpenRecipeCard(!openRecipeCard)
                setSelectRecipe(recipe.name)
                if (recipeExpanded) {
                  recipeExpanded(true)
                }
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
