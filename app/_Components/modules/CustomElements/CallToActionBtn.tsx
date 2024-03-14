import React, { ReactNode } from 'react'

function CallToActionBtn({ icon, title }: { icon: ReactNode, title: string }) {
   return (
      <button className='w-full flex flex-row justify-center items-center rounded-xl bg-[#F5F5F5] gap-x-2 p-[10px]'>
         {icon}
         <p>
            {title}
         </p>
      </button>

   )
}
export default CallToActionBtn