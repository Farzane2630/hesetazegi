import React from 'react'

function AdsCard(ads: {bg: string, id: string}) {
  return (
    <div className='w-full h-[180px] rounded-xl flex flex-col justify-center items-center gap-y-2 bg-[#00000033] bg-cover' style={{backgroundImage: `url(${ads.bg})`, backdropFilter: `blur(20px)`}}>
      <h4 className='text-white text-medium leading-[23.44px] text-[20px]'>Advertising</h4>
      <h6 className='text-white text-medium leading-[15.23px] text-[13px]'>360 px * 180px</h6>
    </div>
  )
}

export default AdsCard