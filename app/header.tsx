import Image from "next/image"
import Link from "next/link"
import ChatBubble from "./favicon.ico"

export default function Header() {
  return (
    <div className="fixed z-50 flex justify-center w-full pt-6 pb-2 bg-white opacity-90">
      <div className="flex justify-between max-w-xl mx-auto">
        <Link href="/" className="">
          <Image className="" src={ChatBubble} width={20} alt="logo" />
        </Link>

        <div className="space-x-8 text-end">
          <Link
            href="/posts/Fix-nextjslink-not-scrolling-to-top"
            className="px-3 py-2 mb-1 rounded-lg hover:bg-blue-50 focus:bg-blue-100"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 mb-1 rounded-lg hover:bg-blue-50 focus:bg-blue-100"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  )
}
