import React from 'react'
import backgroundimage from '../Rectangle.png'
const Herosection = () => {
  return (
   <div>
     <div className='w-full h-[440px]' style={{backgroundImage:`url(${backgroundimage})`}}>
      
       <h1 className='relative pt-[300px] ml-[200px] text-[36px] font-[700] font-[IBM Plex Sans] text-[#FFFFFF]'>Computer Engineering</h1>
       <p className='relative ml-[200px] text-[18px] font-[400] font-[IBM Plex Sans] text-[#FFFFFF]'>142,765 Computer Engineers follow this</p>
   </div>
   </div>
  )
}

export default Herosection