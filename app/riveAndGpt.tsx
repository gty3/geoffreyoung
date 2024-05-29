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
        sessionStorage.setItem('smile', 'true')
        setTimeout(() => {
          setTyping(true)
        }, 500)
      }
    },
  })
  const smile = useStateMachineInput(rive, "State Machine 1", "smile")

  useEffect(() => {
    const smileValue = sessionStorage.getItem('smile')
    smile && (smile.value = true)
    setTimeout(() => {
      setConversationState((prev: any) => [
        ...prev,
        { ai: "Hi, feel free to send me a message" },
      ])
      setTyping(false)
    }, 3000)

    setTimeout(() => {
      setTyping(true)
    }, 3500)

    setTimeout(() => {
      setConversationState((prev: any) => [
        ...prev,
        { ai: "I'll try my best to respond but am not always available" },
      ])
      setTyping(false)
    }, 4500)
  }, [])

  const sendMessage = async (message: string | undefined) => {
    console.log(message)
    if (!message) return
    // setTimeout(() => {
    //   setTyping(true)
    // }, 200)

    setConversationState((prev: any) => [...prev, { sender: message }])
    // messageRef.current && (messageRef.current.value = "")
    // const res = await fetch("/api/question", {
    //   method: "POST",
    //   body: JSON.stringify({ message: message }),
    // })
    // const resJson = await res.json()
    try {
      // const answer = JSON.parse(resJson.body.content).answer
      // const emotion = JSON.parse(resJson.body.content).emotion
      // if (emotion === "happy") {
      //   smile && (smile.value = true)
      // } else {
      //   smile && (smile.value = false)
      // }
      // setTimeout(() => {
      //   setTyping(false)
      // setConversationState((prev: any) => [...prev, { ai: "I will not answer" }])
      // }, 200)
      // setTyping(false)
      // setConversationState((prev: any) => [...prev, { ai: answer }])
    } catch {
      /* if response is not a json object */
      // setTyping(false)
      // setConversationState((prev: any) => [
      //   ...prev,
      //   { ai: resJson.body.content },
      // ])
    }
  }

  return (
    <>
      <div className="p-4 backdrop-blur-none">
        <div className="flex flex-row justify-center pt-8 sm:pt-12">
          <div className="z-10 w-96 h-96">
            <RiveComponent />
          </div>
        </div>
        {/* <div className="absolute inset-x-0 z-0 mx-auto max-w-md"> */}
          {/* <div className="flex z-0 flex-col-reverse px-4 mt-4 space-y-6 w-96"> */}
            <div className="flex justify-center mt-12 sm:mt-20">
              <ContactLinks />
            </div>
            {/* <MessageForm sendMessage={sendMessage} messageRef={messageRef} />
            <div className="flex flex-col space-y-4">
              <MessagesList conversationState={conversationState} />
              {typing ? <TypingAnimation /> : null}
            </div> */}
          {/* </div> */}
        {/* </div> */}
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

type MessageProps = {
  children: any
  i: number
  conversationStateLength: number
  type: "ai" | "sender"
}

const Message = ({
  children,
  i,
  conversationStateLength,
  type,
}: MessageProps) => {
  let opacity = "opacity-100"
  const position = conversationStateLength - i

  if (position > 4) {
    opacity = "opacity-0"
  } else if (position > 3 && type === "ai") {
    opacity = "opacity-30"
  } else if (position > 2) {
    opacity = "opacity-50"
  }

  const baseStyles = "max-w-sm px-4 py-2 rounded-t-xl"
  const aiStyles = "text-black bg-gray-200 rounded-br-xl"
  const senderStyles = "text-white bg-blue-500 rounded-bl-xl"

  return (
    <div
      className={`flex items-${type === "ai" ? "start" : "end"} ${
        type === "sender" ? "justify-end" : ""
      }`}
    >
      <div
        className={`${opacity} ${baseStyles} ${
          type === "ai" ? aiStyles : senderStyles
        }`}
      >
        {children}
      </div>
    </div>
  )
}

interface MessagesListProps {
  conversationState: any[]
}

const MessagesList: React.FC<MessagesListProps> = ({ conversationState }) => {
  const conversationLength = conversationState.length
  return (
    <>
      {conversationState.map((message: any, i: number) => (
        <Message
          type={message.ai ? "ai" : "sender"}
          i={i}
          key={i}
          conversationStateLength={conversationLength}
        >
          {message.ai}
        </Message>
      ))}
    </>
  )
}

interface MessageFormProps {
  sendMessage: (message: string | undefined) => void
  messageRef: React.RefObject<HTMLInputElement>
}

const MessageForm: React.FC<MessageFormProps> = ({
  sendMessage,
  messageRef,
}) => {
  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault()
        sendMessage(messageRef.current?.value)
      }}
    >
      <input
        className="p-2 w-72 rounded-l-xl appearance-none overflow-"
        placeholder="Type a message..."
        ref={messageRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            sendMessage(messageRef.current?.value)
          }
        }}
      />
      <button type="submit" className="p-2 text-white bg-blue-500 rounded-r-xl">
        Send
      </button>
    </form>
  )
}
