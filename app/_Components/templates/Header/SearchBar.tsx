import Search from '@/public/Icons/Search'
import React from 'react'

function SearchBar() {
   return (
      <div className='w-[399px] h-[48px] flex flex-row justify-between items-center px-[16px] py-[14px] rounded-2 bg-[#F5F5F5] rounded-xl'>
         <div className='flex flex-row justify-start items-center gap-x-[18px]'>
            {/* more icon */}
            <div className='cursor-pointer'>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     d="M10 14.0625C11.1719 14.0625 12.1875 15.0781 12.1875 16.25C12.1875 17.4609 11.1719 18.4375 10 18.4375C8.78906 18.4375 7.8125 17.4609 7.8125 16.25C7.8125 15.0781 8.78906 14.0625 10 14.0625ZM10 7.8125C11.1719 7.8125 12.1875 8.82812 12.1875 10C12.1875 11.2109 11.1719 12.1875 10 12.1875C8.78906 12.1875 7.8125 11.2109 7.8125 10C7.8125 8.82812 8.78906 7.8125 10 7.8125ZM10 5.9375C8.78906 5.9375 7.8125 4.96094 7.8125 3.75C7.8125 2.57812 8.78906 1.5625 10 1.5625C11.1719 1.5625 12.1875 2.57812 12.1875 3.75C12.1875 4.96094 11.1719 5.9375 10 5.9375Z"
                     fill="#3E3232"
                     fillOpacity={0.75}
                  />
               </svg>
            </div>
            {/* more icon */}
            <input type="text" className='w-full h-[14px] outline-none text-[#3E3232BF] font-normal text-xs leading-[14.06px] bg-transparent' placeholder='Search anything' />
         </div>
         <div className='cursor-pointer'>
            <Search />
         </div>
      </div>
   )
}

export default SearchBar