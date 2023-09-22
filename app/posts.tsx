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
        <div className="p-4 border-t-2 border-gray-300 cursor-pointer break-inside-avoid bg-clip-padding hover:bg-white/20 focus:bg-white/20 hover:backdrop-blur-lg focus:backdrop-blur-lg backdrop-blur-none backdrop-filter">
          <div className="grid justify-start grid-flow-col">
            <div className="">{new Date(post.date).getFullYear()}</div>
            <div className="ml-4 ">
              <h2 className="text-lg ">{post.title}</h2>
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
    <div className="max-w-xl pb-12 mx-auto -mt-12">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
