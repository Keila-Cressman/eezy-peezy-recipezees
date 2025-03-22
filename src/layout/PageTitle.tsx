export default function PageTitle() {
  return (
    <div className="flex flex-col px-5">
      <div className="text-4xl text-center pb-1">Eezy Peezy Recipezees</div>
      <div className="h-[1px] bg-gray-500 bg-opacity-20" />
      <div className="grid grid-cols-2 divide-x-2 text-center py-1">
          <a href="/" className="px-2 py-1 bg-blue-100 rounded-2xl">Search Recipe</a>
          <a href="/about" className="px-2 py-1 bg-blue-100 rounded-2xl">All Recipes</a>
        
      </div>
    </div>
  )
}
