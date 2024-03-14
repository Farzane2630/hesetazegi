import BlogLayout from '@/app/_Components/modules/SingleArticle/BlogLayout'
import React from 'react'

async function page({ params }: {
  params: { id: string }
}) {

  const res = await fetch(`http://localhost:4000/pop-posts/${params.id}`)
  const data = await res.json()

  const res1 = await fetch(`http://localhost:4000/tags`)
  const tags = await res1.json()

  const res2 = await fetch(`http://localhost:4000/topPosts`)
  const posts = await res2.json()

  const res3 = await fetch(`http://localhost:4000/ads`)
  const ads = await res3.json()

  return (
    <BlogLayout blog={data} tags={tags} posts={posts} ads={ads} />
  )
}

export default page;