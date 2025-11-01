import { useMobileSize } from "../hooks/useMobileSize"
import { cn } from "../utils/cn"
import PageContents from "./PageContents"
import PageTitle from "./PageTitle"
import pkg from "../../package.json"

export default function GlobalView() {
  const isMobile = useMobileSize()
  return (
    <div className="h-screen min-w-[390px] flex flex-col rounded-3xl px-3 pt-3 bg-gray-200 overflow-hidden drop-shadow-md m-2">
      <div
        className={cn(
          "bg-blue-100 h-24 p-1 rounded-3xl drop-shadow-sm mb-2",
          isMobile && "h-12"
        )}
      >
        <div className="h-full w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1 flex justify-around">
          <PageTitle />
        </div>
      </div>
      <div className="flex flex-1 min-h-0 bg-blue-100 p-1 rounded-3xl drop-shadow-sm ">
        <div className="flex w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1 overflow-hidden">
          <PageContents />
        </div>
      </div>
      <div className="flex justify-center text-xs py-1">V. {pkg.version}</div>
    </div>
  )
}
