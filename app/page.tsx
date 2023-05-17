import Background from './components/background'
import ImGeoff from './components/imGeoff'
import Projects from './components/projects'
import World from './components/world'
import Image from 'next/image'
import Articles from './components/articles'

export default function Home() {
  return (
    <>
      <Background />
      <ImGeoff />
      <div className="z-0 -my-24">
        {/* <World /> */}
      </div>
      <div className="">
      <Projects />
      </div>
      <Articles />
    </>
  )
}
