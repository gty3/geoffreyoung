import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPosts } from "contentlayer/generated"
import { format } from "date-fns"
import { Mdx } from "../../components/mdx-components"
import Background from "../background"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const date = format(new Date(post.date), "yyyy-M-dd")

  return (
    <div id={post._id}>
    <div className="z-30 px-4 mx-auto mb-40 backdrop-blur-sm">
    <article className="py-6 prose ">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-xl text-slate-700 ">
          {post.description}
        </p>
      )}
      <div className="flex flex-row pb-12 mt-4">
      <div className="px-2 py-1 tracking-tighter rounded-md -pl-2 bg-neutral-100 ">
        {date}
      </div>
      <hr className="w-8/12 my-4 ml-2 sm:w-10/12 " />
      </div>
      <Mdx code={post.body.code} />
    </article>
    </div>
    </div>
  )
}
