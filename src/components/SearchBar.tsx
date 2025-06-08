import { Dispatch, SetStateAction } from "react"

export type SearchBarProps = {
  recipeName: string
  setRecipeName: Dispatch<SetStateAction<string>>
}

export function SearchBar({ recipeName, setRecipeName }: SearchBarProps) {
  return (
    <div className="flex justify-around">
      <input
        className="border-2 border-black rounded-md px-2"
        type="search"
        placeholder="Search recipe name..."
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
    </div>
  )
}
