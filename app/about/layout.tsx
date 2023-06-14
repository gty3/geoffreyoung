
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

    <Header page="about"/>
      <div className="py-32 mx-auto ">
      <div className="z-30"></div>
        <div>{children}</div>
      </div>

    </>
  )
}
