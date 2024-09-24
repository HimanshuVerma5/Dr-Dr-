import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className='flex  bg-slate-950 px-6 rounded-lg sm:px-10 md:px-14   lg:px-12 my-20 md:mx-10'>
      {/*------------------Left Side---------------------*/ }
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
      <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold '>
        <p className=''> Book Appointment</p> 
        <p className='mt-4'>With 100+ Trusted Doctors</p>
      </div>
        <button onClick={()=>{navigate('/login');scroll(0,0)}} className='text-black font-medium bg-slate-50 text-sm sm:text-base px-8 py-3 rounded-full mt-9 hover:scale-105 transition-all '>Create Account</button>
      </div >
      {/*------------------Right Side--------------------------*/}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative '>
      <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />

      </div>
    </div>
  )
}

export default Banner;
