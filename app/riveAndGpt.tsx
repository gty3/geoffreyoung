"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { Sen } from "next/font/google"
import { useEffect, useRef, useState } from "react"

export default function RiveAndGpt() {
  const [animationState, setAnimationState] = useState<boolean>(false)
  const [typing, setTyping] = useState<boolean>(false)
  const [conversationState, setConversationState] = useState<any>([
  ])
  const messageRef = useRef<HTMLInputElement>(null)

  // console.log(animationState)

  const { rive, RiveComponent } = useRive({
    autoplay: true,
    src: "/girl-line-art.riv",
    stateMachines: "State Machine 1",
    onStateChange: (state) => {
      if (!Array.isArray(state.data)) return
      if (state.data[0] === "exit") {
        setTimeout(() => {
          setTyping(true)
        }, 500)
      }
    },
  })

  useEffect(() => {

    setTimeout(() => {
      setConversationState((prev: any) => [
        ...prev,
        { ai: "I'm here to answer any questions you might have" },
      ])
      setTyping(false)
    }, 5000)
  }, [])

  const sendMessage = (message: string | undefined) => {
    if (!message) return
    setConversationState((prev: any) => [...prev, { sender: message }])
  }

  return (
    <>
      <div className="pt-20 backdrop-blur-none">
        <div className="flex flex-row justify-center">
          <div className="h-96 w-96">
            <RiveComponent />
          </div>
        </div>
        <div className="min-h-screen p-4 backdrop-blur-none">
          <div className="max-w-md mx-auto ">
            <div className="flex flex-col space-y-4">
              {conversationState.map((message: any, i: number) => 
                message.ai ? (
                  <AiMessage key={i}>{message.ai}</AiMessage>
               ) : (
                  <SenderMessage key={i}>
                    {message.sender}
                  </SenderMessage>
                )
              )}
              {typing ? <TypingAnimation /> : null}
            </div>
            <div className="fixed bottom-0 flex mt-4 w-96">
              <input
                className="flex-1 p-2 rounded-l-xl"
                placeholder="Type a message..."
                ref={messageRef}
              />
              <button onClick={() => sendMessage(messageRef.current?.value)} className="p-2 text-white bg-blue-500 rounded-r-xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AiMessage = ({ children }: any) => {
  return (
    <div className="flex items-end">
      <div className="max-w-sm px-4 py-2 text-black bg-gray-300 rounded-br-xl rounded-t-xl">
        {children}
      </div>
    </div>
  )
}
const SenderMessage = ({ children }: any) => {
  return (
    <div className="flex items-end justify-end ">
      <div className="max-w-sm px-4 py-2 text-white bg-blue-500 rounded-bl-xl rounded-t-xl">
        {children}
      </div>
    </div>
  )
}

const TypingAnimation = () => {
  return (
    <div className="flex justify-around w-24 p-3.5 bg-gray-300 rounded-3xl my-4">
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  )
}
