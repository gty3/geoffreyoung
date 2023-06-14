"use client"

import Background from "./components/background"
import ImGeoff from "./imGeoff"
import Projects from "./components/projects"
import World from "./components/world"
import Articles from "./components/articles"
import Contact from "./components/contact"
import Header from "./header"

export default function Home() {
  return (
    <>
      <Background />
      <Header/>
      <ImGeoff />
      <World />
      <Projects />
      <Articles />
      <Contact />
    </>
  )
}
