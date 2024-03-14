import React from 'react'

function SearchCard() {
   return (
      <div className='flex flex-col items-start justify-start bg-white py-3 gap-y-2 px-8 rounded-xl fixed top-[10%] left-[50%] z-50' style={{ boxShadow: "0px 0px 32px 0px #00000012" }}>
         <p className='hovered cursor-pointer text-[#3E3232BF] leading-[18px] text-base font-medium'>
            Category One
         </p>
         <p className='hovered cursor-pointer text-[#3E3232BF] leading-[18px] text-base font-medium'>
            Category Two
         </p>
         <p className='hovered cursor-pointer text-[#3E3232BF] leading-[18px] text-base font-medium'>
            Category Three
         </p>
         <p className='hovered cursor-pointer text-[#3E3232BF] leading-[18px] text-base font-medium'>
            Category Four
         </p>
      </div>
   )
}

export default SearchCard