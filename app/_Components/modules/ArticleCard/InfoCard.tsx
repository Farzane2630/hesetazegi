import Save from '@/public/Icons/Save'
import React from 'react'

function InfoCard({author, date, avatar}: {author: string, date: string, avatar: string}) {
  return (
    <div className='w-full h-[72px] flex flex-row justify-between items-center bg-[#F5F5F5] px-4 py-[13px] rounded-xl'>
      <div className='w-full flex flex-row justify-start items-center gap-x-[10px] '>
         <img src={avatar} alt="author avatar image" className='h-[44px] w-[44px] rounded-xl ' />
         <div className='w-full flex flex-col justify-center items-start gap-y-[4px]'>
            <p className='text-[#3e3232] leading-[22px] text-sm font-medium'>{author}</p>
            <p className='text-[#3E3232BF] leading-[18px] text-xs font-normal'>{date}</p>
         </div>
      </div>
      <Save fill="#3E323280" />
    </div>
  )
}

export default InfoCard