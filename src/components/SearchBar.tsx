import { Dispatch, SetStateAction } from "react";
import { useMobileSize } from "../hooks/useMobileSize";
import { CloseIcon } from "../icons/CloseIcon";
import { cn } from "../utils/cn";

export type SearchBarProps = {
  searchRecipeName: string;
  setSearchRecipeName: Dispatch<SetStateAction<string>>;
  className?: string;
};

export function SearchBar({
  searchRecipeName,
  setSearchRecipeName,
  className,
}: SearchBarProps) {
  const isMobile = useMobileSize();

  return (
    <div
      className={cn(
        "relative flex justify-self-center",
        className,
        isMobile && "w-full",
      )}
    >
      <input
        className={cn(
          "border-2 border-black rounded-md px-2 h-14 text-3xl w-full",
          isMobile && "h-10 text-base",
        )}
        type="text"
        placeholder="Search ALL recipes..."
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
  );
}
