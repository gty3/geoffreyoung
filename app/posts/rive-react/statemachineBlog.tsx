"use client"

import { ButtonDark } from "../../components/button"
import { ArrowDown, ArrowDownCircle } from "../../components/svg"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { useEffect, useRef, useState } from "react"

export default function StateMachineBlog() {
  const [exceededState, setExceededState] = useState(false)
  const [i, setI] = useState<number | null>(null)

  const [input1, setInput1] = useState("Boolean 1")
  const [input2, setInput2] = useState("true")

  useEffect(() => {
    if (!i) return
    if (i < 99) {
      setTimeout(() => {
        setI(i + 1)
      }, 20)
    }
  }, [i])

  const { rive, RiveComponent } = useRive({
    src: "/statemachine.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    onStateChange: (event) => {
      if (!Array.isArray(event.data)) return
      if (event.data[0] === "left arrow blue") {
        setInput1("")
        setInput2("")
      }
    },
  })
  const failureState = useStateMachineInput(
    rive,
    "State Machine 1",
    "failureState"
  )
  const timeline2 = useStateMachineInput(rive, "State Machine 1", "timeline2")

  const updateInput2 = (e: any) => {
    
    if (e.target.value === "false") { timeline2 && (timeline2.value = true) }
    setInput2(e.target.value)
  }

  const buttonHandler = () => {
    setI(50)

    failureState && (failureState.value = true)
  }


  return (
    <div className="p-4 mb-32 prose">
      <h2>I added state to my Rive but its saying StateMachine exceeds max iterations</h2>
      <p>We have an animation with 2 states. Here is the code:</p>
      <pre>{`
const { rive, RiveComponent } = useRive({
  src: "/einstein.riv",
  stateMachines: "State Machine 1",
  autoplay: true,
})
const boolean1 = useStateMachineInput(rive, "State Machine 1", "Boolean 1")

return (
  <>
    <button onClick={() => boolean1.value = true}>
      Set boolean1.value = true
    </button>
  </>
)
      `}</pre>
      <p>And here is our state machine in the Rive Editor</p>
      <div className="sm:m-0 -ml-10 h-[200px] w-[500px]">
        <RiveComponent />
      </div>
      <p>We have a condition set, Boolean 1, to move to the next state</p>
      <div className="bg-zinc-800 w-[19rem] h-20 rounded-md relative">
        <div className="flex flex-row m-1.5">
          <div className="mt-1 mr-3 w-2 h-2">
            <ArrowDownCircle />
          </div>
          <div className="ml-1 text-zinc-400">Conditions</div>
          <div className="absolute right-3">➕</div>
        </div>
        <div className="flex flex-row m-1.5 relative">
          <input
            key="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="ml-2 bg-zinc-700 text-zinc-300 mt-1.5 w-20"
          />

          <div className="absolute left-32 mt-3">
            <ArrowDown />
          </div>
          <input
            key="input2"
            value={input2}
            onChange={updateInput2}
            className="bg-zinc-700 w-12 text-zinc-200 h-6 mt-1.5 ml-16 text-center"
          />
          <div className="absolute right-2 mt-3">
            <ArrowDown />
          </div>
        </div>
      </div>
      <p>Let&apos;s trigger that state change in our code, press the button below</p>
      <ButtonDark onClick={buttonHandler}>
        Set boolean1.value = true
      </ButtonDark>
      <div className="mt-4 h-10 text-red-600">
        {i && (
          <div className="flex flex-row">
            <div className="flex justify-center mr-1 w-8 text-red-100 bg-red-900 rounded-lg">
              {"" + i}
            </div>{" "}
            StateMachine exceeded max iterations
          </div>
        )}
      </div>

      <p className="mt-0">
        The state should have moved from Timeline 1 to Timeline 2. But instead
        we&apos;re getting this error in our console and the state machine has
        stopped.
      </p>

      <p>
        Click on the left arrow on the state machine to see our Timeline 2 to
        Timeline 1 condition.
      </p>

      <p>
        There is our problem - we have a transition property from Timeline 2 to
        Timeline 1 but no condition. When Boolean 1 is true, state goes to
        Timeline 2, only to be immediatly sent back to Timeline 1, repeating
        infinitly.
      </p>
      <p>Add a &apos;Boolean 1 - false&apos; condition to resolve the problem.</p>
      {(input2 === "false" || input2 === "False") && <p className="text-red-600"> Nice!</p>}
    </div>
  )
}
