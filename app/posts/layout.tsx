import Header from "../header"
import Background from "./background"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Background />
    <Header page="blog"/>
        
        <div>{children}</div>
    </>
  )
}
