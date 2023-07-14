import { useReducer } from "react"
import reducer from "./reducer"
import AnalogueClock from "./analogueClock/analogue-clock"

export default function ClockCard() {
  const [masterTime, dispatchMaster] = useReducer(reducer, new Date())

  const hours = masterTime.getHours() === 0 ? 12 : masterTime.getHours()
  const minutes = masterTime.getMinutes() < 10 ? "0" + masterTime.getMinutes() : masterTime.getMinutes()

  return (
    <div className="p-4 border border-gray-300 rounded-lg sm:p-6 break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter">
      <div className="flex flex-row">
        <div>
          <AnalogueClock time={masterTime} dispatch={dispatchMaster} />
        </div>
        <div>
          <div className="flex justify-center p-4 text-xl font-semibold">
            {hours + ":" + minutes}
          </div>
          <div className="flex flex-col pl-6">
            <div className="text-2xl font-extrabold">React Clock</div>
            <div className="font-medium ">Move the hands!</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div className="my-1">
          Building this was quite the trigonometric puzzle. Tested with Jest and
          React Testing Library. Built with Styled-Components.
        </div>
      </div>
    </div>
  )
}
