import {
  MouseEvent,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { HourMarks, MinuteMarks, MinuteNumbers } from "./clockFace/face-marks"
import * as Styled from "./analogue-clock.styles"
import { Action, ActionType, timeToAngle } from "../reducer"

type ClockCenter = {
  x: number
  y: number
}

export default function AnalogueClock({ dispatch, time }: {
  time: Date
  dispatch: (action: Action) => void
}) {
  const [clockCenter, setClockCenter] = useState<ClockCenter>({
    x: 0,
    y: 0,
  })

  const clockRef = useRef<HTMLDivElement>(null)

  function ClockFace() {
    return (
      <Styled.ClockFace role="clockFace" ref={clockRef}>
        <MinuteMarks />
        <HourMarks />
        <MinuteNumbers />
      </Styled.ClockFace>
    )
  }

  // This gets the x, y center position of the clockface
  const getPosition = () => {
    if (!clockRef.current) throw Error("Clockface not set")
    const bounds = clockRef.current.getBoundingClientRect()
    const x = bounds.width / 2 + bounds.left
    const y = bounds.height / 2 + bounds.top
    setClockCenter({ x: x, y: y })
  }

  function isMouse(
    event: MouseEvent | TouchEvent | Event
  ): event is MouseEvent {
    return "clientX" in event
  }
  function isTouch(
    event: MouseEvent | TouchEvent | Event
  ): event is TouchEvent {
    return "touches" in event
  }

  // get position of mouse on clockface and convert into an angle - dispatch Hourhand
  const eventListenerHour = useCallback(
    (event: MouseEvent | TouchEvent | Event) => {
      if (!(isTouch(event) || isMouse(event))) return
      const mousePos = isTouch(event)
        ? {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          }
        : {
            x: event.clientX,
            y: event.clientY,
          }
      const localPosX = mousePos.x - clockCenter.x
      const localPosY = mousePos.y - clockCenter.y

      // convert x, y mouse position on graph into an angle
      const mousePosTan = Math.atan2(localPosY, localPosX)
      const mousePosAngle = mousePosTan * (180 / Math.PI)

      // mouse position angle is 0-180 -180-0. Adding 450 and checking remainder to convert to 0-360
      const mouseDegree = (mousePosAngle + 450) % 360
      dispatch({ type: ActionType.hourHand, payload: mouseDegree })
    },
    [clockCenter, dispatch]
  )

  // get position of mouse on clockface and convert into an angle - dispatch Minutehand
  const eventListenerMinute = useCallback(
    (event: MouseEvent | TouchEvent | Event) => {
      if (!(isTouch(event) || isMouse(event))) return
      const mousePos = isTouch(event)
        ? {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          }
        : {
            x: event.clientX,
            y: event.clientY,
          }

      const localPosX = mousePos.x - clockCenter.x
      const localPosY = mousePos.y - clockCenter.y
      const mousePosTan = Math.atan2(localPosY, localPosX)
      // convert x, y mouse position on graph into an angle
      const mousePosAngle = mousePosTan * (180 / Math.PI)
      // mouse position angle is 0-180 -180-0. Adding 450 and checking remainder to convert to 0-360
      const mouseDegree = (mousePosAngle + 450) % 360

      dispatch({ type: ActionType.minuteHand, payload: mouseDegree })
    },
    [clockCenter, dispatch]
  )

  const dragMinuteHand = (e: MouseEvent | TouchEvent) => {
    e.type === "mousedown" &&
      document.addEventListener("mousemove", eventListenerMinute)

    e.type === "touchstart" &&
      e.target.addEventListener("touchmove", eventListenerMinute)
  }

  const stopMovingMinute = (e: MouseEvent | TouchEvent) => {
    document.removeEventListener("mousemove", eventListenerMinute)
    e.target.removeEventListener("touchmove", eventListenerMinute)
  }

  const dragHourHand = (e: MouseEvent | TouchEvent) => {
    e.type === "mousedown" &&
      document.addEventListener("mousemove", eventListenerHour)

    e.type === "touchstart" &&
      e.target.addEventListener("touchmove", eventListenerHour)
  }
  const stopMovingHour = (e: MouseEvent | TouchEvent) => {
    document.removeEventListener("mousemove", eventListenerHour)
    e.target.removeEventListener("touchmove", eventListenerHour)
  }

  useEffect(() => {
    getPosition()
    window.addEventListener("resize", getPosition)
  }, [])

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", eventListenerMinute)
      document.removeEventListener("mousemove", eventListenerHour)
    })

    return () => {
      document.removeEventListener("mouseup", () => {
        document.removeEventListener("mousemove", eventListenerMinute)
        document.removeEventListener("mousemove", eventListenerHour)
      })
    }
  }, [eventListenerMinute, eventListenerHour])

  const MinuteHand = ({ angle }: { angle: number }) => {
    return (
      <Styled.ClockHand
        role="minuteHand"
        onMouseDown={dragMinuteHand}
        onTouchStart={dragMinuteHand}
        onTouchEnd={stopMovingMinute}
        onMouseUp={stopMovingMinute}
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <Styled.MinuteHand id="minuteHand" />
      </Styled.ClockHand>
    )
  }

  const HourHand = ({ angle }: { angle: number }) => {
    return (
      <Styled.ClockHand
        role="hourHand"
        onMouseDown={dragHourHand}
        onTouchStart={dragHourHand}
        onTouchEnd={stopMovingHour}
        onMouseUp={stopMovingHour}
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <Styled.HourHand id="hourHand" />
      </Styled.ClockHand>
    )
  }

  const { hourAngle, minuteAngle } = timeToAngle(time)

  return (
    <>
      <Styled.Clock
        style={{
          width: 150,
          height: 150,
        }}
      >
        <ClockFace />
        <HourHand angle={hourAngle} />
        <MinuteHand angle={minuteAngle} />
      </Styled.Clock>
    </>
  )
}
