"use client"

import Rive, { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import StateMachineBlog from "./statemachineBlog"
import { ArrowDownCircle, Controls, Eye } from "../../components/svg"

export default function Troubleshooting() {
  const [editableCode, setEditableCode] = useState("flex")
  const [einsteinState, setEinsteinState] = useState("scroll")
  const [artboardSelected, setArtboardSelected] = useState(false)
  const [transparent, setTransparent] = useState(false)

  const EinsteinY = useRive({
    src: "/einsteiny.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  })
  const rive = EinsteinY.rive
  const sm1 = "State Machine 1"
  const disableScroll = useStateMachineInput(rive, sm1, "disableScroll")
  const hideEinstein = useStateMachineInput(rive, sm1, "hide")
  const transparentEinstein = useStateMachineInput(rive, sm1, "transparent")

  const EinsteinX = useRive({
    src: "/einsteinx.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  })
  const riveX = EinsteinX.rive
  const sm1X = "State Machine 1"
  const disableScrollX = useStateMachineInput(riveX, sm1X, "disableScroll")
  const hideEinsteinX = useStateMachineInput(riveX, sm1X, "hide")
  const transparentEinsteinX = useStateMachineInput(riveX, sm1X, "transparent")

  const inputOnChange = (e: any) => {
    if (hideEinstein && disableScroll) {
      if (e.target.value === "flex") {
        hideEinstein.value = false
        disableScroll.value = false
        setEinsteinState("scroll")
      } else if (
        e.target.value === "h-32 w-32" ||
        e.target.value === "w-32 h-32"
      ) {
        hideEinstein.value = false
        disableScroll.value = true
        setEinsteinState("fixed")
      } else {
        hideEinstein.value = true
        setEinsteinState("hidden")
      }
    }
    if (hideEinsteinX && disableScrollX) {
      if (e.target.value === "flex") {
        hideEinsteinX.value = false
        disableScrollX.value = false
        setEinsteinState("scroll")
      } else if (
        e.target.value === "h-32 w-32" ||
        e.target.value === "w-32 h-32" ||
        e.target.value === "W-32 h-32" ||
        e.target.value === "H-32 w-32"
      ) {
        hideEinsteinX.value = false
        disableScrollX.value = true
        setEinsteinState("fixed")
      } else {
        hideEinsteinX.value = true
        setEinsteinState("hidden")
      }
    }

    setEditableCode(e.target.value)
  }

  const opacityOnChange = (e: any) => {
    if (transparentEinstein && hideEinstein && disableScroll) {
      if (e.target.value === "0%" || e.target.value === "0") {
        setTransparent(true)
        transparentEinstein.value = true
      } else {
        setTransparent(false)
        transparentEinstein.value = false
      }
    }
    if (transparentEinsteinX && hideEinsteinX && disableScrollX) {
      if (e.target.value === "0%" || e.target.value === "0") {
        setTransparent(true)
        transparentEinsteinX.value = true
      } else {
        setTransparent(false)
        transparentEinsteinX.value = false
      }
      return
    }
  }

  return (
    <div className="flex flex-row mt-20">
      <div className="overflow-hidden relative mx-auto max-w-3xl sm:overflow-visible">
        <div className="hidden sm:block">
          <div className="absolute -right-24 -mt-20 w-32 h-[72rem] ">
            <EinsteinY.RiveComponent />
          </div>
        </div>
        <div className="overflow-x-hidden p-4 mx-auto max-w-2xl prose">
          <h1>Getting started with Rive and React</h1>
          <p className="-mt-4">Didn&apos;t read the documentation? I got you</p>
          <h2>
            What if your Rive is rerendering infinitely or not rendering at all
          </h2>
          <div className="sm:hidden">
            <div className={"mb-4 h-32 -ml-[24rem] w-[70rem]"}>
              <EinsteinX.RiveComponent />
            </div>
          </div>

          <p>Make it STOP!! Delete the &apos;flex&apos; className below!</p>

          <pre>
            {`<div className="`}
            <input
              className="pl-1 w-32 text-base outline-none bg-slate-600"
              onChange={inputOnChange}
              value={editableCode}
            />
            {'" '}
            {`
    <Rive src="/einstein.riv" />
</div>`}
          </pre>
          <div className="-mt-4 h-8 sm:h-2">
            {einsteinState === "hidden" ? (
              <span className="text-red-600">
                Now it&apos;s not showing at all. Change the classname to
                &apos;h-32 w-32&apos;
              </span>
            ) : einsteinState === "fixed" ? (
              <span className="text-red-600">
                Nice! The .riv animation is working properly.
              </span>
            ) : null}
          </div>
          {/* <h2>Rive not rendering in React</h2> */}
          <p className="mt-8">
            If the parent container is &apos;flex&apos;, the page will keep
            resizing, creating this crazy movement effect. The parent element
            must have a fixed height and width. From the{" "}
            <Link href="https://help.rive.app/runtimes/overview/react/parameters-and-return-values">
              docs
            </Link>
            :
          </p>
          <blockquote>{`the containing <div> element handles resizing and layout for you, and thus, all styles should be passed onto this element`}</blockquote>

          <h2 className="mt-32">
            What&apos;s with the dark background around our animation?
          </h2>
          <h3>We forgot to make the artboard transparent</h3>
          <p>Select the artboard</p>
          <button
            onClick={() => setArtboardSelected((prev) => !prev)}
            className={`rounded-md w-[19rem]   ${
              artboardSelected ? "bg-blue-400" : "bg-zinc-700 hover:bg-zinc-600"
            } text-white text-xs py-2.5 px-3 text-left mb-4`}
          >
            <span className="px-0.5">❏ </span> New Artboard
          </button>
          <p>Now change the artboard fill property from 50% to 0%</p>
          <div className="bg-zinc-800 w-[19rem] h-20 rounded-md relative">
            <div className="flex flex-row m-1.5">
              <div className="mt-1"><ArrowDownCircle /></div>
              <div className="ml-1 text-zinc-400">Fills</div>
              <div className="absolute right-3">➕</div>
            </div>
            <div className="flex flex-row m-1.5 relative">
              <div className="text-lg text-zinc-500 ml-1 mr-2 w-6 h-6 mt-0.5"><Controls /></div>
              <div className="ml-2 text-zinc-400">⬛</div>
              <div className="ml-2 text-zinc-300 text-sm font-bold mt-1.5">
                313131
              </div>
              <input
                className="bg-zinc-700 w-12 text-zinc-200 h-6 mt-1.5 ml-16 text-center "
                placeholder="50%"
                disabled={!artboardSelected}
                autoFocus={!artboardSelected}
                onChange={opacityOnChange}
              />
              <div className="absolute right-1.5 mt-2 w-5 h-3 "><Eye /></div>
            </div>
          </div>
          <p className="mb-20 h-10 text-red-600">
            {transparent && "The Riv is now transparent!"}
          </p>
         
        </div>
        
        <StateMachineBlog />
      </div>
    </div>
  )
}
