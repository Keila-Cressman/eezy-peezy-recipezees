import { useMobileSize } from "../hooks/useMobileSize"
import { ReturnIcon } from "../icons/ReturnIcon"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"

export type expandedRecipeCardProps = {
  recipeSelectedName: string
  onClose: () => void
  className?: string
}

export function ExpandRecipeCard({
  recipeSelectedName,
  onClose,
  className,
}: expandedRecipeCardProps) {
  const isMobile = useMobileSize()

  return (
    <div className="w-full">
      <div className="w-full h-full bg-gray-50">
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
            <ReturnIcon
              className={cn("cursor-pointer h-10", isMobile && "p-1 pr-3 h-8")}
            />
          </button>
        </div>
        <div className={cn("flex text-left text-2xl", !isMobile && "hidden")}>
          {recipeSelectedName}
        </div>

        <div className={cn("flex flex-row gap-10", isMobile && "block")}>
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
              if (
                recipe &&
                recipe.name === recipeSelectedName &&
                recipe.steps
              ) {
                return (
                  <ul
                    key={recipe.name}
                    className={cn(
                      "text-left text-base pl-4",
                      isMobile && "p-1"
                    )}
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
    </div>
  )
}
