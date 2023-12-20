import React from 'react'
import Cart from './Cart'
import Secondcart from './Secondcart'

const Contentpage = () => {
  return (
    <>
       <div className=' flex justify-between items-center mt-6 h-[45px] w-[90%] ml-16'>
        <div className='w-[358px] text-[14px] ml-20 fontt-[IBM Plex Sans] font-[400] h-[21px] text-[#000000] list-none flex gap-2'>
            
            <li className='text-[#000000] '>All Posts(32)</li>
            
            
            <li className='text-[#8A8A8A]'>Article</li>
            <li className='text-[#8A8A8A]'>Event</li>
            <li className='text-[#8A8A8A]'>Education</li>
            <li className='text-[#8A8A8A]'>Job</li>
        </div>
       <div className='flex gap-2 mr-32'>
       <div className='bg-[#EDEEF0] h-[36px] w-[133px] text-[#000000] font-[500] text-[15px] flex gap-2 justify-center items-center'>
          <div>Write a Post</div>
          <div className='w-[22px] h-[22px] flex items-center'><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.416504 0.166748L4.99984 4.75008L9.58317 0.166748H0.416504Z" fill="black"/>
</svg>
</div>
        </div>
        <div >
          <div className='bg-[#2F6CE5] w-[125px] h-[36px] rounded-[4px] flex gap-1 justify-center items-center'>
            <div><svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 5.16659H4.58333V2.41659H2.75V5.16659H0V6.99992H2.75V9.74992H4.58333V6.99992H7.33333V5.16659ZM16.5 6.08325C18.0217 6.08325 19.2408 4.85492 19.2408 3.33325C19.2408 1.81159 18.0217 0.583252 16.5 0.583252C16.2067 0.583252 15.9225 0.629085 15.6658 0.711585C16.1883 1.45409 16.4908 2.35242 16.4908 3.33325C16.4908 4.31409 16.1792 5.20325 15.6658 5.95492C15.9225 6.03742 16.2067 6.08325 16.5 6.08325ZM11.9167 6.08325C13.4383 6.08325 14.6575 4.85492 14.6575 3.33325C14.6575 1.81159 13.4383 0.583252 11.9167 0.583252C10.395 0.583252 9.16667 1.81159 9.16667 3.33325C9.16667 4.85492 10.395 6.08325 11.9167 6.08325ZM17.985 8.06325C18.7458 8.73242 19.25 9.58492 19.25 10.6666V12.4999H22V10.6666C22 9.25492 19.8275 8.38409 17.985 8.06325ZM11.9167 7.91659C10.0833 7.91659 6.41667 8.83325 6.41667 10.6666V12.4999H17.4167V10.6666C17.4167 8.83325 13.75 7.91659 11.9167 7.91659Z" fill="white"/>
</svg>
</div>
<div>Join Group</div>
          </div>
        </div>
       </div>
        
        </div>  
        <div className='w-[77%] h-[1px] ml-[10%] bg-[#E0E0E0]'></div>
        <div className='flex justify-between w-[243px] mt-[50px]  ml-[900px] h-[30px] border-b-[0.4px] border-b-[#B8B8B8]'>
         <div className='flex gap-1 items-center ml-2'>
         <div className='h-[18px] w-[18px] text-[#000000]'><svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM2.25 5.75C2.25 3.68 3.93 2 6 2C8.07 2 9.75 3.68 9.75 5.75C9.75 7.91 7.59 11.1425 6 13.16C4.44 11.1575 2.25 7.8875 2.25 5.75Z" fill="black"/>
</svg>
</div>
          <div className='text-[14px] font-[400] font-[IBM Plex Sans] text-[#000000]'>Noida, India</div>
         </div>
          <div className='h-[15px] w-[15px] mr-2 text-[#000000]'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 12.3749V15.4999H3.625L12.8417 6.28322L9.71667 3.15822L0.5 12.3749ZM15.2583 3.86655C15.5833 3.54155 15.5833 3.01655 15.2583 2.69155L13.3083 0.741553C12.9833 0.416553 12.4583 0.416553 12.1333 0.741553L10.6083 2.26655L13.7333 5.39155L15.2583 3.86655Z" fill="black"/>
</svg>
</div>
        </div>
       
         <div className='ml-[450px]'>
          <Cart image="news.png" title="✍️ Article" header="What if famous brands had regular fonts? Meet RegulaBrands!"
          paragraph="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profileimage="profile.png"
          username="Sarthak Kamra"
          />

         <Cart image="news2.png" title="🔬️ Education" header="Tax Benefits for Investment under National Pension Scheme launched by Government"
          paragraph="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profileimage="secondprofile.png"
          username="Sarah West"
          />
         <Secondcart image="busimage.png" title="🗓️ Meetup" header="Finance & Investment Elite Social Mixer @Lujiazui"
          button="Visit Website"
          profileimage="secondprofile.png"
          username="Ronal Jones"
          />
        
          
         </div>
    </>
  )
}

export default Contentpage