
import Header from "../header"
import Background from "../posts/background"
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
      <div className="mx-auto ">
      <div className="z-30"></div>
        <div>{children}</div>
      </div>

    </>
  )
}
