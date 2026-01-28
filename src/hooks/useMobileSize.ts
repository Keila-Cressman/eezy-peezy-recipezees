import { useEffect, useState } from "react";

export function useMobileSize(breakpoint: number = 450): boolean {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= breakpoint,
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
