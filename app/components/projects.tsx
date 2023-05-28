"use client"

import { Github } from "./icons"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import projectslist from "@/lib/projects"
import { motion } from "framer-motion"

interface CardProps {
  url?: string
  name: string
  description: string
  github: string
  image: string
  builtWith: string
}

export default function Projects() {
  const router = useRouter()
  const Card = ({
    name,
    description,
    github,
    image,
    url,
    builtWith,
  }: CardProps) => {
    const GithubButton = () => {
      return (
        <Link
          className="flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg hover:border-gray-800"
          href={github}
          target="_blank"
          // rel="noreferrer"
        >
          <Github className="w-5 h-5 text-black" />
          <p className="text-sm">GitHub</p>
        </Link>
      )
    }

    return (
      <motion.div
        whileHover={url && { scale: 1.01 }}
        whileTap={url && { scale: 0.96 }}
        className={
          url
            ? "p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
            : "p-4 /*  */sm:p-6 border border-gray-300 rounded-lg break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
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
            <GithubButton />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <div className="z-10 mt-5 text-4xl font-extrabold leading-tight text-black font-display sm:text-5xl sm:leading-tight">
          Projects
        </div>
      </div>

      <div className="max-w-6xl py-8 mx-4 space-y-6 sm:columns-2 sm:gap-6 xl:columns-3">
        {projectslist.map((project, idx) => (
          <Card key={idx} {...project} />
        ))}
      </div>
    </div>
  )
}
