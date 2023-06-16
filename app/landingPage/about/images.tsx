"use client"

import { useEffect, useState } from "react"
import { useTransition, animated } from "@react-spring/web"

import Image from "next/image"
import Mtb1 from "public/about/mtb1.jpg"
import Slackline1 from "public/about/slackline1.jpg"
import Freedive from "public/about/freedive.jpg"
import Mtb2 from "public/about/mtb2.jpg"
import Mtb3 from "public/about/mtb3.jpg"
import Paddleboard from "public/about/paddleboard.jpg"
import Snow from "public/about/snow.jpg"



export default function Images() {
  const slides = [Mtb1, Slackline1, Freedive, Mtb2, Mtb3, Paddleboard, Snow]


    const matches = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches


  // useEffect(() => {
  //   typeof window !== "undefined" && window
  //   .matchMedia("(min-width: 768px)")
  //   .addEventListener('change', e => setMatches( e.matches ));
  // }, []);

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
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className=""
          style={{
            ...style,
          //   backgroundImage: `url(https://ik.imagekit.io/ml8s1f1667/${images[i]}?tr=w-1080,h-800)`,
          }}
        >
          <Image
            className="rounded-lg"
            //  src={`https://ik.imagekit.io/ml8s1f1667/${images[i]}?tr=w-1080,h-800`}
             src={slides[i]}
            width={matches ? 800 : 400}
            height={matches ? 600 : 300}
            alt={images[i]}
            placeholder = 'blur'
          />
        </animated.div>
      ))}
    </div>
  )
}
