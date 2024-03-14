"use client"
import React from 'react'
// @ts-ignore
import EllipsisText from "react-ellipsis-text";

function ArticleShowCaseCard({ background, title, descriptions }: { background: string, title: string, descriptions: string }) {
   return (
      <div className='w-full h-full flex flex-col justify-end object-contain rounded-xl p-2' style={{ backgroundImage: `url(${background})`, backgroundSize: "contain" }}>
         <div className="w-full flex flex-col justify-end items-end  rounded-xl bg-[#FFFFFFBF]">
            <h3 className='text-black text-normal text-[25px] leading-[29.3px] p-4'>{title}</h3>
            <p className='text-[#000000BF] text-normal text-sm leading-5 p-4 pt-0'>
               <EllipsisText text={descriptions} length={"85"} />
            </p>
         </div>
      </div>
   )
}

export default ArticleShowCaseCard