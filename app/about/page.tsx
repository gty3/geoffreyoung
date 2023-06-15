

import About from "./about";
import Images from "./images";
import Reviews from "./reviews";

export default function AboutPage() {
  return (
    <div className="w-full h-full ">
      <div className="z-40 flex max-w-6xl mx-auto my-10 space-x-20"><About /><Images /></div>
      <Reviews />
    </div>
  )
}

