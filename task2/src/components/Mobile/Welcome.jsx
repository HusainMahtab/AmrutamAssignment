import React from 'react'
const backgroundImage = {
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/adfc/8fd0/85372b9b89239293b1c75db89c0bf0f4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aecRGt-yzeBsggeogSHV~Xb-NN7ciZtnaKJPiM64aYHsKBoVXF3JG7wL2FkBHcs9N~Oz4eui8hILjK6iZetkCxPRNx-qtp5OVB0SL~5IshLwp7mtgGt0CJQLlCLFGeCYLlBh32pCOlVoouqvp-ADGM87s3BcXIUl9X0UbSPZc6ztU9Wyop0keohuhf9C7IrjwQr9TajT30q-N9U0G4cDFLX~BJbiKtrGBxWcPAIqfnt3UCqwHxXbJym0OPvm1wAVnmp7CFD~226WMaLyBGnmF~8YI4iv4~3AWJoqLr5-y~b31HFWIGyhA0k2TcTJDSkHT1cPjHIfX4yA6MGTUq56MA__")`,
    width: "100%",
    height: "540px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
function Welcome() {
  return (
    <div className='lg:hidden' style={backgroundImage}>
       <div className='lg:hidden w-full h-[540px] flex justify-center items-center bg-[linear-gradient(to_right,_rgba(24,24,24,0.87),_rgba(34,34,34,0.48))]'>
           <div className='w-full h-[360px] flex justify-center flex-col gap-[30px] p-4'>
              <h1 className='font-[Nexa Light] text-[16px] leading-[16px] text-[#FFF7E2]'>Namaste, Welcome to Amrutam </h1>
              <div>
                 <p className='font-[DINPro-Bold] font-bold text-[24px] leading-[33.6px] text-[#FFFFFF]'>Step into Holistic Healing with Ayurveda Book Consultation with certified Experts.</p>
              </div>
               <div>
                  <p className='font-[DINpro] font-semibold text-[14px] leading-[19.6px] text-[#C9C9C9]'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
               </div>
              <div className='w-[214px] h-[50px] flex justify-center items-center rounded-[10px] bg-[#3A643B]'>
                 <button className='font-[DIN Medium] p-4 text-[14px] font-semibold leading-[13.14px] text-[#FFFFFF]'>Book an Appointment</button>
              </div>
           </div>
       </div>   
    </div>
  )
}

export default Welcome