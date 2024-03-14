"use client"
import React, { useState } from 'react'

function Share({ fill }: { fill?: string }) {
   const [isHover, setIsHover] = useState(false)
   return (
      <div
         onMouseOver={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
         >
            <path
               className={isHover ? "hover-red" : ""}
               d="M14.6992 0.886719C14.918 1.02344 15.0273 1.26953 14.9453 1.51562L13.1953 13.3281C13.168 13.5195 13.0586 13.7109 12.8672 13.793C12.7852 13.8477 12.6758 13.9023 12.5664 13.9023C12.457 13.9023 12.375 13.875 12.293 13.8477L9.61328 12.6992L6.57812 14.668C6.46875 14.7227 6.33203 14.75 6.22266 14.75C6.14062 14.75 6.03125 14.7227 5.92188 14.6953C5.70312 14.5586 5.59375 14.3398 5.59375 14.0938V11.0039L1.38281 9.25391C1.16406 9.14453 1 8.92578 1 8.67969C0.972656 8.43359 1.10938 8.1875 1.32812 8.07812L14.0156 0.859375C14.2344 0.722656 14.5078 0.75 14.6992 0.886719ZM11.0898 4.03125L3.13281 8.54297L5.97656 9.74609L11.0898 4.03125ZM6.87891 12.8906L8.13672 12.0977L6.87891 11.5508V12.8906ZM12.0469 12.2891L13.3594 3.45703L7.23438 10.2656L12.0469 12.2891Z"
               fill={fill ? fill : "#3E3232"}
               fillOpacity={0.5}
            />
         </svg>
      </div>
   )
}

export default Share