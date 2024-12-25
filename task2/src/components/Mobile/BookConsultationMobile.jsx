import React from 'react'

function BookConsultationMobile() {
    const backgroundImage = {
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/d45f/d3de/6f20e70fa75049c9e8140baa6d7e6531?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4RHFt9x1psnvi9WHDNN-p8-ZmpoNxC2BClvS0KyA8TkKU-ssxP6qagWZQsGD5NPz1MfZfMh2shJ7IeAlEz4BG25G8Z4dV0HloH6mOVmHSxs0rlCSygtcr3a~G1hV78-M8rpuDTqW~7ubNAgHZ7SuyIG7xDg8EYzZ9UWKdg35aSt04GPKnoCpVZBJJNTO1thwZmfNq3iHBYIzXsp1ostJMAA2bUbWjaRll0syJuBJ0nZwc-i5BAmqwFLo3xO6UCiHuydoMUadamsymlZIKGDjq9pGYCOeHXjKEYilBkuXW3wYcRQvDJzH4PcHufm4iG-0ugAbHap~FDehOJcuUIhhg__")`,
        width: "100%",
        height: "540px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      };
  return (
    <div className='lg:hidden w-full h-[514px] bg-[#F0F0F0] my-[40px]' style={backgroundImage}>
       <div className='lg:hidden w-full h-full flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.66),_rgba(14,14,14,0.54))]'>
            <div className='w-[257px] h-[259px] flex flex-col gap-8'>
                <h1 className='font-[DINpro] w-full text-center font-semibold text-[32px] leading-[41.22px] text-[#FFF7E2]'>Ready to restore harmony in your mind, body and spirit?</h1>
                <button className='w-full p-4 rounded-[16px] bg-[#3A643B] text-[#FFFFFF] text-center font-[DIN Medium] text-[20px] leading-[18.77px] font-semibold'>Book a consultation</button>
            </div>
       </div>   
    </div>
  )
}

export default BookConsultationMobile