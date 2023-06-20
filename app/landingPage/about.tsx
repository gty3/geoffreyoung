import Images from "./about/images"

export default function About() {
  return (
    <div className="px-4 pt-20 sm:pt-32 backdrop-blur-none">
      <div className="justify-between max-w-6xl mx-auto sm:flex md:space-x-20 ">
        <div className="max-w-md">
          <div className="pb-6 text-6xl font-bold sm:pb-12 sm:pt-12">{"Hi, I'm Geoff"}</div>
          <div className="pb-6 text-lg sm:text-xl">
            {`I’m an American currently in Australia. 
      I've been living in various places around the world working as a bicycle mechanic. 
      For the past 5 years I've been devoted to becoming a proficient web developer. `}
          </div>
        </div>
        <Images />
      </div>
    </div>
  )
}
