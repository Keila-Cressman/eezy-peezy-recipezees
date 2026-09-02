import { ReturnIcon } from "../icons/ReturnIcon"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"

export type expandedRecipeCardMobileProps = {
  recipeSelectedName: string
  onClose: () => void
  expandForMobile?: (open: boolean) => void
  className?: string
}

export function ExpandRecipeCardMobile({
  recipeSelectedName,
  onClose,
  expandForMobile,
  className,
}: expandedRecipeCardMobileProps) {
  expandForMobile && expandForMobile(true)

  return (
      <div className={cn("w-full h-full bg-gray-50")}>
        <div className={cn("flex justify-between items-center pb-5")}>
          <div className={cn("text-2xl")}>{recipeSelectedName}</div>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
          >
            <ReturnIcon className={cn("p-1 h-8")} />
          </button>
        </div>

        <div className="border-blue-200 border flex" />

        <div className={cn("flex-row gap-10 block pt-5")}>
          <div className={cn("pb-4")}>
            {recipes.map((recipe) => {
              if (
                recipe &&
                recipe.name === recipeSelectedName &&
                recipe.ingredients
              ) {
                return (
                  <ul
                    key={recipe.name}
                    className={cn("text-left text-sm pl-4 p-1")}
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
                    className={cn("text-left text-base pl-4 p-1")}
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
