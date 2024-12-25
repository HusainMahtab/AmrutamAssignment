import React from 'react'
import { GiMedicines } from 'react-icons/gi'
import { IoMdStar } from 'react-icons/io'
import { SlGraduation } from 'react-icons/sl'

function AyurvedaExpertsMobile() {
  return (
    <div className='w-full lg:hidden flex justify-center items-center flex-col my-[40px]'>
        <div className='w-full text-center'>
            <h1 className='font-[DINPro-Bold] text-[32px] font-bold leading-[41.22px] text-[#3A643B]'>Meet our Ayurveda experts </h1>
        </div>
        <div className='w-full flex justify-center items-center my-[30px]'>
            <div className='w-[296px] h-[446px] rounded-[40px] bg-[#FFF7E2]'>
                <div className='w-[296px] flex justify-center items-center h-[381px] bg-[#FFF7E2] rounded-[40px]'>
                    <div className='w-[247px] h-[308px] flex items-center flex-col gap-4'>
                        <div className='w-[149px] h-[150px] relative flex justify-center items-center flex-col'>
                         <img className='w-[140px] h-[140px] rounded-full' src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__" alt="expert image" />
                        <div className='w-[70px] h-[28px] flex absolute mt-28 justify-center items-center gap-1 rounded-[17px] bg-[linear-gradient(to_top,_#0B0B0B_100%,_#0B0B0BC9_100%)]'>
                           <p className='font-[DINPro-Bold] font-bold text-[#FFFFFF] text-[16px] leading-[18px]'>4.5</p>   
                            <IoMdStar className='w-[16.67px] h-[15.83px] text-[#EFDA3B]'/>
                        </div>
                        </div>
                         <div className='w-[247px] h-[130px] flex justify-center items-center flex-col gap-2'>
                             <h1 className='font-[Gotham Rounded] font-semibold text-[20px] leading-[24px]'>Dr. Vaishali sharma</h1>
                            <p className='font-[Inter] font-medium text-[15px] leading-[20px] text-[#838383]'>Ayurveda Practitioner (BAMS, MD)</p>
                            <div className='flex justify-center items-center gap-2'>
                              <SlGraduation className='text-[24px] text-[#3A643B]'/>
                              <p className='font-[Nunito] text-[16px] leading-[18px]'>25 years of experience</p>
                            </div>
                            <div className='w-[150px] h-[30px] flex justify-center items-center gap-1 rounded-[18px] bg-[#3A643B1F]'>
                                <GiMedicines className='text-[#3A643B] text-[24px]'/>
                                 <p className='font-[Nunito] font-semibold text-[16px] text-[#3A643B] leading-[18px]'>Skin Specialist</p>
                                 </div>
                                </div>
                             </div>
                            </div>
                            <div className='w-[296px] h-[65px] flex justify-center items-center rounded-b-[40px] bg-[#3A643B]'>
                              <p className='font-[Nunito] font-semibold text-[20px] leading-[18px] text-[#FFFFFF]'>Book a session</p>
                           </div>
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

export default AyurvedaExpertsMobile