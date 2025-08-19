import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { useMobileSize } from "../hooks/useMobileSize"
import { CloseIcon } from "../icons/CloseIcon"
import { cn } from "../utils/cn"

export type SearchBarProps = {
  searchRecipeName: string
  setSearchRecipeName: Dispatch<SetStateAction<string>>
  className?: string
}

export function SearchBar({
  searchRecipeName,
  setSearchRecipeName,
  className,
}: SearchBarProps) {
  const searchBarRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobileSize()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setSearchRecipeName("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setSearchRecipeName])

  return (
    <div
      ref={searchBarRef}
      className={cn(
        "relative flex justify-self-center",
        className,
        isMobile && "w-full"
      )}
    >
      <input
        className={cn(
          "border-2 border-black rounded-md px-2 h-14 text-3xl w-full",
          isMobile && "h-10 text-base"
        )}
        type="text"
        placeholder="Search recipe name..."
        value={searchRecipeName}
        onChange={(e) => setSearchRecipeName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setSearchRecipeName("")}
        className={cn("absolute right-0 h-full")}
      >
        <CloseIcon className={cn("h-10 w-10", isMobile && "h-8 w-8")} />
      </button>
    </div>
  )
}
