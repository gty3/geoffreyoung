import * as Styled from "./face-marks.styles"

const degreesInHour = 30
const degreesInMinute = 6

const hoursOnClockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const minutesOnClockArray = [...Array(60).keys()]

export function HourMarks(): JSX.Element {
  return (
    <>
      {hoursOnClockArray.map((hour) => (
        <Styled.HourMarks
          key={hour}
          style={{
            transform: `rotate(${hour * degreesInHour}deg)`,
          }}
        >
          {hour ? (
            <Styled.HourNumber
              style={{
                transform: `rotate(-${hour * degreesInHour}deg)`,
              }}
            >
              {hour}
            </Styled.HourNumber>
          ) : null}
        </Styled.HourMarks>
      ))}
    </>
  )
}

export function MinuteNumbers() {
  return (
    <>
      {hoursOnClockArray.map((hour) => {
        const x =
          hour === 3
            ? hour * 30
            : hour === 6
            ? hour * 30
            : hour === 9
            ? hour * 30
            : hour === 4
            ? hour * 45
            : hour === 5
            ? hour * 35
            : hour === 7
            ? hour * 25
            : hour === 8
            ? hour * 23
            : 0

        return (
          <Styled.Minutes
            key={hour}
            style={{
              transform: `rotate(${hour * degreesInHour}deg)`,
            }}
          >
            <div style={{ transform: `rotate(-${x}deg)` }}>{hour * 5}</div>
          </Styled.Minutes>
        )
      })}
    </>
  )
}

export function MinuteMarks(): JSX.Element {
  return (
    <>
      {minutesOnClockArray.map((minute) => {
        const isHourMark = !(minute % 5)
        return (
          !isHourMark && (
            <Styled.MinuteMarks
              key={minute}
              style={{
                transform: `rotate(${minute * degreesInMinute}deg)`,
              }}
            >
              <Styled.MinuteBody
                style={{
                  backgroundColor: "#1c9ed9",
                  width: `1.5px`,
                  top: `6px`,
                  bottom: `95%`,
                }}
              />
            </Styled.MinuteMarks>
          )
        )
      })}
    </>
  )
}
