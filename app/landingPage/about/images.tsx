"use client"

import { useState } from "react"
import { useTransition, animated } from "@react-spring/web"

import Image from "next/image"
import Mtb1 from "public/about/mtb1.jpg"
import Slackline1 from "public/about/slackline1.jpg"
import Selfiegravel from "public/about/selfiegravel.jpg"

export default function Images() {
  const slides = [Mtb1, Slackline1]
  const images = [
    "/about/mtb1.jpg",
    "/about/slackline1.jpg",
    "/about/mtb2.jpg",
    "/about/mtb3.jpg",
    "/about/paddleboard.jpg",
    "/about/freedive.jpg",
    "/about/snow.jpg",
  ]

  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.2 },
    enter: { opacity: 1 },
    leave: { opacity: 0.2, delay: 1000 },
    config: { duration: 800 },

    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })

  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className=""
          // style={{
          //   ...style,
          //   backgroundImage: `url(https://ik.imagekit.io/ml8s1f1667/${images[i]}?tr=w-1080,h-800)`,
          // }}
        >
          <Image
            className="rounded-lg"
            //  src={`https://ik.imagekit.io/ml8s1f1667/${images[i]}?tr=w-1080,h-800`}
             src={slides[i]}
            width={800}
            height={600}
            alt={images[i]}
            placeholder = 'blur'
          />
        </animated.div>
      ))}
    </div>
  )
}
