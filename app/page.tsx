"use client"

import Background from "./components/background"
import Projects from "./landingPage/projects"
import Articles from "./components/articles"
import Contact from "./landingPage/contact"
import Header from "./header"
import About from "./landingPage/about"
import Reviews from "./landingPage/reviews"
import Development from "./landingPage/development"

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      
        <About />
        <Reviews />
        <Development />
      <Projects />
      <div className="py-6 text-6xl font-bold text-center backdrop-blur-none">
        Articles
      </div>
      <Articles />
      <Contact />
    </>
  )
}
