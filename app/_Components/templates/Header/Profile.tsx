"use client"
import ArrowDown from '@/public/Icons/ArrowDown'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

function Profile({ username, avatar }: { username: string, avatar?: string }) {
   const [isHover, setIsHover] = useState(false);

   return (
      <div
         onMouseMove={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}>
         <div
            className="h-full flex flex-row justify-between items-center gap-x-2 relative">
            <img src={avatar} alt="avatar pic" className='w-[48px] h-[48px] rounded-xl' />
            <p className='text-black text-base font-medium leading-[18.75px]'>{username}</p>
            <ArrowDown className={isHover ? "rotate" : ""} />
         </div>
         {
            isHover ? (
               <ProfileCard />
            ) : null
         }
      </div>

   )
}

export default Profile