import Gallery from "../components/Gallery"
import Home from "../components/Home"

export default function PageContents() {
  let PageView
  switch (window.location.pathname) {
    // case ("/eezy-peezy-recipezees"):
    //   PageView = <Home />
    //   break
    case "/all-recipes":
      PageView = <Gallery recipeType="" />
      break
    case "/":
      PageView = <Home />
      break
      
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 text-4xl text-center ">
        {PageView}
        <Home />
      </div>
    </div>
  )
}
