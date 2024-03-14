import React, { ReactNode } from 'react'

function CustomBgCard({ children, styles }: { children: ReactNode, styles: string }) {
   return (
      <div className={`w-full flex rounded-xl bg-[#F5F5F5] gap-x-2 p-[10px] ${styles}`}>
         {children}
      </div>
   )
}

export default CustomBgCard