import { useEffect, useRef } from "react"
import { CloseIcon } from "../icons/CloseIcon"
import { recipes } from "../utils/recipes"

export type expandedRecipeCardProps = {
  recipeSelectedName: string
  onClose: () => void
}

export function ExpandRecipeCard({
  recipeSelectedName,
  onClose,
}: expandedRecipeCardProps) {
  const expandCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        expandCardRef.current &&
        !expandCardRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div ref={expandCardRef} className="w-full h-full bg-gray-50">
        <div className="flex justify-between pb-5">
          <p className=""> {recipeSelectedName.replaceAll("_", " ")}</p>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
          >
            <CloseIcon className="cursor-pointer h-10 pr-4 pt-4" />
          </button>
        </div>

        <div className="pb-10">
          {recipes.map((recipe) => {
            if (
              recipe &&
              recipe.name === recipeSelectedName &&
              recipe.ingredients
            ) {
              return (
                <ul key={recipe.name} className="text-left text-sm pl-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>

        <div>
          {recipes.map((recipe) => {
            if (recipe && recipe.name === recipeSelectedName && recipe.steps) {
              return (
                <ul key={recipe.name} className="text-left text-base pl-4">
                  {recipe.steps.map((step, index) => (
                    <li key={index}>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
