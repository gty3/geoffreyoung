import Header from "../../header"
import Background from "../background"
import Sidebar from "../sidebar"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="py-12 sm:py-32 sm:flex sm:mx-auto sm:max-w-4xl">
        <div className="z-30">
          <Sidebar />
        </div>

        <div>{children}</div>
      </div>
    </>
  )
}
