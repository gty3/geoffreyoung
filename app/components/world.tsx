"use client"

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  createRef,
} from "react"
import dynamic from "next/dynamic"
// import Globe from "react-globe.gl"
import arcAndSvg from "../../lib/arcAndSvg"
import { ArcsObj, SVGobj } from "./types"
import Script from "next/script"



// declare const Globe: any

const World = () => {

  const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })


  const ARC_REL_LEN = 0.4

  const globeRef = useRef()

  const [arcsData, setArcsData] = useState<ArcsObj[]>([])
  const [svgData, setSvgData] = useState<SVGobj[]>([])

  const htmlFunction = (d: SVGobj) => {
    const el = document.createElement("div")
    el.innerHTML = d.icon
    el.style.width = d.width + "px"
    return el
  }

  const startTime = 1000

  useEffect(() => {
    if (!globeRef.current) return
    ;(globeRef.current as any).pointOfView(
      {
        lat: 39.609913,
        lng: -105.962477,
        altitude: 2.5,
      },
      startTime
    )
    console.log((globeRef.current as any).controls())
    ;(globeRef.current as any).controls().enableZoom = false
    arcAndSvg(setSvgData, setArcsData, startTime)
  }, [globeRef])

  // const isMobile = () => {
  //   if (window.innerWidth < 600) {
  //     return true }
  //   else { return false }
  // }

  return (
    // <>
    //   <Script src="//unpkg.com/react-globe.gl"></Script>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        height={600}
        onGlobeClick={(e) => console.log("e", e)}
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
        htmlElement={(d) => htmlFunction(d as SVGobj)}
        ref={globeRef}
      />
  // </>
  )
}

export default World
