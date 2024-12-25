import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
function Header() {
  return (
    <div className='w-full h-[104px] bg-[#FFF7E2] flex justify-evenly items-center lg:hidden'>
      <IoReorderThreeOutline className='text-[#3A643B] text-5xl'/>
      <div className='w-[122px] h-[24px]'>
        <img className='w-full h-full' src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zo7cg6~WOpLIRREwL3MbBuztCIgrx4MefJT8eiDO74sMJc8iJqAFLV3E-Rw5k0WfhUEG-xBI4uOaCeoZ-udqcNSbfgcIEhKdeqCyVZ3RlO1Pxqn3xLOmoJR4XiuVXLU7JcPZiPgGXgDKmlJBDvZWyBG0Amf0hH~8Da~wiPRhCJENGMR4M8pxlNDv2EuTYL9JgBgbymTFC-LyVEsSmVQzszxtB8QsVrDVBN~P-mnacC5s43Rj~5UMuymXcw6hw~8PBYH0t45d6LWYMI2tDubWDLxa~Csr40vFh-bb-1KPqmtezC~y~7UxzKEp3jzRneSG5M5RRS8A--bnEtbsL-wFEA__" alt="logo" />
      </div>
    </div>
  )
}

export default Header