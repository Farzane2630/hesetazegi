import React from 'react'
import CallToActionBtn from '../CustomElements/CallToActionBtn'
import Save from '@/public/Icons/Save'
import Comment from '@/public/Icons/Comment'
import Share from '@/public/Icons/Share'
import CustomBgCard from '../CustomElements/CustomBgCard'
import { Post, TopPost } from '@/public/Types/types'
import Plus from '@/public/Icons/Plus'
import CustomCardHeader from '../CustomElements/CustomCardHeader'
import TopPostsShowCaseCard from './TopPostsShowCaseCard'
import AdsCard from './AdsCard'

function Sidebar({blog, tags, posts, ads}: {blog:Post, tags:{id:string, title: string}[], posts: TopPost[], ads:{id: string, bg: string}[]}) {
  return (
    <div className='w-full flex flex-col justify-start items-center gap-y-3'>
      <div className='w-full flex flex-row justify-between items-center gap-x-2'>
        <CallToActionBtn icon={<Share />} title='Share' />
        <CallToActionBtn icon={<Save width='16' height='16' fill='#3E323280' />} title='Marking' />
        <CallToActionBtn icon={<Comment />} title='Comment' />
      </div>
      <CustomBgCard styles='flex-col justify-between items-center'
        children={
          <div className='w-full flex flex-row justify-start items-center gap-x-[10px] '>
            <img src={blog?.authorPic} alt="author avatar image" className='h-[87px] w-[87px] rounded-xl ' />
            <div className='w-full flex flex-col justify-center items-start gap-y-[4px]'>
              <h5 className='text-[#3e3232] leading-[18.75px] text-base font-medium p-2'>{blog?.authorName}</h5>
              <button className='flex flex-row items-center justify-center gap-x-2 bg-[#F81539BF] rounded-xl px-4 py-2'>
                <Plus />
                <p className='text-white leading-[20px] text-sm font-medium'>follow</p>
              </button>
            </div>
            <p className='text-xs text-normal leading-[18px] text-[#3E3232BF]'>
              {blog?.authorPosts} posts
            </p>
          </div>
        }
      />

      <CustomBgCard
        styles="flex-col gap-y-4"
        children={
          <>
          <CustomCardHeader title='Tags' />
          <div className='w-full flex flex-row justify-start flex-wrap items-start gap-x-2'>
          {
            tags?.map(tag=>(
              <p key={tag.id} className='cursor-pointer text-xs text-normal leading-[18px] text-[#3E3232BF]'>
              {tag.title}
            </p>
            ))
          }
            </div>
          </>
        } />

      <CustomBgCard
        styles="flex-col gap-y-4"
        children={
          <>
          <CustomCardHeader title='Top Posts' />
          {
            posts.map(post =>(
              <TopPostsShowCaseCard key={post.id} {...post}/>
            ))
          }
          </>
        } />

      {ads.map(ad=>(
        <AdsCard key={ad.id} bg={ad.bg} id={ad.id}/>
      ))}
    </div>
  )
}

export default Sidebar