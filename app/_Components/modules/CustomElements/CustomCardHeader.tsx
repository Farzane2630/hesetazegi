export default function CustomCardHeader({title}:{title: string}) {
   return (
      <div className='flex flex-row justify-start items-center gap-x-[6px]'>
         <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
         <h4 className='text-[#3e3232] text-medium text-xl'>{title}</h4>
      </div>
   )
}
