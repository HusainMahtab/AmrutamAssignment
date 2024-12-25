import React from 'react'
import { IoMdStar } from 'react-icons/io'

function CustomersStoriesMobile() {
  return (
    <div className='lg:hidden w-full h-[689px] flex justify-center items-center flex-col gap-8 bg-[#FFF7E2]'>
         <h1 className='w-full font-[DINPro-Bold] font-bold text-[32px] leading-[41.22px] text-center text-[#3A643B]'>Stories from our valued customers!</h1>
            <div className='flex w-full gap-4 px-4 overflow-x-hidden'>
              <div className='w-[304px] h-[371px] flex flex-col gap-8 border-[1px] border-[#D7D7D7] rounded-[20px] bg-[#FFFFFF] shadow-lg'>
                      <div className='w-[304px] h-[55px] bg-[#ECE7FF] rounded-t-[20px] p-4 px-8'>
                        <h1 className='w-[152px] font-[Nunito] text-[#000000] font-bold text-[18px] leading-[20px]'>Consulted for Skin</h1>
                      </div>
                      <div className='w-full flex justify-center items-center'>
                      <div className='w-full h-[50px] px-4 flex justify-between '>
                         <div className='w-[163px] h-[50px] flex justify-between gap-[13px] items-center'>
                            <div className='w-[50px] h-[50px] bg-[#515151] rounded-full p-4'></div>
                             <div className='w-[120px] h-[47px] grid place-content-center place-items-center'>
                                <h1 className='font-[DIN Medium] text-center leading-[23px] font-semibold text-[16px] text-[#414141]'>Sophie Moore</h1>
                                 <p className='font-[Nexa Light] text-[15px] leading-[23px] text-[#414141]'>Chennai</p>
                             </div>
                         </div>
                         <div className='w-fit h-fit'>
                             <p className='font-[Nexa Light] text-[16px] leading-[28px] text-[#000000]'>17/02/24</p>
                         </div>
                      </div>
                      </div>
                      <div className='w-[140px] h-[24px] flex justify-center pl-4 gap-1 text-[70px] text-[#EEDE4D]'>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                      </div>
                      <div className='grid place-content-center place-items-center p-2'>
                      <div className='w-full '>
                          <h1 className='font-[DM Sans] font-bold text-[22px] leading-[22px]'>“One of a kind service”</h1>
                          <p className='font-[DM Sans] text-[18px] pl-2 leading-[30px] text-[#555555]'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                      </div>
                      </div>
                  </div>
                  <div className='w-[304px] h-[371px] flex flex-col gap-8 border-[1px] border-[#D7D7D7] rounded-[20px] bg-[#FFFFFF] shadow-lg'>
                      <div className='w-[304px] h-[55px] bg-[#ECE7FF] rounded-t-[20px] p-4 px-8'>
                        <h1 className='w-[152px] font-[Nunito] text-[#000000] font-bold text-[18px] leading-[20px]'>Consulted for Skin</h1>
                      </div>
                      <div className='w-full flex justify-center items-center'>
                      <div className='w-full h-[50px] px-4 flex justify-between '>
                         <div className='w-[163px] h-[50px] flex justify-between gap-[13px] items-center'>
                            <div className='w-[50px] h-[50px] bg-[#515151] rounded-full p-4'></div>
                             <div className='w-[120px] h-[47px] grid place-content-center place-items-center'>
                                <h1 className='font-[DIN Medium] text-center leading-[23px] font-semibold text-[16px] text-[#414141]'>Sophie Moore</h1>
                                 <p className='font-[Nexa Light] text-[15px] leading-[23px] text-[#414141]'>Chennai</p>
                             </div>
                         </div>
                         <div className='w-fit h-fit'>
                             <p className='font-[Nexa Light] text-[16px] leading-[28px] text-[#000000]'>17/02/24</p>
                         </div>
                      </div>
                      </div>
                      <div className='w-[140px] h-[24px] flex justify-center pl-4 gap-1 text-[70px] text-[#EEDE4D]'>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                         <IoMdStar/>
                      </div>
                      <div className='grid place-content-center place-items-center p-2'>
                      <div className='w-full '>
                          <h1 className='font-[DM Sans] font-bold text-[22px] leading-[22px]'>“One of a kind service”</h1>
                          <p className='font-[DM Sans] text-[18px] pl-2 leading-[30px] text-[#555555]'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                      </div>
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

export default CustomersStoriesMobile