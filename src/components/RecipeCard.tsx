import { useState } from "react"
import { ExpandRecipeCard } from "./ExpandRecipeCard"
import Gallery from "./Gallery"

export type Recipe = [
  {
    image: string
    name: string
  }
]

export type RecipeCardProps = {
  currRecipe: Recipe
}

export default function RecipeCard({ currRecipe }: RecipeCardProps) {
  const midIndex = Math.ceil(currRecipe.length / 2)
  const firstHalf = currRecipe.slice(0, midIndex)
  const secondHalf = currRecipe.slice(midIndex)

  const [openRecipeCard, setOpenRecipeCard] = useState(false)

  return (
    <div className="flex gap-4 relative">
      {openRecipeCard && <ExpandRecipeCard recipeSelectedName="chocolate_cookies"/>}
      <div className="flex flex-col gap-2">
        {firstHalf.map((recipe) => (
          <button
            type="button"
            onClick={() => setOpenRecipeCard(!openRecipeCard)}
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
          <div className=" bg-blue-100 rounded-xl w-[17rem] p-2">
            <Gallery
              recipeType={recipe.name}
              className="rounded-xl h-36 my-4"
            />
            <div className="flex pb-2 justify-center bg-blue-50 rounded-lg overflow-hidden">
              <span>{recipe.name.replaceAll("_", " ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
