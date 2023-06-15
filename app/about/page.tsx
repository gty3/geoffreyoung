import Background from "../components/background"
import World from "../components/world"
import About from "./about"
import Development from "./development"
import Images from "./images"
import Reviews from "./reviews"

export default function AboutPage() {
  return (
    <>
    <Background />
    <div className="w-full h-full py-32 backdrop-blur-none">
      <div className="z-40 flex max-w-6xl mx-auto mb-20 space-x-20">
        <About />
        <Images />
      </div>
      <Reviews />
      <div className="z-40 flex max-w-6xl mx-auto mt-20 space-x-20">
        <Development />
        <World />
      </div>
    </div>
    </>
  )
}
