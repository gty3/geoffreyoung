import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avoid common .riv problems",
  description: "How to render your .riv animations in React with TailwindCSS",
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="">{children}</main>
    </>
  )
}
