import Gallery from "../components/Gallery"
import Home from "../components/Home"

export default function PageContents() {
  let PageView
  switch (window.location.pathname) {
    case "/all-recipes":
      console.log("in::",window.location.pathname)
      PageView = <Gallery recipeType="" />
      break
    case "/":
      PageView = <Home />
      break
    default:
      <Home />
      break
      
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 text-4xl text-center ">
        {/* {PageView} */}
        <Home/>
      </div>
    </div>
  )
}
