import Calendar from '@/public/Icons/Calendar'
import Category from '@/public/Icons/Category'
import Comment from '@/public/Icons/Comment'
import { Post } from '@/public/Types/types'
import React from 'react'

function MainContent({ article }: { article: Post }) {
   return (
      <div className='w-full p-8 pt-0 flex flex-col gap-y-4 justify-start items-start '>
         <div className='w-full flex flex-col bg-[#F5F5F5] rounded-xl gap-y-4 p-4 max-h-[500px] mb-[120px]'>
            <h1 className="text-black text-4xl text-normal leading-[42.19px]">
               {article.title}
            </h1>
            <img src={article.thumbnail} alt="" className='rounded-xl bg-cover w-full h-[486px]' />
         </div>
         <div className="w-full flex flex-row justify-center items-center gap-x-10">
            <div className='flex flex-row justify-center items-center gap-x-2'>
               <Calendar />
               <p className='text-[#3E3232BF] leading-[20px] text-medium text-sm '>
                  {article.date}
               </p>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2'>
               <Comment />
               <p className='text-[#3E3232BF] leading-[20px] text-medium text-sm '>
                  Comments: {article.comments}
               </p>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2'>
               <Category />
               <p className='text-[#3E3232BF] leading-[20px] text-medium text-sm '>
                  Category: {article.category}
               </p>
            </div>
         </div>
         <h4 className="text-[#3E3232] text-xl text-medium leading-[23.44px]">
            {article.content.heading1}
         </h4>
         <p className="text-[#3E3232] text-lg text-normal leading-[34px]">
            {article.content.paragraph1}

         </p>
         <div className="w-full flex justify-center items-center">
            <img src={article.images.src} alt="" className='rounded-xl bg-cover w-[85%] h-[486px]' />
         </div>
         <h4 className="text-[#3E3232] text-xl text-medium leading-[23.44px]">
            {article.content.heading2}
         </h4>
         <p className="text-[#3E3232] text-lg text-normal leading-[34px]">
            {article.content.paragraph2}

         </p>
      </div>
   )
}

export default MainContent