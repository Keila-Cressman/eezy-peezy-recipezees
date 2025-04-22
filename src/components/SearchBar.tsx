import { cn } from "../utils/cn"

export type SearchBarProps = {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={cn(className, "px-10")}>
      <div className="relative flex items-center">
        <input
          className="text-left w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-5 py-2 "
          placeholder="Enter recipe name..."
        />

        <button
          className="rounded-md bg-blue-800 py-2 px-4 text-center text-sm text-white hover:bg-blue-300  ml-2"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  )
}
