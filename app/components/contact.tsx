"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Variants, motion } from "framer-motion"
import LoadingBalls from "./loadingBalls"

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const submitMessage = async (
  email: string | undefined,
  message: string | undefined
) => {
  if (!email || !message) {
    return false
  }
  const messageSent = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify({ email: email, message: message }),
  })
  
  return true
}

const Contact = () => {
  const [emailOpen, setEmailOpen] = useState(false)
  const [contacted, setContacted] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const clickSubmit = async () => {
    if (!emailRef.current?.value || !messageRef.current?.value) {
      return
    }
    const success = await submitMessage(
      emailRef.current.value,
      messageRef.current.value
    )

    if (success) {
      setEmailOpen(false)
      setContacted(true)
      emailRef.current.value = ""
      messageRef.current.value = ""
    }
  }
  const pressContact = () => {
    if (!emailOpen) {
      setContacted(false)
    }
    setEmailOpen(!emailOpen)
  }

  return (
    <motion.div
      initial={false}
      animate={emailOpen ? "open" : "closed"}
      className="flex justify-center mt-10 mb-32"
    >
      <div className="">
        <div className="flex flex-row justify-center">
          <Image
            className="opacity-90"
            src="/favicon.ico"
            height={60}
            width={60}
            alt="Geoff"
          />

          <div>
            <motion.button
              className="flex flex-row px-3 py-2 mx-4 mt-1.5 text-2xl font-semibold border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
              whileTap={{ scale: 0.97 }}
              onClick={pressContact}
            >
              Contact me
              <motion.div
                className="flex items-center justify-center mt-2 ml-2 align-center"
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
        {contacted && (
          <div className="flex justify-center mt-5 ml-4 text-lg backdrop-blur-none">
            Message sent
          </div>
        )}
        <motion.div
          className="m-4"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: emailOpen ? "auto" : "none" }}
        >
          <motion.div className="mt-4 mb-3" variants={itemVariants}>
            <input
              className="p-1 px-2 mt-2 rounded w-80 sm:w-[500px] bg-white/70"
              placeholder="Email address"
              ref={emailRef}
            ></input>
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              className="h-32 p-1 px-2 rounded w-80 sm:w-[500px] bg-white/70"
              placeholder="Message"
              ref={messageRef}
            ></textarea>
          </motion.div>
          <motion.button
            onClick={clickSubmit}
            className="px-3 py-2 mt-2 font-semibold border border-gray-300 rounded-lg bg-white/20"
            variants={itemVariants}
            whileTap={{ scale: 0.97 }}
          >
            Submit
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
