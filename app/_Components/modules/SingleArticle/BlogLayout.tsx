import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import { Post, TopPost } from '@/public/Types/types'
import ArrowRight from '@/public/Icons/ArrowRight'
import MainContent from './MainContent'

function BlogLayout({blog, tags, posts, ads}: {blog:Post, tags:{id:string, title: string}[], posts: TopPost[],  ads:{id: string, bg: string}[]}) {
   return (
      <div className='w-full flex flex-col gap-y-8'>

         <div className='w-full flex flex-row gap-x-2'>
            <Link className='text-normal text-xs leading-[14.06px] text-[#3e3232]' href="/">Home</Link>
            <ArrowRight fillOpacity='0.5' />
            <Link className='text-normal text-xs leading-[14.06px] text-[#3e3232]' href="/">Featured</Link>
            <ArrowRight fillOpacity='0.5' />
            <Link className='text-normal text-xs leading-[14.06px] text-[#3E323280]' href={`/blog/${blog.id}`}>{blog.title}</Link>
         </div>

         <div className='flex flex-row'>
            <main>
               <MainContent article={blog} />
            </main>
            <Sidebar blog={blog} tags={tags} posts={posts} ads={ads} />

         </div>
      </div>
   )
}

export default BlogLayout