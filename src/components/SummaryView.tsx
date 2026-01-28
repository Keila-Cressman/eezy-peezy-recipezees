import { useEffect, useRef, useState } from "react";
import { useMobileSize } from "../hooks/useMobileSize";
import { useOnOutsideClick } from "../hooks/useOnOutsideClick";
import { cn } from "../utils/cn";
import RecipeCard, { Recipe } from "./RecipeCard";
import { SearchBar } from "./SearchBar";

export type SummaryViewProps = {
  currRecipe: Recipe;
};

export default function SummaryView({ currRecipe }: SummaryViewProps) {
  const [searchRecipeName, setSearchRecipeName] = useState("");
  const isMobile = useMobileSize();
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const SummaryRef = useRef<HTMLDivElement>(null);
  const outsideClick = useOnOutsideClick(
    SummaryRef,
    setHideSearchBar,
    setSearchRecipeName,
  );

  useEffect(() => {
    outsideClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setHideSearchBar, setSearchRecipeName]);

  return (
    <div
      ref={SummaryRef}
      className={cn(
        "flex flex-col gap-4 h-full w-full",
        isMobile && "pl-0 gap-2",
      )}
    >
      <div>
        <SearchBar
          searchRecipeName={searchRecipeName}
          setSearchRecipeName={setSearchRecipeName}
          className={hideSearchBar ? "hidden" : undefined}
        />
      </div>
      <div className="overflow-y-auto ">
        <RecipeCard
          className={{ recipeCard: "flex flex-1 gap-4 overflow-y-auto" }}
          currRecipe={currRecipe as Recipe}
          searchFor={searchRecipeName}
          recipeExpanded={(open: boolean) => {
            setHideSearchBar(open);
            setSearchRecipeName("");
          }}
          closeRecipeCard={hideSearchBar}
        />
      </div>
    </div>
  );
}
