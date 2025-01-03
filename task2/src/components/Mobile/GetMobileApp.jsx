import React from 'react';

function GetMobileApp() {
  return (
    <div className='lg:hidden w-full h-auto flex flex-col justify-center items-center gap-10 bg-[#FFF7E2]'>
      {/* Heading and Description */}
      <div className='w-full px-4 text-center grid place-content-center place-items-center gap-4'>
        <h1 className='font-[DINPro-Bold] text-[32px] md:text-[28px] lg:text-[36px] font-bold text-[#3A643B]'>
          Amrutam home App
        </h1>
        <p className='font-[DINpro] text-[14px] md:text-[12px] lg:text-[16px] leading-[18px] text-[#676767]'>
          The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
        </p>
      </div>

      {/* Image Section */}
      <div className='w-full h-[328px] md:h-[300px] lg:h-[350px] flex justify-center items-center'>
        <img
          className='object-contain'
          src="https://s3-alpha-sig.figma.com/img/8c1b/9dae/35e943f21e799601f8a2e985c6f1894f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kNjelaMFivABmHipCLR4GJ7n1JGV8cnjCGzI8EkS2UBl3bZesBJL2tmycRCF2fumEQrFdL2xSffSDw8BlDuAtapXKZPoy6accr0nZxfD9zRVnl5rmaYlUXxIDqMnyoax9GQlVgrTSoyPcECdlbkKJxtjck8EGzLfz5G-OTa5NJ-PAhv2pqFi4zIZJGyBy0T~XvYn73LzrdmLtX6~oRQYQpZgy1kmvcOfzAD-RT~bdF56hLxP44e66QSqMPgSOLOT8Ar-S4XYxibv3zFBbOcxti3v5mD2CLXqtiUJzhajVPsf~N6iUKlY1WVbUWLpmia4OKv6-TODBbo~p0OUz3y7QA__"
          alt="Amrutam App"
        />
      </div>

      {/* Description and Buttons */}
      <div className='w-full px-6'>
        <div className='grid place-content-center place-items-center gap-8'>
          <p className='font-[DIN Medium] text-[20px] md:text-[16px] lg:text-[24px] text-center leading-[28px] text-[#000000]'>
            Get a diet & lifestyle consultation with ayurvedic experts across the globe
          </p>
          <h1 className='font-[DINPro-Bold] text-[36px] md:text-[30px] lg:text-[40px] text-[#000000] font-bold'>
            Get the App now
          </h1>
        </div>

        <div className='w-full py-4 grid gap-8 place-content-center place-items-center'>
          <img
            className='w-auto h-[50px] md:h-[40px] lg:h-[60px]'
            src="https://s3-alpha-sig.figma.com/img/d1a0/850d/40fb0269e9c34805102bf5d5f745cd8d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJaXv~cUwUz6mqpqrFgVerc2JziCEedyYuJ8KUzlt1CHrHonlu0LXPyJQzcw8MNSmvgPhNv5-Kmh5fgGk~KGPQzn7wwiNLQfVQ5wWP4YqP51V3Yna0sBffqYf2fLT5Z4bE1foVvt19-FXOzHTZrr1GLlUVTwjGp4lR6vsIDbFhpggX2OtFJYgJ4mXkIcWc6YIPIVOU2w1ltn-5KblupUdg8Kmsqkg7T0E57oqbQ1fEXGLlRR15-Fa6b~kd3f-G3uLqyB5Ol5Lac6lnEXKF9vCO9VmKf902MerOa4gkrKt4x8H-OFcV~qSwTapZ~k8r5fbpXYgWOVPzdYXg2arAT1Vw__"
            alt="Download Button 1"
          />
          <img
            className='w-auto h-[50px] md:h-[40px] lg:h-[60px]'
            src="https://s3-alpha-sig.figma.com/img/72d6/f410/224928bf1eadd5f797c6e93a6a6b92b5?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2ovENzVVDMy~vhfNfFLoaVml43qUnz-RME-Jnxau4H90FtBCCwhnXZy5HCPVuEKC4wO0YBiKQ95cC3JWu52YoALZY0Ck1gWtLd1SogH~xOOI6FOeaStndhPI76keDo0J2xNG7UdUORRfFRFfOnP1EUiYRaSjow-aYJZvthJzRyvJ1kIzh1ju1qPM52bKXLBveDI3Q5OzeWmRSnFef0cJoP7klhrUd-tscJGfF3~3Ah-oZ6mGj0pNVaziSM3a8onR~Y96yLh5k2wlqbNEfPCxqsbuDZQpu90y53JxonGFznHDBmiNXJWRij5U-8favvBGa3yMm-Je4cRUfl3bJPjlw__"
            alt="Download Button 2"
          />
        </div>
      </div>
    </div>
  );
}

export default GetMobileApp;
