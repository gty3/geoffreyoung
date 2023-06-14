
import Header from "../header"
import Background from "../posts/[...slug]/background"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Background />
    <Header page="about"/>
      <div className="flex max-w-4xl py-32 mx-auto">
        
        <div>{children}</div>
      </div>
    </>
  )
}
