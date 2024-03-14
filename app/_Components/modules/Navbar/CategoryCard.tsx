import { Category } from '@/public/Types/types'
import React from 'react'
import CategoryShowCaseCard from './CategoryShowCaseCard'

function CategoryCard({ categories }: { categories: Category[] }) {
   return (
      <div className='flex flex-col items-start justify-start bg-white py-3 gap-y-2 px-8 rounded-xl absolute top-[11%] left-[25%] z-50' style={{ boxShadow: "0px 0px 32px 0px #00000012" }}>
         <div className='w-full flex flex-col gap-y-4'>
            <div>
               {
                  categories.splice(0, 3).map(cat => (
                     <CategoryShowCaseCard key={cat.title} {...cat} />
                  ))
               }
            </div>
            <div>
               {
                  categories.splice(4, 6).map(cat => (
                     <CategoryShowCaseCard key={cat.title} {...cat} />
                  ))
               }
            </div>
            <div>

            </div>
         </div>
         <div></div>
      </div>
   )
}

export default CategoryCard