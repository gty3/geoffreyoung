import Header from "../header"
import Background from "./[...slug]/background"
import Sidebar from "./sidebar"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Background />
    <Header page="blog"/>
      <div className="flex max-w-4xl py-32 mx-auto">
        <div className="z-30"><Sidebar /></div>
        
        <div>{children}</div>
      </div>
    </>
  )
}
