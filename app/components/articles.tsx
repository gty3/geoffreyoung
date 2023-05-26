"use client"
import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import { motion } from "framer-motion"
import Image from "next/image"

function PostCard(post: Post) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.96 }}
      key={post._id}
    >
      <Link href={post.slug}>
        <div className="p-4 m-4 border border-gray-300 rounded-lg cursor-pointer break-inside-avoid bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter">
          <div className="grid justify-start grid-flow-col">
            {post.image && (
              <Image
                src={post.image}
                height={100}
                width={100}
                alt={post.image}
              />
            )}
            <div className="ml-4 ">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <div className="pt-1 text-xs sm:text-sm">
                {new Date(post.date).toISOString().split("T")[0]}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {post.description && <p>{post.description}</p>}
    </motion.div>
  )
}

export default function Articles() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-xl py-8 mx-auto ">
      <h1 className="mb-8 text-4xl font-extrabold text-center backdrop-blur-lg sm:text-5xl">
        Articles
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
