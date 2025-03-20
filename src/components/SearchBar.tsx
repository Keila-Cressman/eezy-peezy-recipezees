"use client"

import { SetStateAction, useState } from "react"
import { recipes } from "./recipes"

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("")
  const pics = recipes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  if (searchInput.length > 0) {
    pics.filter((recipe) => {
      return recipe.name.match(searchInput)
    })
  }

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg p-2 w-1/2"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  )
}
