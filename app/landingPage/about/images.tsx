"use client"

import { useEffect, useState } from "react"
import { useTransition, animated } from "@react-spring/web"

import Image from "next/image"
import Slackline1 from "public/about/mobile/slackline1.jpg"
import Freedive from "public/about/mobile/freedive.jpg"
import Mtb2 from "public/about/mobile/mtb2.jpg"
import Mtb3 from "public/about/mobile/mtb3.jpg"
import Paddleboard from "public/about/mobile/paddleboard.jpg"
import Snow from "public/about/mobile/snow.jpg"
import Mtb1 from "public/about/mobile/mtb1.jpg"

import DSlackline1 from "public/about/desktop/slackline1.jpg"
import DFreedive from "public/about/desktop/freedive.jpg"
import DMtb2 from "public/about/desktop/mtb2.jpg"
import DMtb3 from "public/about/desktop/mtb3.jpg"
import DPaddleboard from "public/about/desktop/paddleboard.jpg"
import DSnow from "public/about/desktop/snow.jpg"
import DMtb1 from "public/about/desktop/mtb1.jpg"

export default function Images() {
  const mobileSlides = [
    Mtb1,
    Slackline1,
    Freedive,
    Mtb2,
    Mtb3,
    Paddleboard,
    Snow,
  ]
  const slides = [
    DMtb1,
    DSlackline1,
    DFreedive,
    DMtb2,
    DMtb3,
    DPaddleboard,
    DSnow,
  ]

  const [matches, setMatches] = useState<boolean>()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    setMatches(window.matchMedia("(min-width: 768px)").matches)
  }, [])

  const images = [
    "/about/desktop/mtb1.jpg",
    "/about/desktop/slackline1.jpg",
    "/about/desktop/mtb2.jpg",
    "/about/desktop/mtb3.jpg",
    "/about/desktop/paddleboard.jpg",
    "/about/desktop/freedive.jpg",
    "/about/desktop/snow.jpg",
  ]

  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 4000 },
    config: { duration: 1000 },

    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })

  return (
    null
    // <div className="sm:w-[624px] sm:h-[468px] w-[358px] h-[268.5px]">
    //   {typeof matches === "undefined"
    //     ? null
    //     : transitions((style, i) => (
    //         <animated.div
    //           style={{
    //             ...style,
    //           }}
    //         >
    //           <Image
    //             className="rounded-lg "
    //             src={matches ? slides[i] : mobileSlides[i]}
    //             alt={images[i]}
    //             placeholder="blur"
    //           />
    //         </animated.div>
    //       ))}
    // </div>
  )
}
