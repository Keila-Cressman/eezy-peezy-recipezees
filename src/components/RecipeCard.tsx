import { useState } from "react"
import { recipes } from "../utils/recipes"
import { ExpandRecipeCard } from "./ExpandRecipeCard"
import Gallery from "./Gallery"
import { useMobileSize } from "../hooks/useMobileSize"

export type Recipe = [
  {
    image: string
    name: string
  }
]

export type RecipeCardProps = {
  searchFor: string
  currRecipe: Recipe
}

export default function RecipeCard({ searchFor, currRecipe }: RecipeCardProps) {
  const midIndex = Math.ceil(currRecipe.length / 2)
  const firstHalf = currRecipe.slice(0, midIndex)
  const secondHalf = currRecipe.slice(midIndex)
  const isMobile = useMobileSize()
  const [openRecipeCard, setOpenRecipeCard] = useState(false)
  const [selectRecipe, setSelectRecipe] = useState("")
  const lowerCase = (str: string): string => {
    return str.toLowerCase()
  }
  return (
    <div className="flex gap-4 relative">
      {(searchFor !== "" || isMobile) && (
        <div className="flex flex-col gap-2">
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
                }}
                className=" bg-blue-100 rounded-xl w-[17rem] p-2"
              >
                <div className="flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden">
                  <span>{recipe.name}</span>
                </div>
              </button>
            ))}
        </div>
      )}

      {openRecipeCard && (
        <ExpandRecipeCard
          recipeSelectedName={selectRecipe}
          onClose={() => setOpenRecipeCard(false)}
        />
      )}

      {searchFor === "" && !isMobile && (
        <>
          <div className="flex flex-col gap-2">
            {firstHalf.map((recipe) => (
              <button
                type="button"
                onClick={() => {
                  setOpenRecipeCard(!openRecipeCard)
                  setSelectRecipe(recipe.name)
                }}
                className=" bg-blue-100 rounded-xl w-[17rem] p-2"
              >
                <Gallery
                  recipeType={recipe.name}
                  className="rounded-xl h-36 my-4"
                />
                <div className="flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden">
                  <span>{recipe.name.replaceAll("_", " ")}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {secondHalf.map((recipe) => (
              <button
                type="button"
                onClick={() => {
                  setOpenRecipeCard(!openRecipeCard)
                  setSelectRecipe(recipe.name)
                }}
                className=" bg-blue-100 rounded-xl w-[17rem] p-2"
              >
                <Gallery
                  recipeType={recipe.name}
                  className="rounded-xl h-36 my-4"
                />
                <div className="flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden">
                  <span>{recipe.name.replaceAll("_", " ")}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
