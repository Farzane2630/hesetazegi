import Save from '@/public/Icons/Save'
import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";

function ProfileCard() {
   return (
      <div className='flex flex-col items-start justify-start bg-white py-3 px-8 rounded-xl fixed top-[12%] left-[75%] z-50' style={{ boxShadow: "0px 0px 32px 0px #00000012" }}>

         <div className='cursor-pointer w-full flex flex-row justify-start items-center rounded-xl gap-x-2 p-2 hovered'>
            <FaRegUser className="text-[#3E3232BF] hovered" />
            <p className='hovered text-[#3E3232BF] leading-[18px] text-xs font-normal'>
               Profile
            </p>
         </div>
         <div className='cursor-pointer w-full flex flex-row justify-start items-center rounded-xl gap-x-2 p-2'>
            <Save fill='#3E3232BF' width='1rem' height='1rem' />
            <p className='hovered text-[#3E3232BF] leading-[18px] text-xs font-normal'>
               Marked
            </p>
         </div>
         <div className='cursor-pointer w-full flex flex-row justify-start items-center rounded-xl gap-x-2 p-2'>
            <RxExit className="text-[#3E3232BF] hovered" />
            <p className='hovered text-[#3E3232BF] leading-[18px] text-xs font-normal'>
               Exit
            </p>
         </div>
      </div>
   )
}

export default ProfileCard