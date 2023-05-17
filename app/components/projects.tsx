"use client"
import Tilt from "react-parallax-tilt"
import { Github } from "./icons"

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <div className="z-10 mt-5 text-4xl font-extrabold leading-tight text-black font-display sm:text-5xl sm:leading-tight">
          Projects
        </div>
      </div>

      <div className="max-w-6xl py-8 mx-2 space-y-6 sm:columns-2 sm:gap-6 xl:columns-3">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="8px"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          // className={className}
        >
          {" "}
          <div
            
            className="p-6 pb-4 border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter"
          >
            <a href="https://trailguesser.com" target="_blank">
            <div className="z-10 flex flex-col">
              <img width={200} src="/trailguesser.png"></img>
              <div className="text-2xl font-extrabold">Trail Guesser</div>
              <div>Mountain bike trail guessing game</div>
              <div>
                Built with Vite, SST with AWS CDK, AWS Serverless Image Handler
              </div>
              <a
                className="flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg hover:border-gray-800"
                href="https://github.com/gty3/trailguesser"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5 text-black" />
                <p className="text-sm">GitHub</p>
              </a>
            </div>
            </a>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="8px"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          // className={className}
        >
          {" "}
          <div className="p-6 pb-4 border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter">
            <a href="https://timebar.me" target="_blank">
            <div className="z-10 flex flex-col">
              <img width={200} src="/buildInpublicpagescreenshot.png"></img>
              <div className="text-2xl font-extrabold">Time Bar</div>
              <div>Habit tracking app</div>
              <div>Built with Nextjs, SST with AWS CDK</div>
              <a
                className="flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg hover:border-gray-800"
                href="https://github.com/gty3/timebar"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5 text-black" />
                <p className="text-sm">GitHub</p>
              </a>
            </div>
            </a>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="8px"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          // className={className}
        >
          {" "}
          <div className="p-6 pb-4 border border-gray-300 rounded-lg break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter">
            <div className="z-10 flex flex-col">
              <img width={200} src="/gtyusa-min.png"></img>
              <div className="text-2xl font-extrabold">GTYUSA</div>
              <div>Personal page</div>
              <div>Built with Vite, SST, react-globe.gl</div>
              <a
                className="flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg hover:border-gray-800"
                href="https://github.com/gty3/gtyusa"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5 text-black" />
                <p className="text-sm">GitHub</p>
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="8px"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          // className={className}
        >
          {" "}
          <div className="p-6 pb-4 border border-gray-300 rounded-lg break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter">
            <div className="z-10 flex flex-col">
              <img width={100} src="/treeFavicon.svg"></img>
              <div className="text-2xl font-extrabold">Note Tree</div>
              <div>On demand consulting web app</div>
              <div>
                Built with Nextjs, Next-pwa with push notifications, Serverless
                Framework, Vonage communication API, and Stripe
              </div>
              <a
                className="flex items-center justify-center w-40 px-5 py-2 space-x-2 transition-all bg-white border border-gray-300 rounded-full shadow-lg hover:border-gray-800"
                href="https://github.com/gty3/notetree"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5 text-black" />
                <p className="text-sm">GitHub</p>
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}
