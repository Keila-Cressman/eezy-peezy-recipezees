import { useEffect, useRef } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { ReturnIcon } from "../icons/ReturnIcon"
import { cn } from "../utils/cn"
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
  const isMobile = useMobileSize()

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
    <div className="w-full">
      <div ref={expandCardRef} className="w-full h-full bg-gray-50">
        <div
          className={cn(
            "flex justify-between items-center pb-5",
            isMobile && "pb-0"
          )}
        >
          <p className={cn(isMobile && "invisible")}> {recipeSelectedName}</p>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
            className="flex items-center"
          >
            <span className={cn("text-xs", isMobile && "hidden")}>
              Return To List
            </span>
            <ReturnIcon
              className={cn("cursor-pointer h-7", isMobile && "p-1 pr-3 h-8")}
            />
          </button>
        </div>
        <div className={cn("flex text-left text-2xl", !isMobile && "hidden")}>
          {recipeSelectedName}
        </div>

        <div className={cn("pb-10", isMobile && "pb-4")}>
          {recipes.map((recipe) => {
            if (
              recipe &&
              recipe.name === recipeSelectedName &&
              recipe.ingredients
            ) {
              return (
                <ul
                  key={recipe.name}
                  className={cn("text-left text-sm pl-4", isMobile && "p-1")}
                >
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
                <ul
                  key={recipe.name}
                  className={cn("text-left text-base pl-4", isMobile && "p-1")}
                >
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
