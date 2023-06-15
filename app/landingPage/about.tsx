import Images from "./about/images"

export default function About() {
  return (
    <div className="w-full h-full pt-32 backdrop-blur-none">
      <div className="z-40 flex max-w-6xl mx-auto mb-20 space-x-40">
        <div className="max-w-md pt-32">
          <div className="mb-2 text-4xl font-bold">{"Hi, I'm Geoff"}</div>
          <div className="mt-4 text-lg">
            {`I’m an American currently in Australia. 
      I've been living in various places around the States and world working as a bicycle mechanic. 
      For the past 5 years I have been devoted to becoming a proficient web developer. `}
          </div>
        </div>
        <Images />
      </div>
    </div>
  )
}
