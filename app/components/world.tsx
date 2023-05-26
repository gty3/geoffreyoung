"use client"

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
} from "react"
import arcAndSvg from "../../lib/arcAndSvg"
import { ArcsObj, SVGobj } from "./types"
import dynamic from "next/dynamic"

const Globe = dynamic(() => import("./globeWrapper"), {
  ssr: false,
})
// const Globe = forwardRef((props: any, ref) => (
//   <GlobeTmpl {...props} forwardRef={ref} />
// ))

const World = () => {
  const ARC_REL_LEN = 0.4

  const globeRef = useRef()

  const [arcsData, setArcsData] = useState<ArcsObj[]>([])
  const [svgData, setSvgData] = useState<SVGobj[]>([])
  const [globeReady, setGlobeReady] = useState(false)

  const htmlFunction = (d: SVGobj) => {
    const el = document.createElement("div")
    el.innerHTML = d.icon
    el.style.width = d.width + "px"
    return el
  }

  const startTime = 1000

  useEffect(() => {
    if (!globeRef.current) {
      return
    }
    ;(globeRef.current as any).pointOfView(
      {
        lat: 39.609913,
        lng: -105.962477,
        altitude: 2.5,
      },
      startTime
    )
    ;(globeRef.current as any).controls().enableZoom = false
    arcAndSvg(setSvgData, setArcsData, startTime)
  }, [globeReady])

  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeReady={() => setGlobeReady(true)}
        height={typeof window !== "undefined" && window.innerWidth > 575 ? 700 : 500 }
        animateIn={false}
        arcsData={arcsData}
        arcColor={() => "orange"}
        arcDashLength={ARC_REL_LEN}
        arcDashGap={2}
        arcStroke={1}
        arcDashInitialGap={1}
        arcDashAnimateTime={800}
        arcsTransitionDuration={0}
        backgroundColor="rgba(0,0,0,0)"
        htmlElementsData={svgData}
        htmlElement={(d: any) => htmlFunction(d as SVGobj)}
        ref={globeRef}
      />
    </>
  )
}

export default World
