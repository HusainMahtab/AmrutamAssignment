import React from 'react'
function Welcom() {
  const backgroundImage = {
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyIWbUo6BPdQO7MdUsklKzvRCi~wBxGDBAwnu5CUaQRmsmpYgNtZaESzkRIVrStwjnYvARl1Py29UG~a~36bPXmASt37GDcReKOdguKF789Ix1rA6n-9I29FaO72eMrOHo-l7RNkSaxitkuqX5HO3IDDGQwKdStFYv8N~L7Z2VlVGMZmtjfk-mzD4GxfduzhbwG3~l80iBCCTVSnXTMH-BAwuhcsgaYuyXkA~dnN6sTiBIYnj6BVlCnAw8GdudNhCNXa-nq6gVSNDMFksLXvA-3Q0LHRH3AUTgD1WPl7eElXx9TfizggFkXc6WUsldsVDwuqZjUrGJTo5042XyteGg__")`,
    width: "100%",
    height: "608px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  return (
    <div className='w-full h-[868px] bg-[#FFF7E2] hidden lg:block'>
        <div className='w-full h-[80px] mt-[-2px]'>
        </div>
          <div style={backgroundImage}>
          <div className='h-screen w-full url bg-[linear-gradient(to_right,_rgba(0,0,0,0.88)_0%,_rgba(0,0,0,0.92)_40%,_rgba(255,255,255,0)_92%)]'>
           <div className="w-[904px] h-[370px] pt-[203px] pl-[98px] grid gap-[20px] ">
              <div className='w-[440px] h-[38px] '>
                  <h4 className='font-[Nexa Light] text-[28px] text-[#FFF7E2] font-thin'>Namaste, Welcome to Amrutam</h4>      
               </div>
             <div className="w-[906px] h-[206px] grid gap-[16px]">
               <div className="w-[906px] h-[134px] leading-[67.2px] ">
                  <h1 className='text-[48px] font-[DiNPro-Bold] text-[#FFFFFF] font-bold'>Step into Holistic Healing with Ayurveda</h1>
                  <h1 className='text-[48px] font-[DiNPro-Bold] text-[#FFFFFF] font-bold'>Book Consultation With Certified Experts.</h1>
               </div>
               <div className="w-[788px] h-[56px] leading-[28px] text-[#C9C9C9] ">
                 <p className='font-[DINPro] font-medium text-[20px]'>Dive into world of Ayurveda and experience personalized health solutions and</p>
                 <p className="font-medium">holistic guidance from trusted doctors anything anywhere.</p>
               </div>
             </div>
            <div className="w-[314px] h-[70px] flex justify-center items-center rounded-[16px] pt-[28px] pr-[40px] pb-[21px] cursor-pointer gap-[10px] pl-[40px] bg-[#3A643B]">
              <button className='font-[DIN Medium] uppercase font-medium text-[20px] leading-[18.77px] text-[#FFFFFF]'>
                 Book An Appointment
               </button>
            </div>
           </div>
        </div>
          </div>
        <div className='w-full h-32 p-4 bg-[#FFF7E2] flex justify-evenly items-center'>
            <div className='flex items-center justify-between gap-2'>
              <div className='p-4 rounded-full border border-[#3A643B] bg-[#FFFFFF]'>
                 <div className='text-2xl'>
                    <img src="https://s3-alpha-sig.figma.com/img/f4ba/b0ae/b3be65721ad15db48b42ced1fe1add76?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ja9OVeu~pZTFahQbmDGaMF6wWdnA83YKhE-SffE5LyNgBV~88fKR4IsvCWzjfjEGl84HQXwXdoXF0VQbw01cI5kuAR7a1c35htAZxDzWTS9CwaztOvwStRPU8ZK1gUuQOrIv8sd2jY~cFsmhCg89js~Zdwhiz8ITll2KVol1IOrhF4D063W5xiuPcJQAOBGcGqsPrVB-7Xl55IMQTz-aJ-ARqEkW6nNrcpqDYIzyYnM46Z7M1IaJAfTNhR6TF97trQ4Z2P3koa43EzAhUvvF2bLGI5GIcGgW19vapUsMbkmE94VV-0KCGHsAMZvi80cSo-IkANho69-VzB9Z6qCuIg__" alt="image" className='w-[40px] h-[40px]' />
                 </div>
              </div>
               <div className='font-semibold'>
                 <p>Convenient Online &</p>
                 <p>In-Clinic Consultations</p>
               </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <div className='p-4 rounded-full border border-[#3A643B] bg-[#FFFFFF]'>
                 <div className='text-2xl'>
                   <img src="https://s3-alpha-sig.figma.com/img/2c5e/d627/8cf1f869d2e948b71cdcdb14c7c4413f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmgaQ1EIdmZEkGX4BeXIBYLg9NnusiVizUO6aeBvLlufHFYLMnrd7JbF7A5aqgXvf-EiPgIlg9C49f9ych7WH6U9JDADE7WfuYqX-k5cdJJY0ag4~eZJBOA62hCR7h6b1a01tX4tTpo3q4TwjxIvvu0aV6MKWgs9pX0Ohd7Lpi-Sp-I5shsnrG2hdSPV5ILsOhctR-BMj9OpBN18-FMiGtWQjG~JFcSp~bz9fPAJqAs2aGJSYGV5WMBo728vTO0ulgGT2-nK6aFAwHHnfWBTt7RgCmqO9q1TiT-4-Xe7fIG3ksUUqnmM8LQzC9WsDjYacczEiMtkUWXwzPHLt5mogw__" alt="image" className='w-[40px] h-[40px]' />
                 </div>
              </div>
               <div className='font-semibold'>
                 <p>Safe And Effective</p>
                 <p>Treatment</p>
               </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <div className='p-4 rounded-full border border-[#3A643B] bg-[#FFFFFF]'>
                 <div className='text-2xl'>
                    <img src="https://s3-alpha-sig.figma.com/img/0854/69db/3d23d6085aab3b3dbe1b662f60051d85?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CG3eS61cKX2Dwd97urywzaKzW0EaaWG3gH6ZQOBGCVtnKXJ9ie~Xk24JAzuhhSwL320K80dZjAqUSIK-pmqUz9dcpn9MgIQ1R4wKJCal1LiIYi595v4t4OSazqfdG8pVRNKMaQoO0HGQZluwzM5iNWVNyHMcmA269ExMFa8MM9f~IE2~dq0v70b5cNKm2zUDoDvZbIe9-vl4iSh-y~TRv8kI2lW3BzQKIJ4LIbwreKYTbE-tmgzSFjwHTc70ZCzdgssfFgFL60f2eEwLvSk8-vBwFLPrqJswBMpvPWGtnctdd-p9ynLmrSMgBVudtfKqD7hGUnZcxffmc6cN7FkEoQ__" alt="image" className='w-[48px] h-[48px]' />
                 </div>
              </div>
               <div className='font-semibold'>
                 <p>Experienced Ayurvedic</p>
                 <p>Practitioners</p>
               </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <div className='p-4 rounded-full border border-[#3A643B] bg-[#FFFFFF]'>
                 <div className='text-2xl'>
                   <img src="https://s3-alpha-sig.figma.com/img/cd8d/62a9/52ed6e4cba8b811d1e2a2336dfc266d0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtDtrq9w9RmQkKgj3kiVtt5gYLLcJP1NXLIsciU8VS05h4dpYpz-xIcQAo8tgSpzWGc4xPzdclyupKwxt0iOpxbk7pxneTjHiiSBcyxbcCuwpF5l3gXOeNXGVZb48LfQj4X83N6hfBo4JF5Ti2msWKJ6ItDOFQkzZz1uMFiGjW3buGxEerBbOixZAS6YcpBDBmrUYRhdCfBMTv7VEWSIN0W6VI57FbKemxYar2AICPgQotB9mWF63pSDRTjgeIwnTZ6rkACkRdrOlUdTmb4zpO3nRPiCxDa6TP73BUYH3k1JyMQK0s-DqD2lIohKf5YejYjAExNHTJQRNmbYzv8Urw__" alt="image" className='w-[40px] h-[40px]' />
                 </div>
              </div>
               <div className='font-semibold'>
                 <p>Personlized Treatment</p>
                 <p>Plans & Guidance</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Welcom



