"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { useEffect, useRef, useState } from "react"
import ContactLinks from "./contactLinks"

export default function RiveAndGpt() {
  const [animationState, setAnimationState] = useState<boolean>(false)
  const [typing, setTyping] = useState<boolean>(false)
  const [conversationState, setConversationState] = useState<any>([])
  const messageRef = useRef<HTMLInputElement>(null)

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
        { ai: "Hi, I'm here to represent Geoff" },
        { ai: "You can ask me questions like 'what are you working on?'" },
      ])
      setTyping(false)
    }, 5000)
  }, [])

  const sendMessage = async (message: string | undefined) => {
    if (!message) return
    setConversationState((prev: any) => [...prev, { sender: message }])
    messageRef.current && (messageRef.current.value = "")
    const res = await fetch("/api/question", {
      method: "POST",
      body: JSON.stringify({ message: message }),
    })
    const resJson = await res.json()

    setConversationState((prev: any) => [...prev, { ai: resJson.body.content }])
  }

  return (
    <>
      <div className="min-h-screen pt-20 backdrop-blur-none">
        <div className="flex flex-row justify-center">
          <div className="h-96 w-96">
            <RiveComponent />
          </div>
        </div>
        <div className="p-4 backdrop-blur-none">
          <div className="max-w-md mx-auto ">
            <div className="bottom-0 flex-col px-4 mt-4 w-96">
            <div className="flex flex-col space-y-4">
              {conversationState.map((message: any, i: number) =>
                message.ai ? (
                  <AiMessage key={i}>{message.ai}</AiMessage>
                ) : (
                  <SenderMessage key={i}>{message.sender}</SenderMessage>
                )
              )}
              {typing ? <TypingAnimation /> : null}
            </div>
              <form
                className="items-end"
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(messageRef.current?.value)
                }}
              >
                <input
                  className="flex-1 p-2 rounded-l-xl"
                  placeholder="Type a message..."
                  ref={messageRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      sendMessage(messageRef.current?.value)
                    }
                  }}
                />
                <button
                  type="submit"
                  className="p-2 text-white bg-blue-500 rounded-r-xl"
                >
                  Send
                </button>
              </form>
              
              <div className="flex justify-center mt-8">
                <ContactLinks />
              </div>
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
      <div className="max-w-sm px-4 py-2 text-black bg-gray-200 rounded-br-xl rounded-t-xl">
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
    <div className="flex justify-around w-24 p-3.5 bg-gray-200 rounded-3xl my-4">
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  )
}
