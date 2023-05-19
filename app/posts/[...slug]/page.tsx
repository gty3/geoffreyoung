import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPosts } from "contentlayer/generated"

import { Mdx } from "../../components/mdx-components"
import Background from "@/app/components/background"

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

  return (
    <>
    {/* <Background /> */}
    <div className="flex justify-center">
    <article className="z-10 py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <div className="flex flex-row">
      <div className="px-2 py-1 -ml-2 tracking-tighter rounded-md bg-neutral-100 dark:bg-neutral-800">
        {new Date(post.date).toISOString().split('T')[0]}
      </div>
      <hr className="w-10/12 my-4 ml-2 " />
      </div>
      <Mdx code={post.body.code} />
    </article>
    </div>
    </>
  )
}
