import { useState } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { LeftArrowIcon } from "../icons/LeftArrowIcon"
import { RightArrowIcon } from "../icons/RightArrowIcon"
import { cn } from "../utils/cn"

export type servingSizeProps = {
  className?: string
}

export function ServingSize({ className }: servingSizeProps) {
  const [changeServing, setChangeServing] = useState(1)
  const isMobile = useMobileSize()
  return (
    <div className={cn("flex text-base font-medium", className)}>
      <div className="flex flex-col">
        <div className="">Servings</div>
        <div className={cn("flex bg-blue-600 rounded-md h-8")}>
          <button
            className={cn(
              "bg-white m-1 rounded-md w-6 flex justify-center items-center",
              isMobile && "w-7 m-1",
            )}
            type="button"
            onClick={() => setChangeServing(changeServing - 1)}
            disabled={changeServing <= 1}
          >
            <LeftArrowIcon
              className={cn("h-10 text-blue-400", isMobile && "h-7")}
            />
          </button>

          <div
            className={cn(
              "bg-white m-1 rounded-md flex items-center text-md w-10 justify-center",
              isMobile && "m-1 text-xl",
            )}
          >
            {changeServing}
          </div>

          <button
            className={cn(
              "bg-white m-1 rounded-md w-6 flex justify-center items-center",
              isMobile && "w-7 m-1",
            )}
            type="button"
            onClick={() => setChangeServing(changeServing + 1)}
          >
            <RightArrowIcon
              className={cn("h-10 text-blue-400", isMobile && "h-7")}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
