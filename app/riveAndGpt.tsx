"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { useEffect, useRef, useState } from "react"
import ContactLinks from "./contactLinks"

export default function RiveAndGpt() {
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
  const smile = useStateMachineInput(rive, "State Machine 1", "smile")

  useEffect(() => {
    setTimeout(() => {
      setConversationState((prev: any) => [
        ...prev,
        { ai: "Hi, I'm here to represent Geoff" },
      ])
      setTyping(false)
    }, 3000)

    setTimeout(() => {
      setTyping(true)
    }, 3500)

    setTimeout(() => {
      setConversationState((prev: any) => [
        ...prev,
        { ai: "You can ask me questions like 'what are you working on?'" },
      ])
      setTyping(false)
    }, 4500)
  }, [])

  const sendMessage = async (message: string | undefined) => {
    if (!message) return
    setTimeout(() => {
      setTyping(true)
    }, 200)

    setConversationState((prev: any) => [...prev, { sender: message }])
    messageRef.current && (messageRef.current.value = "")
    const res = await fetch("/api/question", {
      method: "POST",
      body: JSON.stringify({ message: message }),
    })
    const resJson = await res.json()
    try {
      const answer = JSON.parse(resJson.body.content).answer
      const emotion = JSON.parse(resJson.body.content).emotion
      if (emotion === "happy") {
        smile && (smile.value = true)
      } else {
        smile && (smile.value = false)
      }
      setTyping(false)
      setConversationState((prev: any) => [...prev, { ai: answer }])
    } catch {
      /* if response is not a json object */
      setTyping(false)
      setConversationState((prev: any) => [
        ...prev,
        { ai: resJson.body.content },
      ])
    }
  }

  const MessageForm = () => {
    return (
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage(messageRef.current?.value)
        }}
      >
        <input
          className="p-2 appearance-none rounded-l-xl w-72 overflow-"
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
    )
  }

  const AiMessage = ({ children, i }: any) => {
    let opacity = "opacity-100"
    const position =  conversationState.length - i

    if (position > 4) {
      opacity = "opacity-0"
    } else if (position > 3) {
      opacity = "opacity-30"
    } else if (position > 2) {
      opacity = "opacity-50"
    }

    return (
      <div className="flex items-start">
        <div
          className={
            opacity +
            " max-w-sm px-4 py-2 text-black bg-gray-200 rounded-br-xl rounded-t-xl"
          }
        >
          {children}
        </div>
      </div>
    )
  }
  const SenderMessage = ({ children, i }: any) => {
    let opacity = "opacity-100"
    const position = conversationState.length - i

    if (position > 4) {
      opacity = "opacity-0"
    } else if (position > 2) {
      opacity = "opacity-50"
    }
    return (
      <div className="flex items-end justify-end ">
        <div className={ opacity + " max-w-sm px-4 py-2 text-white bg-blue-500 rounded-bl-xl rounded-t-xl"}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="h-screen p-4 backdrop-blur-none">
        <div className="flex flex-row justify-center pt-8 sm:pt-12">
          <div className="z-10 h-96 w-96">
            <RiveComponent />
          </div>
        </div>
        <div className="absolute inset-x-0 z-0 max-w-md mx-auto bottom-24 sm:bottom-64">
          <div className="z-0 flex flex-col-reverse px-4 mt-4 space-y-6 w-96">
            <div className="flex justify-center mt-8">
              <ContactLinks />
            </div>
            <MessageForm />
            <div className="flex flex-col space-y-4">
              {conversationState.map((message: any, i: number) =>
                message.ai ? (
                  <AiMessage i={i} key={i}>
                    {message.ai}
                  </AiMessage>
                ) : (
                  <SenderMessage i={i} key={i}>
                    {message.sender}
                  </SenderMessage>
                )
              )}
              {typing ? <TypingAnimation /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const TypingAnimation = () => {
  return (
    <div className="flex justify-around w-24 p-3.5 bg-gray-200 rounded-3xl">
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>
  )
}
