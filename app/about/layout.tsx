
import Header from "../header"
import Background from "../posts/[...slug]/background"
import Sidebar from "../posts/sidebar"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* <Background /> */}
    <div className="sm:-ml-2">
    <Header page="about"/>
      <div className="flex max-w-4xl py-32 mx-auto ">
      <div className="z-30"></div>
        <div>{children}</div>
      </div>
      </div>
    </>
  )
}
