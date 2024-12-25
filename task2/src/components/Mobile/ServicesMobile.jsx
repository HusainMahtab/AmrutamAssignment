import React from 'react'

function ServicesMobile() {
  return (
    <div className='lg:hidden w-full h-[500px] grid place-content-center place-items-center gap-12'>
       <div className="w-[323px] h-[348px] flex px-4 overflow-y-hidden overflow-x-hidden gap-2">
           <div className='min-w-[290px] h-[351px] flex justify-center items-center rounded-[20px] border-t-[5px] border-t-[#3A643B] bg-[#FFF7E2]'>
             <div className='w-full h-auto py-6 flex flex-col justify-center items-center gap-[50px]'>
              <div className='w-[90px] h-[90px] flex justify-center items-center border-[1px] rounded-full border-[#3A643B] bg-[rgba(58,100,59,0.66)]'> 
                 <p className='font-[DINPro-Bold] font-bold text-[48px] leading-[61.82px] text-[#FFFFFF]'>1</p>
              </div>
              <div className='w-full h-auto flex flex-col gap-3 text-center'>
                <h1 className='font-[DINPro-Bold] font-bold text-[24px] leading-[30.91px] text-[#3A643B]'>Make Appointment</h1>
                <p className='font-[DINPro] text-[20px] leading-[25.76px] text-[#2E2E2E]'>You must make an appointment in advance, to choose the service and date.</p>
              </div>
             </div>
           </div>
           <div className='min-w-[290px] h-[351px] rounded-[20px] border-t-[5px] border-t-[#3A643B] bg-[#FFF7E2]'>
           </div>
       </div>
       <div className='w-[96px] h-[9px] flex justify-between'>
          <div className='w-[12px] h-[12px] bg-[#3A643B] rounded-full'></div>
          <div className='w-[12px] h-[12px] bg-[#C3C3C3] rounded-full'></div>
          <div className='w-[12px] h-[12px] bg-[#C3C3C3] rounded-full'></div>
       </div>
    </div>
  )
}

export default ServicesMobile