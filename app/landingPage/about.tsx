import Images from "./about/images"

export default function About() {
  // var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-" //You can customize what letters it will cycle through
  // var ctnt = "Miklihvellur" // Your text goes here
  // var speed = 50 // ms per frame
  // var increment = 8 // frames per step. Must be >2

  // var clen = ctnt.length
  // var si = 0
  // var stri = 0
  // var block = ""
  // var fixed = ""
  // //Call self x times, whole function wrapped in setTimeout
  // ;(function rustle(i) {
  //   setTimeout(function () {
  //     if (--i) {
  //       rustle(i)
  //     }
  //     nextFrame(i)
  //     si = si + 1
  //   }, speed)
  // })(clen * increment + 1)
  // function nextFrame(pos) {
  //   for (var i = 0; i < clen - stri; i++) {
  //     //Random number
  //     var num = Math.floor(theLetters.length * Math.random())
  //     //Get random letter
  //     var letter = theLetters.charAt(num)
  //     block = block + letter
  //   }
  //   if (si == increment - 1) {
  //     stri++
  //   }
  //   if (si == increment) {
  //     // Add a letter;
  //     // every speed*10 ms
  //     fixed = fixed + ctnt.charAt(stri - 1)
  //     si = 0
  //   }
  // }

  // const hobbies = [
  //   "Mountain biker",
  //   "Highliner",
  //   "Freediver",
  //   "Mountain biker",
  //   "Mountain biker",
  //   "Paddleboarder",
  //   "Skier",
  // ]

  return (
    <div className="px-4 pt-20 sm:pt-32 backdrop-blur-none">
      <div className="justify-between max-w-6xl mx-auto sm:flex md:space-x-20">
        <div className="max-w-md">
          <div className="pb-6 text-6xl font-bold sm:pb-12 sm:pt-12">
            {"Hi, I'm Geoff"}
          </div>
          <div className="pb-6 text-lg font-semibold sm:text-2xl">
            American currently in Australia
          </div>
          {/* <div className="pb-6 text-lg font-semibold sm:text-2xl">
            Mountain biker
          </div> */}
          {/* <div className="pb-6 text-lg sm:text-xl">Currently in Australia</div> */}
          <div className="pb-6 text-lg font-semibold sm:text-2xl">
            Web developer for 5+ years
          </div>
        </div>
        <Images />
      </div>
    </div>
  )
}
