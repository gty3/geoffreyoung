"use client"

import Link from "next/link"
import { compareDesc } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Articles from "../components/articles"

type SelectedPost = Post & { selected: boolean }


export default function PostCard(post: SelectedPost) {

  const selected = "bg-blue-100 text-blue-800 hover:bg-blue-100"
  const notSelected = "hover:bg-gray-50"

  return (
    <div className="pt-20">
    <Articles />
    </div>
    // <div className="mb-4 ">
    //   <h2 className="flex flex-row">
    //     <Link
    //       href={post.slug}
    //       className={`${
    //         post.selected ? selected : notSelected
    //       } flex px-3 py-2 mb-1 text-xs rounded-lg w-96`}
    //     >
    //       {post.image && (
    //         <Image
    //           className="mr-2"
    //           src={post.image}
    //           width={20}
    //           height={20}
    //           alt="logo"
    //         />
    //       )}
    //       {post.title}
    //     </Link>
    //   </h2>
    // </div>
  )
}

// export default function Sidebar() {
//   const posts = allPosts.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   )

//   // if address is same as post address, then highlight
//   const pathname = usePathname()

//   return (
//     <div className="pt-20 backdrop-blur-none">
//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} selected={post.slug === pathname} />
//       ))}
//     </div>
//   )
// }
