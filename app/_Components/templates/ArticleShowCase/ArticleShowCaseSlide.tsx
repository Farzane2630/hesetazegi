'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// @ts-ignore
import EllipsisText from "react-ellipsis-text";


export default function ArticleShowCaseSlide() {
   const slides = [
      { id: "1", bg: "images/monitors-article.jpg" },
      { id: "2", bg: "images/monitors-article.jpg" },
      { id: "3", bg: "images/monitors-article.jpg" },
      { id: "4", bg: "images/monitors-article.jpg" },
   ]
   return (
      <>
         <Swiper
            className="mySwiper"
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}

         >
            {
               slides.map((slide) => (
                  // @ts-ignore
                  <SwiperSlide key={slide.id} className='w-full h-full flex flex-col justify-end items-end object-contain rounded-xl p-2' style={{ backgroundImage: `url(${slide.bg})` }}>
                     <div className='w-full h-full flex flex-col justify-end items-end object-contain rounded-xl p-2'>
                        <div className="w-full flex flex-col justify-start items-start rounded-xl bg-[#FFFFFFBF]">
                           <h3 className='text-black text-normal text-[25px] leading-[29.3px] p-4'>Why I Stopped Using Multiple Monitor</h3>
                           <p className='text-[#000000BF] text-normal text-sm leading-5 p-4 pt-0 text-left'>
                              <EllipsisText text="A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like" length={"85"} />
                           </p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </>
   );
}
