import Image from "next/image";
import World from "./development/world";

export default function Development () {
  return (
    <div>
    <div className="z-40 flex max-w-6xl mx-auto mt-20 space-x-20 backdrop-blur-none">
        <div className="max-w-md my-10 mt-20">
      <div className="mb-2 text-4xl font-bold">My web development</div>
      <div className="mt-4 text-lg">
        {`I pursued fullstack development learning about serverless architecture. Spending most of my time learning the ins and outs of AWS services.`}
      </div>
    </div>
    <World />
  </div>
  {/* <div className="z-40 flex max-w-6xl mx-auto space-x-20">
  <Image className="rounded-lg" src="/bookmarks1.png" alt="web development bookmarks" height={400} width={400} />
  <div className="max-w-lg my-10">Some collected bookmarks</div>
  </div> */}
  </div>

  )
}