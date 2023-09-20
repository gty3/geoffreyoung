"use client"

import { useState } from "react"

export default function ChatGPT() {
  const [chatState, setChatState] = useState({
    messages: []
  })

  return (
    <>

        {/* <TypingAnimation /> */}

    
    <div className="min-h-screen p-4 backdrop-blur-none">
  <div className="max-w-md mx-auto ">
    <div className="flex flex-col space-y-4">
    <AiMessage>Hi, I'm Geoff's AI assistant</AiMessage>
      <div className="flex items-end">
        <div className="px-4 py-2 text-black bg-gray-300 rounded-br-xl rounded-t-xl">
        I'm here to answer any questions you might have
        </div>
      </div>
    <SenderMessage> Cool, I just found this site from reddit and am checking things out</SenderMessage>

    </div>
    <div className="flex mt-4">
      <input className="flex-1 p-2 rounded-l-xl" placeholder="Type a message..." />
      <button className="p-2 text-white bg-blue-500 rounded-r-xl">Send</button>
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
    { children }
    </div>
  </div>
  )
}
const SenderMessage = ({ children }: any) => {
  return (
    <div className="flex items-end justify-end ">
    <div className="max-w-sm px-4 py-2 text-white bg-blue-500 rounded-bl-xl rounded-t-xl">
      { children }
    </div>
  </div>
  )
}

const TypingAnimation = () => {
  return (
    <div className="flex justify-around w-24 p-3.5 bg-gray-200 rounded-full">
      <div className="w-3.5 h-3.5 bg-gray-300 rounded-full"></div>
      <div className="w-3.5 h-3.5 bg-gray-300 rounded-full"></div>
      <div className="w-3.5 h-3.5 bg-gray-300 rounded-full"></div>
    </div>
  )
}
