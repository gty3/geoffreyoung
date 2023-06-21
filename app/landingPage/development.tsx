"use client"

import Image from "next/image"
import World from "./development/world"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Bookmarks from "/public/bookmarks1.png"
import { useMediaQuery } from "../components/useMediaQuery"
import { useEffect, useState } from "react"

export default function Development() {
  const [isMobile, setIsMobile] = useState<boolean>()

  const listenToScroll = () => {
    let heightToHideFrom = 480
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll < heightToHideFrom) {
      return
    }
    // to limit setting state only the first time
    if (typeof isMobile === "undefined" && typeof window !== "undefined") {
      window.matchMedia(`(max-width: 767.98px)`).matches
        ? setIsMobile(true)
        : setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  return (
    <div className="backdrop-blur-none">
      <div className="justify-center max-w-6xl px-4 mx-auto mt-20 sm:space-x-20 sm:flex backdrop-blur-none">
        <div className="z-50 max-w-md my-10 mt-20">
          <div className="pb-2 text-3xl font-bold sm:text-4xl">
            My web development
          </div>
          <div className="mt-4 text-lg sm:text-xl">
            {`I started out specializing in serverless architecture and infrastructure as code, creating backends with yaml files, the Serverless Framework, AWS CDK, and Serverless Stack (SST).`}
          </div>
        </div>
        <World />
      </div>
      <div className="z-50 flex flex-col-reverse justify-center max-w-6xl px-4 mx-auto mb-20 -mt-10 sm:flex-row sm:space-x-20 sm:flex">
        <div className="sm:w-[512px] sm:h-[364.8px]">
          {typeof isMobile === "undefined" ? null : isMobile ? (
            <Zoom>
              <Image
                className="rounded-lg"
                height={347.5}
                width={487.75}
                src={Bookmarks}
                alt="Web development bookmarks"
              />
            </Zoom>
          ) : (
            <Zoom>
              <Image
                className="rounded-lg sm:max-w-lg"
                src={Bookmarks}
                alt="Web development bookmarks"
              />
            </Zoom>
          )}
        </div>
        <div className="order-1 max-w-md my-10 text-lg sm:text-xl">
          {`I've shifted my focus to more frontend development, specializing in React and Tailwind CSS, with a preference for Next.js. I still
          manage to immerse myself in a wide array of tools and products, collecting a plethora of bookmarks along the way.`}
        </div>
      </div>
    </div>
  )
}
