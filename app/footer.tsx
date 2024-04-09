"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"

export default function Footer() {
  const { rive, RiveComponent } = useRive({
    autoplay: true,
    src: "/rain-cloud.riv",
    stateMachines: "State Machine 1",
  })

  return (
    <div className="flex justify-center mb-0.5">
      <div className="flex flex-row text-center backdrop-blur-none">
        Made with{" "}
        <div className="w-10 h-10 mx-2 -mt-2">
          <RiveComponent />
        </div>{" "}
        by Geoff
      </div>
    </div>
  )
}