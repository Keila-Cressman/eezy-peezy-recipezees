import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import PageContents from "./PageContents"
import PageTitle from "./PageTitle"

export default function GlobalView() {
  const isMobile = useMobileSize()
  return (
    <div className="h-screen flex flex-col rounded-3xl p-3 bg-gray-200 overflow-hidden drop-shadow-md m-2">
      <div className={cn("bg-blue-100 h-24 p-1 rounded-3xl drop-shadow-sm mb-2",
        isMobile && "h-12"
      )}>
        <div className="h-full w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1">
          <PageTitle />
        </div>
      </div>
      <div className="bg-blue-100 h-screen  p-1 rounded-3xl drop-shadow-sm">
        <div className="h-full w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1 overflow-hidden">
          <PageContents />
        </div>
      </div>
    </div>
  )
}
