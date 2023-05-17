import { Instagram } from "./icons"

export default function ImGeoff() {
  return (
    <div className="flex justify-center">
      <div className="z-10 mx-auto mt-10 max-w-md px-2.5 text-center sm:max-w-2xl sm:px-0">
        {/* <a
          href="https://twitter.com/_gty__?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center py-2 mx-auto space-x-2 overflow-hidden transition-all bg-blue-100 rounded-full max-w-fit px-7 hover:bg-blue-200"
        > */}
          <Instagram className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">{"Hi, Im Geoff"}</p>
        {/* </a> */}

        <h1 className="mt-5 text-5xl font-extrabold leading-tight text-black font-display sm:text-6xl sm:leading-tight">
          Fullstack
          <br />
          <span className="text-transparent bg-gradient-to-r from-blue-800 via-pink-700 to-blue-800 bg-clip-text">
            Serverless{" "}
          </span>
          Dev
        </h1>
      </div>
    </div>
  )
}
