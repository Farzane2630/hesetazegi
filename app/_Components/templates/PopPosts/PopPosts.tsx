"use client"
import ArrowLeft from '@/public/Icons/ArrowLeft'
import ArrowRight from '@/public/Icons/ArrowRight'
import ArticleCard from '../../modules/ArticleCard/ArticleCard'
import { Post } from '@/public/Types/types'
import CustomCardHeader from '../../modules/CustomElements/CustomCardHeader'

function PopPosts({ posts }: { posts: Post[] }) {
   return (
      <div className='flex flex-col justify-start items-start gap-y-8'>
         {/* heading */}
         <div className="w-full h-[40px] flex flex-row justify-between items-start">
            {/* title */}
            <CustomCardHeader title="Popular Posts" />
            <div className='h-full flex flex-row items-center justify-end gap-x-[20px]'>
               <button className='h-[40px] w-[40px] flex justify-center items-center rounded rounded-solid rounded-[#E6E6E6] rounded-xl bg-[#F5F5F5]'>
                  <ArrowLeft fillOpacity='0.5' />
               </button>
               <button className='h-[40px] w-[40px] flex justify-center items-center rounded rounded-solid rounded-[#E6E6E6] rounded-xl bg-[#F5F5F5]'>
                  <ArrowRight />
               </button>
            </div>
         </div>
         {/* contents */}

         <div className="w-full h-full grid grid-cols-4 grid-rows-1 justify-between gap-x-3">
            {
               posts.map((post: Post) => (
                  <ArticleCard
                     key={post.id}
                     {...post}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default PopPosts