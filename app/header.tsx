import Image from "next/image"
import Link from "next/link"
import ChatBubble from "./favicon.ico"


export default function Header({ page }: { page?: "blog" | "about" }) {
  return (
    <>
      <div className="fixed z-50 w-full pt-3 bg-white p opacity-95">
        <div className="flex justify-between max-w-2xl pl-8 mx-auto">
          <Link href="/" className="">
            <Image className="pt-1" src={ChatBubble} width={22} alt="logo" />
          </Link>
          <div className="pb-3 space-x-8 text-end">
            <Link
              href="/posts/Fix-nextjslink-not-scrolling-to-top"
              className=""
            >
              <NavButton selected={page === "blog"}>Blog</NavButton>
            </Link>

            <Link href="/about" className="">
              <NavButton selected={page === "about"}>About</NavButton>
            </Link>
          </div>
        </div>
        <hr/>
      </div>
      <hr className="bg-black"/>
    </>
  )
}

function NavButton({
  selected,
  children,
}: {
  selected?: boolean
  children: JSX.Element | string
}) {
  const isSelected =
    "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"

  return (
    <button
      className={`${
        selected && isSelected
      } px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm font-semibold`}
    >
      {children}
    </button>
  )
}
