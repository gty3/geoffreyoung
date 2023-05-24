"use client"

import Background from './components/background'
import ImGeoff from './imGeoff'
import Projects from './components/projects'
import World from './components/world'
import Image from 'next/image'
import Articles from './components/articles'

export default function Home() {
  return (
    <>
    <Background />
      
      <div className="">
      <ImGeoff />
      <div className="z-0 sm:-my-24 -my-10 sm:h-[700px] h-[480px]">
        <World />
      </div>
      <div className="">
      <Projects />
      </div>
      <div className="z-10">
      <Articles />
      </div>
      </div>
    </>
  )
}
