"use client"
import Link from "next/link"
import { compareDesc } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"

function PostCard(post: Post) {
  return (
    <div
    >
      <Link href={post.slug + "/#"}>
        {/* <br className="bg-black" /> */}
        <div className="p-4 bg-clip-padding border-t-2 border-gray-300 backdrop-filter backdrop-blur-none cursor-pointer break-inside-avoid hover:bg-white/20 focus:bg-white/20 hover:backdrop-blur-lg focus:backdrop-blur-lg">
          <div className="grid grid-flow-col justify-start">
            <div className="">{new Date(post.date).getFullYear()}</div>
            <div className="ml-4">
              <h2 className="text-lg">{post.title}</h2>
            </div>
          </div>
        </div>
      </Link>

      {post.description && <p>{post.description}</p>}
    </div>
  )
}

export default function Articles() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="pb-12 mx-auto mt-24 max-w-xl sm:mt-44">
            <Link href={"/posts/rive-react"}>
        {/* <br className="bg-black" /> */}
        <div className="p-4 bg-clip-padding border-t-2 border-gray-300 backdrop-filter backdrop-blur-none cursor-pointer break-inside-avoid hover:bg-white/20 focus:bg-white/20 hover:backdrop-blur-lg focus:backdrop-blur-lg">
          <div className="grid grid-flow-col justify-start">
            <div className="">{2023}</div>
            <div className="ml-4">
              <h2 className="text-lg">Getting started with Rive and React</h2>
            </div>
          </div>
        </div>
      </Link>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
