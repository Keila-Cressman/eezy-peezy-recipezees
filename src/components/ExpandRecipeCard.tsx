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
  return (
    <div className="w-full">
      <div
        className={cn("w-full h-full bg-gray-50 divide-y-2 divide-blue-200")}
      >
        <div className={cn("flex items-center pb-5")}>
          <p className={cn("flex-auto text-6xl")}>{recipeSelectedName}</p>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
            className={cn("flex items-center ml-auto")}
          >
            <ReturnIcon className={cn("cursor-pointer h-10")} />
          </button>
        </div>

        <div className={cn("flex flex-row gap-10 pt-5")}>
          <div className={cn("pb-10")}>
            {recipes.map((recipe) => {
              if (
                recipe &&
                recipe.name === recipeSelectedName &&
                recipe.ingredients
              ) {
                return (
                  <ul
                    key={recipe.name}
                    className={cn("text-left text-sm pl-4")}
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
                    className={cn("text-left text-base pl-4")}
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
