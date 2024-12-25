import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
function FooterMobile() {
  return (
    <div className='w-full lg:hidden h-auto pb-12 px-4 p-6 flex justify-center items-center bg-[#3A643B2E]'>
        <div className=" grid place-content-center place-items-center gap-8">
           <div className='w-full h-[260px] grid place-content-center px-8 gap-4'>
              <h3 className='font-[DINPro-Bold] font-bold text-[18px] leading-[23.18px] text-[#3A643B]'>Get in touch</h3>
              <p className='font-[DINPro] text-[18px] leading-[23.18px] text-[#000000]'>support@amrutam.co.in</p>
              <p className='font-[DINPro] text-[18px] leading-[23.18px] text-[#000000]'>Amrutam Pharmaceuticals Pvt Ltd.,chitragupt ganj,Nai Sadak,Lashkar,Gwalior-474001</p>
              <p className='font-[DINPro] text-[18px] leading-[23.18px] text-[#000000]'>+91 9713171999</p>
              <div className='w-full flex gap-2'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'>
                  <SlSocialFacebook className='text-white text-2xl'/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'>
                  <PiInstagramLogoThin className='text-white text-3xl'/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'> 
                  <PiYoutubeLogoThin className='text-white text-3xl'/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'>
                  <PiTwitterLogoThin className='text-white text-3xl'/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'>
                  <PiLinkedinLogoThin className='text-white text-3xl'/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#3A643B] rounded-full'>
                    <img src="https://s3-alpha-sig.figma.com/img/3dd4/812e/18dff15feca8a09f0fd477234e403f26?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPeZWAOjEuPCZQPur5DdHa5xWjWL7icaNyfdUYrg~XekVivHNWzuAHWxmDlXicy2cEivVpOglfVMHc3e7BpHdADxSEX8cizPq8pYFmoKTlOEk-TcNUOJPEvpYbyqkJQ6DKvJkuQdFp-1KY3e79ug0U-OPtpdSqIQTsNxrqhI74oyLGzu6qphVSqMb2RVuHeTnoQgi2bCBVNRvL~a~QaXo3CpP47GB8Mp57eNY4j6GDhJkP7MikqvoQYGXFvoSajHV5fXQyTMF714EzTRCnSXctPK1ESAgmk9UuKqksO6Qs-DnxJWzPV3KZMGlJViNAlD1ayDHQkvAZ94KXgMDRSg2Q__" alt="" />
                </div>
              </div>
           </div>
      <div className='w-full h-[221px] flex justify-center items-center'>
       <div className='w-[285px] h-[221px] '>
         <h4 className='font-[DINPro-Bold] font-bold text-[18px] leading-[23.18px] text-[#3A643B]'>Information</h4>
         <div className='font-[DINPro] mt-[10px] text-[18px] leading-[27px] text-[#474747]'>
            <p>About Us</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy for Mobile Apps</p>
            <p>Shipping and Returns Policy</p>
            <p>International Delivery</p>
            <p>For Businesses, Hotels and Resorts</p>
         </div>
       </div>
    </div>
           <div className='w-full h-[134px] grid gap-4 px-6'>
             <p className='font-[DINPro-Bold] font-bold text-[18px] leading-[23.18px] text-[#3A643B]'>Subscribe to our Newsletter and join Amrutam Family today!</p>
             <div className='w-full rounded-full flex border-[1px] border-[#3A643B]'>
                <input type="text" placeholder='Your Email Address' className='p-4 border-none bg-[#DBE3DC] rounded-l-full'  />
                <button className='w-full bg-[#000000] text-center p-4 rounded-r-full font-[DINPro-Bold] font-bold text-[18px] leading-[23.18px] text-[#FFFFFF]'>Subscribe</button>
             </div>
           </div>
        </div>
    </div>
  )
}

export default FooterMobile
