import { Dispatch, SetStateAction } from "react"
import { cn } from "../utils/cn"
import { CloseIcon } from "../icons/CloseIcon"

export type SearchBarProps = {
  searchRecipeName: string
  setSearchRecipeName: Dispatch<SetStateAction<string>>
}

export function SearchBar({
  searchRecipeName,
  setSearchRecipeName,
}: SearchBarProps) {
  return (
    <div className="flex justify-around">
      <input
        className="relative border-2 border-black rounded-md px-2 h-14 text-3xl"
        type="text"
        placeholder="Search recipe name..."
        value={searchRecipeName}
        onChange={(e) => setSearchRecipeName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setSearchRecipeName("")}
        className={cn(
          "absolute right-[8.5rem] top-9",
          searchRecipeName && "right-5"
        )}
      >
        <CloseIcon className=" h-10 w-10" />
      </button>
    </div>
  )
}
