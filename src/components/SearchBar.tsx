import { Dispatch, SetStateAction } from "react"
import { cn } from "../utils/cn"
import { CloseIcon } from "../icons/CloseIcon"
import { useMobileSize } from "../hooks/useMobileSize"

export type SearchBarProps = {
  searchRecipeName: string
  setSearchRecipeName: Dispatch<SetStateAction<string>>
}

export function SearchBar({
  searchRecipeName,
  setSearchRecipeName,
}: SearchBarProps) {
  const isMobile = useMobileSize()
  return (
    <div className="flex">
      <input
        className={cn(
          "relative border-2 border-black rounded-md px-2 h-14 text-3xl",
          isMobile && "h-10 text-base pr-10"
        )}
        type="text"
        placeholder="Search recipe name..."
        value={searchRecipeName}
        onChange={(e) => setSearchRecipeName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setSearchRecipeName("")}
        className={cn(
          "relative right-[8.5rem] top-9",
          searchRecipeName && "right-5",
          isMobile && "right-9 top-0"
        )}
      >
        <CloseIcon className={cn("h-10 w-10",
          isMobile && "relative h-8 w-8"
        )}  />
      </button>
    </div>
  )
}
