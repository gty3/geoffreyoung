"use client"

import Link from "next/link"
import { compareDesc } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import Image from "next/image"
import { usePathname } from "next/navigation"

type SelectedPost = Post & { selected: boolean }

function truncateString(str: string) {
  const length = 21
  if (str.length > length) {
    return str.slice(0, length) + "..."
  } else {
    return str
  }
}

function PostCard(post: SelectedPost) {

  return (
    <div className="mb-4">
      <h2 className="flex flex-row">
        <Link
          href={post.slug}
          className={`${
            post.selected && "bg-blue-100 text-blue-800 hover:bg-blue-100"
          } flex px-3 py-2 mb-1 text-xs rounded-lg w-96 hover:bg-gray-50`}
        >
          {post.image && (
            <Image
              className="mr-2"
              src={post.image}
              width={20}
              height={20}
              alt="logo"
            />
          )}
          {truncateString(post.title)}
        </Link>
      </h2>
    </div>
  )
}

export default function Sidebar() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  // if address is same as post address, then highlight
  const pathname = usePathname()

  return (
    <div className="hidden w-48 pt-16 mr-10 -mx-20 md:block">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} selected={post.slug === pathname} />
      ))}
    </div>
  )
}
