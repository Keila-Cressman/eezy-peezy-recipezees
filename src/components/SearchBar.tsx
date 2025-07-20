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
    <div className={cn(" flex relative justify-self-center pl-1",
      isMobile && "pl-1")}>
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
          "relative right-10",
          isMobile && "right-9"
        )}
      >
        <CloseIcon className={cn("relative h-10 w-10",
          isMobile && "h-8 w-8"
        )}  />
      </button>
    </div>
  )
}
