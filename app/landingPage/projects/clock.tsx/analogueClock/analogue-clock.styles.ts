import styled from 'styled-components';

export const ClockHand = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
`
export const MinuteHand = styled.div`
  position: absolute;
  background-color: #1c9ed9;
  border-radius: 25px;
  transform: translateX(-50%);
  width: 8px;
  top: 10%;
  bottom: 50%;
`
export const HourHand = styled.div`
  position: absolute;
  background-color: #d6171a;
  border-radius: 25px;
  transform: translateX(-50%);
  width: 10px;
  top: 18%;
  bottom: 50%;
`
export const ClockFace = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2.5px solid #1c9ed9;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  &:after{
    content: "";
    z-index: 1;
  transform: translate(-50%, -50%);
  top: 50%;
  bottom: 50%;
  position: absolute;
  background-color: black;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  left: 50%;
  right: 50%;
  }
`
export const Clock = styled.div`
  display: block;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: none;
`