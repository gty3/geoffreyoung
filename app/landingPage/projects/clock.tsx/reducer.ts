export enum ActionType {
  minuteHand = "minuteHand",
  hourHand = "hourHand",
  initialLoad = "initialLoad",
}

export type Action = {
  type: ActionType
  payload: number
}

const degreesInCircle = 360
const hoursOnClock = 12
const minuteDegreeIncrements = 6
const largeMouseMovementDegree = 330
const hourDegreeIncrements = 0.5
const degreesInHour = 30

export const timeToAngle = (
  date: Date
): { hourAngle: number; minuteAngle: number } => {
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const minuteAngle = minutes * minuteDegreeIncrements
  const minutesToHourAngle = minuteAngle / hoursOnClock
  const hourAngle = hours * degreesInHour + minutesToHourAngle
  return { hourAngle: hourAngle, minuteAngle: minuteAngle }
}

export const angleToTime = (hourAngle: number): Date => {
  const hour = Math.floor(hourAngle / degreesInHour)
  const withinHourAngle = hourAngle - hour * degreesInHour
  // withinHourAngle is the hourhand degree between 0 - 30
  const minute = withinHourAngle * 2
  return new Date(0, 0, 0, hour, minute, 0, 0)
}

const reducer = (state: Date, action: Action): Date => {
  const { hourAngle, minuteAngle } = timeToAngle(state)
  switch (action.type) {
    case ActionType.minuteHand: {
      const rawMouseDegree = action.payload
      const mouseDegree =
        Math.round(rawMouseDegree / minuteDegreeIncrements) *
        minuteDegreeIncrements

      // moving clockwise
      if (mouseDegree > minuteAngle) {
        const prevCurAngleDif = mouseDegree - minuteAngle

        // when the mouse moves more than 330 degrees, it is likely that the mouse is crossing 12:00 counterclockwise
        if (prevCurAngleDif > largeMouseMovementDegree) {
          const inverseAngleDif = degreesInCircle - mouseDegree + minuteAngle
          const newHourAngle = hourAngle - inverseAngleDif / hoursOnClock
          return angleToTime(newHourAngle)
        }
        const newHourAngle = hourAngle + prevCurAngleDif / hoursOnClock
        return angleToTime(newHourAngle)
      }

      // moving counterclockwise
      if (mouseDegree < minuteAngle) {
        const prevCurAngleDif = minuteAngle - mouseDegree

        // when the mouse moves more than 330 degrees, it is likely that the mouse is crossing 12:00 clockwise
        if (prevCurAngleDif > largeMouseMovementDegree) {
          const inverseAngleDif = degreesInCircle - minuteAngle + mouseDegree
          const newHourAngle = hourAngle + inverseAngleDif / hoursOnClock
          return angleToTime(newHourAngle)
        }
        const newHourAngle = hourAngle - prevCurAngleDif / hoursOnClock
        return angleToTime(newHourAngle)
      }

      // mouseDegree === minuteAngle
      return state
    }

    // move hour hand, calculate minute hand position from hourhand
    case ActionType.hourHand: {
      const rawMouseDegree = action.payload
      const mouseDegree =
        Math.round(rawMouseDegree / hourDegreeIncrements) * hourDegreeIncrements
      return angleToTime(mouseDegree)
    }
    
    default:
      return new Date()
  }
}

export default reducer
