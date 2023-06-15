"use client"

import { useState } from "react"
import { useTransition, animated } from '@react-spring/web'

import Image from "next/image";
import Mtb1 from "public/about/mtb1.jpg"
import Slackline1 from "public/about/slackline1.jpg"
export default function Images () {

  const slides = [
    // Mtb1,
    Slackline1
  ]
  

  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.1 },
    enter: { opacity: 1 },
    leave: { opacity: 0.1, delay: 1000 },
    config: { duration: 1000 },

    onRest: (_a, _b, item) => {
      
      if (index === item) {
        set(state => (state + 1) % slides.length)
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
            // backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        ><Image className="rounded-lg" src={slides[i]} width={800} height={600} alt="mtb inmage" /></animated.div>
      ))}
    </div>
  )
}

