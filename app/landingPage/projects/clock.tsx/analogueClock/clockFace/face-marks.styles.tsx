import styled from "styled-components"

export const HourMarks = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
  font-size: 1.1rem;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 500;
`
export const HourNumber = styled.div`
  position: absolute;
  left: -40px;
  width: 80px;
  text-align: center;
  top: 8%;
`
export const Minutes = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 48%;
  right: 48%;
  color: #1c9ed9;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
`
export const MinuteMarks = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
`

export const MinuteBody = styled.div`
  position: absolute;
  background-color: black;
  transform: translateX(-50%);
  z-index: 3;
`