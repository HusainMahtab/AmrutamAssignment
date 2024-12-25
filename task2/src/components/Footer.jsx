import React from 'react'

function Footer() {
  return (
    <div className="hidden lg:block">
      <div className='w-full h-[500px] bg-[#3A643B2E] flex justify-center items-center'>
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
    </div>
  )
}

export default Footer
