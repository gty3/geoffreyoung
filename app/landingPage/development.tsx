import Image from "next/image"
import World from "./development/world"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Bookmarks from "/public/bookmarks1.png"

export default function Development() {
  return (
    <div className="backdrop-blur-none">
      <div className="justify-center max-w-6xl px-4 mx-auto mt-20 sm:space-x-20 sm:flex backdrop-blur-none">
        <div className="z-50 max-w-md my-10 mt-20">
          <div className="pb-2 text-3xl font-bold sm:text-4xl">My web development</div>
          <div className="mt-4 text-lg">
            {`I started my journey learning about serverless architecture and infrastructure as code. I worked with yaml files and the Serverless Framework as well as AWS CDK.`}
          </div>
        </div>
        <World />
      </div>
      <div className="z-50 justify-center max-w-6xl px-4 pt-20 mx-auto mb-20 -mt-10 sm:pt-0 sm:space-x-20 sm:flex">
        <Zoom>
          <Image
            className="rounded-lg w-96 sm:max-w-md"
            src={Bookmarks}
            alt="web development bookmarks"
            // height={400}
            // width={400}
          ></Image>
        </Zoom>
        <div className="max-w-md my-10 text-lg">
          {"I've consumed a plethora of resources, bookmarking everything I've found useful. The more I've learned, the more I've narrowed my focus, spending most of my time now with Next.js, TypeScript, and Node.js."}
        </div>
      </div>
    </div>
  )
}
