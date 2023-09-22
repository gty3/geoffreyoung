import Header from "./header"
import Background from "./background"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Background />
      <Header />
      <div>{children}</div>
    </>
  )
}
