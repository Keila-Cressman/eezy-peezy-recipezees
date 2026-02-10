import { useMobileSize } from "../hooks/useMobileSize"
import { ReturnIcon } from "../icons/ReturnIcon"
import { cn } from "../utils/cn"
import { recipes } from "../utils/recipes"
import { ServingSize } from "./ServingSize"

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
      <div
        className={cn(
          "w-full h-full bg-gray-50",
          !isMobile && "divide-y-2 divide-blue-200",
        )}
      >
        <div className={cn("flex items-center pb-5", isMobile && "pb-0 h-5")}>
          <p
            className={cn(
              "flex-auto text-6xl",
              isMobile && "invisible text-sm",
            )}
          >
            {recipeSelectedName}
          </p>
          <button
            type="button"
            onClick={() => {
              onClose()
            }}
            className={cn("flex items-center ml-auto", isMobile && "-ml-8")}
          >
            <ReturnIcon
              className={cn("cursor-pointer h-10", isMobile && "p-1 h-8")}
            />
          </button>
        </div>
        <div className={cn("flex text-left text-2xl", !isMobile && "hidden")}>
          {recipeSelectedName}
        </div>

        <div
          className={cn("flex flex-row gap-10 pt-5", isMobile && "block pt-0")}
        >
          <div className="flex flex-col gap-4">
            <ServingSize className={cn("h-24", isMobile && "pt-2")} />
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
                      className={cn(
                        "text-left text-sm pl-4",
                        isMobile && "p-1",
                      )}
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
                      isMobile && "p-1",
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
