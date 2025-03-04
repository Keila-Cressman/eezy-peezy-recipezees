export default function PageTitle() {
  return (
    <div className="flex flex-col px-5">
      <div className="text-4xl text-center pb-1">Eezy Peezy Recipezees</div>
      <div className="h-[1px] bg-gray-500 bg-opacity-20" />
      <div className="grid grid-cols-3 divide-x-2 text-center py-1">
        <button type="button" className="px-2 py-1">
          <div className=" bg-blue-100 rounded-2xl">Home</div>
        </button>
        <button type="button" className="px-2 py-1">
          <div className=" bg-blue-100 rounded-2xl">Recipe Look Up</div>
        </button>
        <button type="button" className="px-2 py-1">
          <div className=" bg-blue-100 rounded-2xl">About</div>
        </button>
      </div>
    </div>
  )
}
