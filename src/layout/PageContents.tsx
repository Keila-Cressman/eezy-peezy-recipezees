import About from "../pages/About"
import Gallery from "../pages/Gallery"
import Home from "../pages/Home"

export default function PageContents() {
  let PageView
  switch (window.location.pathname) {
    case "/":
      PageView = <Home />
      break
    case "/about":
      PageView = <About />
      break
    case "/gallery":
      PageView = <Gallery />
      break
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 text-4xl text-center ">
        <Gallery />
      </div>
    </div>
  )
}
