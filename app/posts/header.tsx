import Link from "next/link"

export default function Header() {
  return (
    <>
      <div id="h" className="fixed z-50 w-full py-3 bg-white border-b-2 opacity-90">
        <div className="flex justify-between max-w-3xl sm:mx-auto ">
          <Link href="#h" className="mx-6 ">
            home
          </Link>
        </div>
      </div>
      <hr className="bg-black" />
    </>
  )
}