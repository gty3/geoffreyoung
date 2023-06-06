"use client"

import { Github } from "./icons"
import Image from "next/image"
import projectslist from "@/lib/projects"
import { motion } from "framer-motion"
import { BaseSyntheticEvent } from "react"

interface CardProps {
  url?: string
  name: string
  description: string
  github: string
  image: string
  builtWith: string
}

export default function Projects() {
  return (
    <div>
      <div className="pt-8 text-4xl font-extrabold leading-tight text-center text-black backdrop-blur-none font-display sm:text-5xl sm:leading-tight">
        Projects
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-6xl py-8 mx-4 space-y-6 sm:columns-2 sm:gap-6 xl:columns-3">
          {projectslist.map((project, idx) => (
            <Card key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Card = ({
  name,
  description,
  github,
  image,
  url,
  builtWith,
}: CardProps) => {


  return (
    <motion.div
      whileHover={url && { scale: 1.01 }}
      whileTap={url && { scale: 0.96 }}
      className={
        url
          ? "p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
          : "p-4 sm:p-6 border border-gray-300 rounded-lg break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
      }
    >
      <div onClick={() => url && window.open(url)}>
        <div className="flex">
          <Image alt={image} width={100} height={100} src={image}></Image>
          <div className="flex flex-col pl-4">
            <div className="text-2xl font-extrabold">{name}</div>
            <div className="font-medium ">{description}</div>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="my-1">{builtWith}</div>
          <GithubButton github={github} />
        </div>
      </div>
    </motion.div>
  )
}

const GithubButton = ({ github }: { github: string }) => {
  const openGithub = (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    window.open(github)
  }
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      onClick={(e) => openGithub(e)}
      className="z-30 flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg cursor-pointer hover:border-gray-800"
    >
      <Github className="w-5 h-5 text-black" />
      <p className="text-sm">GitHub</p>
    </motion.div>
  )
}
