import { TopPost } from '@/public/Types/types'
import React from 'react'

function TopPostsShowCaseCard(post: TopPost) {
  return (
   <div className='w-full flex flex-row justify-between items-center bg-[#F5F5F5] px-4 rounded-xl'>
      <div className='w-full flex flex-row justify-start items-center gap-x-[10px] py- '>
         <div className='w-[87px] h-[87px]'>
         <img src={post.thumbnail} alt="author avatar image" className='w-[87px] h-[87px] rounded-xl max-w-[87px]' />
         </div>
         <div className='w-full flex flex-col justify-center items-start gap-y-[4px]'>
            <p className='text-[#3e3232] leading-[22px] text-sm font-medium'>How to Spend the Perfect Day on Croatia’s Most Magical Island</p>
            <p className='text-[#3E3232BF] leading-[18px] text-xs font-normal'>Subhead</p>
         </div>
      </div>
    </div>
  )
}

export default TopPostsShowCaseCard