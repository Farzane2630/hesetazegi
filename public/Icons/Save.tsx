"use client"
import React, { useState } from 'react'

function Save({ fill, height, width }: { fill?: string, height?: string, width?: string }) {
   const [isHover, setIsHover] = useState(false)
   return (
      <div
         onMouseOver={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 20}
            height={height ? height : 21}
            viewBox="0 0 20 21"
            fill="none"
         >
            <path
               className={isHover ? "hover-red" : ""}
               d="M15.625 0C16.6406 0 17.5 0.859375 17.5 1.875V18.75C17.5 19.7266 16.4453 20.3125 15.5859 19.8438L10 16.5625L4.375 19.8438C3.51562 20.3125 2.5 19.7266 2.5 18.75V1.875C2.5 0.859375 3.32031 0 4.375 0H15.625ZM15.625 17.6562V2.10938C15.625 1.99219 15.5078 1.875 15.3516 1.875H4.57031C4.45312 1.875 4.375 1.99219 4.375 2.10938V17.6562L10 14.375L15.625 17.6562Z"
               fill={fill ? fill : "#3E3232"}
            />
         </svg>
      </div>
   )
}

export default Save