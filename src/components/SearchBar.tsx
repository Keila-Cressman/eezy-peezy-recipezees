import { Dispatch, SetStateAction } from "react"

export type SearchBarProps = {
  searchRecipeName: string
  setSearchRecipeName: Dispatch<SetStateAction<string>>
}

export function SearchBar({
  searchRecipeName,
  setSearchRecipeName,
}: SearchBarProps) {
  return (
    <div className="flex justify-around ">
      <input
        className="border-2 border-black rounded-md px-2 h-14 text-3xl"
        type="search"
        placeholder="Search recipe name..."
        value={searchRecipeName}
        onChange={(e) => setSearchRecipeName(e.target.value)}
      />
    </div>
  )
}
