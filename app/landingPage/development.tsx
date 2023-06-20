"use client"

import Image from "next/image"
import World from "./development/world"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Bookmarks from "/public/bookmarks1.png"
import { useMediaQuery } from "../components/useMediaQuery"

export default function Development() {
  const isMobile = useMediaQuery(`(max-width: 767.98px)`)
  return (
    <div className="backdrop-blur-none">
      <div className="justify-center max-w-6xl px-4 mx-auto mt-20 sm:space-x-20 sm:flex backdrop-blur-none">
        <div className="z-50 max-w-md my-10 mt-20">
          <div className="pb-2 text-3xl font-bold sm:text-4xl">
            My web development
          </div>
          <div className="mt-4 text-lg sm:text-xl">
            {`I started my journey learning about serverless architecture and infrastructure as code. I worked with yaml files and the Serverless Framework as well as AWS CDK.`}
          </div>
        </div>
        <World />
      </div>
      <div className="z-50 flex flex-col-reverse justify-center max-w-6xl px-4 mx-auto mb-20 -mt-10 sm:flex-row sm:space-x-20 sm:flex">
        <Zoom>
          {(!isMobile || isMobile === undefined) && (
            <img
              loading="lazy"
              height="1390px"
              width="1951px"
              src="/bookmarks1.png"
              alt="Web development bookmarks - high quality"
            />
          )}
          {(isMobile || isMobile === undefined) && (
            <img
              loading="lazy"
              height="347.5px"
              width="487.75px"
              src="/bookmarks1.png"
              alt="Web development bookmarks - low quality"
            />
          )}
          {/* <Image
            className="rounded-lg sm:max-w-lg"
            src="/bookmarks1.png"
            alt="web development bookmarks"
            // loading="lazy"
            height={1390}
            width={1951}
          ></Image> */}
        </Zoom>
        <div className="order-1 max-w-md my-10 text-lg sm:text-xl">
          {
            "I've consumed a plethora of resources, collecting bookmarks along the way. I spend most of my time now with Next.js, TypeScript, and Node.js."
          }
        </div>
      </div>
    </div>
  )
}
