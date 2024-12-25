import React from 'react';

function BookConsulatation() {
  const backgroundImage = {
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/d45f/d3de/6f20e70fa75049c9e8140baa6d7e6531?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nB7DC3xGQ9gBvlOW-LcjHooa3aayZM96nXs95RDnZJBy7u7Vw48fU4Uq-jDLO-MvxHgeIu0xJhIDnsb38xgoNJw5SD1cYik5akP-wJiR7Rg28pzR4gkQ4I4~7lsJ~M95JScv15TsWrZd34KOcz4XV~yZx-iNmxctdupEbcuKmFDo3ffZO6ewz9Z3KCGcBCp6E2f9EA743UJEzMbM~lOvLzGpn8DB4Ah9krEZD4rWFpijuJEETM4GwrDdOTXIG5gmFH3HPz3Aec8qcsjr3UaURzwNZRUPuG1f4oEJYsBUQ3pMGLyYFTfBm5WBAmmKkB2qLZxUUVCYigp6Q99WEm3HEw__")`,
    width: "100%",
    height: "590px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  return (
    <div className="w-full h-[590px] hidden lg:block relative">
      <div style={backgroundImage}>
        <div className='w-full h-[590px] bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.59)_100%,_rgba(0,0,0,0.53)_100%,_rgba(14,14,14,0.4)_100%)] flex justify-center items-center'>
           <div className="w-[856px] h-[306px] flex justify-center items-center flex-col gap-14">
              <div>
                <h1 className='font-[DINpro] text-[#FFF7E2] font-semibold text-[64px] leading-[82.43px]'>Ready to restore harmony in</h1>
                <h1 className='font-[DINpro] text-[#FFF7E2] font-semibold text-[64px] leading-[82.43px]'>your mind,body and spirit?</h1>
              </div>
              <div className='w-[300px] h-[72px] bg-[#3A643B] cursor-pointer pt-[24px] pr-[40px] pb-[21px] pl-[40px] rounded-[16px] flex justify-center items-center'>
                <button className='font-[DIN Medium] text-white font-semibold text-[24px] leading-[22.52px]'>Book a Consultation</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default BookConsulatation;
