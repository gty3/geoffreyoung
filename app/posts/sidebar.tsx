"use client"

import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import Header from "../header"
import TextTruncate from "react-text-truncate"
import Image from "next/image"

function PostCard(post: Post) {
  return (
    <div className="mb-4">
      <h2 className="flex flex-row">
        <Link
          href={post.slug}
          className="flex px-3 py-2 mb-1 text-xs rounded-lg w-[48rem] hover:bg-blue-50 focus:bg-blue-100"
        >
          {post.image && <Image className="mr-2" src={post.image} width={20} height={20} alt="logo" />}
          <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={post.title}
          />
        </Link>
        
      </h2>
    </div>
  )
}

export default function Sidebar() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="w-48 pt-16 mr-10 -mx-20">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
