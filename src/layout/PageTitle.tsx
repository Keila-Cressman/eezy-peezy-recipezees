import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"

export default function PageTitle() {
  const isMobile = useMobileSize()
  return (
    <div className="flex justify-center items-center">
      <div className={cn("text-4xl pt-3", isMobile && "text-3xl pt-0 -mt-1")}>
        Eezy Peezy Recipezees
      </div>
    </div>
  )
}
