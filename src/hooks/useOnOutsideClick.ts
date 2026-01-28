export function useOnOutsideClick(
  container: React.RefObject<HTMLDivElement | null>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>,
  setString: React.Dispatch<React.SetStateAction<string>>,
) {
  function handleClickOutside(event: MouseEvent) {
    if (
      container.current &&
      !container.current.contains(event.target as Node)
    ) {
      setBoolean(false);
      setString("");
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}
