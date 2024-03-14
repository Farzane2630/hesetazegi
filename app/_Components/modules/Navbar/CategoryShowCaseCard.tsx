import React from 'react'
import CustomCardHeader from '../CustomElements/CustomCardHeader'
import { Category } from '@/public/Types/types'

function CategoryShowCaseCard(category: Category) {
   return (
      <div className='flex flex-row gap-x-4'>
         <img src={category.src} alt="" className='w-[150px] h-[200px] rounded-xl'/>
         <div className='flex flex-col justify-center items-start gap-y-4'>
            <CustomCardHeader title={category.title} />
            {
               category.categories.map(cat => (
                  <p key={cat.id} className='pt-2 hovered cursor-pointer text-[#3E3232BF] leading-[18px] text-base font-medium'>
                     {cat.title}
                  </p>
               ))
            }
         </div>
      </div>
   )
}

export default CategoryShowCaseCard