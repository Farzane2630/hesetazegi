import React from 'react'
import InfoCard from './InfoCard'
// @ts-ignore
import EllipsisText from "react-ellipsis-text";
import Link from 'next/link';
import { Post } from '@/public/Types/types';

function ArticleCard(data: Post) {
  return (
    <div className='w-full flex flex-col items-start justify-start bg-white p-[10px] rounded-xl' style={{ boxShadow: "0px 0px 32px 0px #00000012" }}>
      <Link href={`blog/${data.id}`}>
      <img src={data.thumbnail} alt="" className="h-[190px] w-full rounded-xl" />

      <div>
        <h5 className="text-[#3e3232] text-medium text-base leading-[18.75px] p-4" >{data.title}</h5>
        <p className="text-[#3E3232BF] text-sm text-normal leading-[20px] p-4 pt-0">
          <EllipsisText text={data.description && data.description} length={85} />
        </p></div>

      <InfoCard author={data.authorName} date={data.date} avatar={data.authorPic} />
      </Link>
    </div>
  )
}

export default ArticleCard