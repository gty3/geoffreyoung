import Link from "next/link"

export default function Header() {
  return (
    <>
      <div id="h" className="fixed z-50 w-full py-3 bg-white opacity-95">
        <div className="flex justify-between max-w-6xl sm:mx-auto ">
          <Link href="#h" className="mx-6 mb-2">
            home
          </Link>
        </div>
        <hr />
      </div>
      <hr className="bg-black" />
    </>
  )
}