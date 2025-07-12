import { useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"
import { ExpandRecipeCard } from "./ExpandRecipeCard"
import Gallery from "./Gallery"

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
  if (isMobile) {
    return (
      <div className="flex gap-4 relative text-base font-semibold">
        {openRecipeCard && (
          <ExpandRecipeCard
            recipeSelectedName={selectRecipe}
            onClose={() => setOpenRecipeCard(false)}
          />
        )}

        {searchFor !== "" && !openRecipeCard && (
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
                  className={cn("bg-blue-100 rounded-xl w-full p-2")}
                >
                  <div className="flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden">
                    <span>{recipe.name}</span>
                  </div>
                </button>
              ))}
          </div>
        )}

        {searchFor === "" && !openRecipeCard && (
          <>
            <div className="flex flex-col gap-2">
              {currRecipe.map((recipe) => (
                <button
                  type="button"
                  onClick={() => {
                    setOpenRecipeCard(!openRecipeCard)
                    setSelectRecipe(recipe.name)
                  }}
                  className=" bg-blue-100 rounded-xl w-full p-2"
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
  return (
    <div className="flex gap-4 relative">
      {searchFor !== "" && (
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
                className={cn("bg-blue-100 rounded-xl w-[17rem] p-2")}
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

      {searchFor === "" && (
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
