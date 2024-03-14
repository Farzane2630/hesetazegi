"use client"
import React, { useState } from 'react'

function ArrowRight({ fillOpacity }: { fillOpacity?: string }) {
   const [isHover, setIsHover] = useState(false)
   return (
      <div
         onMouseOver={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={13}
            viewBox="0 0 9 13"
            fill="none"
         >
            <path
               className={!fillOpacity && isHover ? "hover-red" : ""}
               d="M2 13C1.71875 13 1.46875 12.9062 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.5 12.9062 2.25 13 2 13Z"
               fill="#3E3232"
               //   fillOpacity={0.5}
               fillOpacity={fillOpacity ? fillOpacity : ""}
            />
         </svg>
      </div>
   )
}

export default ArrowRight