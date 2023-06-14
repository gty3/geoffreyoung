
import About from "./about";
import Reviews from "./reviews";

export default function AboutPage() {
  return (
    <div className="w-screen h-screen ">
      <div className="z-40 mx-auto w-96 "><About /></div>
      <Reviews />
    </div>
  )
}