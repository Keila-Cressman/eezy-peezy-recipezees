import PageContents from "./PageContents"
import PageTitle from "./PageTitle"

export default function GlobalView() {
  return (
    <div className="absolute inset-0 rounded-3xl p-3 bg-gray-200 overflow-hidden drop-shadow-md m-2">
      <div className="bg-blue-100 h-24 p-1 rounded-3xl mb-2 drop-shadow-sm flex flex-col">
        <div className="h-full w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1">
          <PageTitle />
        </div>
      </div>

      <div className="absolute top-[110px] inset-0 rounded-3xl p-1 bg-blue-100 overflow-hidden drop-shadow-md m-3">
        <div className="h-full w-full rounded-3xl drop-shadow-sm bg-gray-50 p-1 overflow-y-auto max-h-[calc(100vh-150px)]">
          <PageContents/>
        </div>
      </div>
    </div>
  )
}
