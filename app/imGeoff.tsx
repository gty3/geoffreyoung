"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ImGeoff() {
  const Button = () => {
    return (
      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
        <Link
          href="instagram://user?username=geoffreyoung"
          className="flex flex-row justify-center w-40 p-1 bg-gray-200 border rounded-lg shadow-sm bg-opacity-30"
        >
          <Image src="/insta.png" alt="insta" height={30} width={30} />
          <p className="text-sm font-semibold text-[#1d9bf0] mt-1.5 mx-1">
            {"Hi, Im Geoff"}
          </p>
        </Link>
      </motion.button>
    )
  }

  return (
    <div className="flex justify-center">
      <div className="z-10 mt-10">
        <div className="flex justify-center pr-2">
          <Button />
        </div>

        <h1 className="mt-5 text-5xl font-extrabold leading-tight text-black font-display sm:text-6xl sm:leading-tight">
          Fullstack Dev
        </h1>
      </div>
    </div>
  )
}
