"use client"

import Background from "./components/background"
import Projects from "./landingPage/projects"
import Articles from "./components/articles"
import Contact from "./landingPage/contact"
import Header from "./header"
import About from "./landingPage/about"
import Reviews from "./landingPage/reviews"
import Development from "./landingPage/development"
import { StrictMode } from "react"

export default function Home() {
  return (
    <StrictMode>
      <Background />
      <Header />
      <About />
      <Reviews />
      <Development />
      <Projects />
      <div className="py-6 pt-12 text-4xl font-extrabold text-center sm:text-5xl backdrop-blur-none">
        Articles
      </div>
      <Articles />
      <Contact />
    </StrictMode>
  )
}
