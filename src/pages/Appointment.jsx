import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';


const Appointment = () => {
 const{docId}=useParams();
 const{doctors,currencySymbol}=useContext(AppContext);
 const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
 const[docInfo,setDocInfo]=useState(null);
 const[docsSlots,setDocSlots]=useState([]);
 const[slotIndex,setSlotIndex]=useState(1);
 const[slotTime,setSlotTime]=useState('');

 const fetchDocInfo=async()=>{
 const docInfo=doctors.find(doc=>doc._id===docId)
  setDocInfo(docInfo);
 }
 const getAvailableSlots=async()=>{
      setDocSlots([])
      //getting current date
      let today=new Date()
      for(let i=0;i<7;i++){
        //getting date with index
        let currentDate=new Date(today);
        currentDate.setDate(today.getDate()+i);
        // setting end time of the date with index
        let endTime=new Date()
        endTime.setDate(today.getDate()+i);
        endTime.setHours(21,0,0,0);
        //Setting Hours
        if(today.getDate()===currentDate.getDate()){
          currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
          currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
        }else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }
        let timeSlots=[]
      while(currentDate<endTime){
        let formattedTime=currentDate.toLocaleTimeString([],{ hour:'2-digit',minute:'2-digit'})
        //add slot to array
        timeSlots.push({
          dateTime:new Date(currentDate),
          time:formattedTime
        })
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev=>([...prev,timeSlots]))
      }
 }
  
 useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  
  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docsSlots)
  },[docsSlots])

  return docInfo &&(
    <div className=''>
      {/*---------Doctor Details */}
      <div className='flex felx-col sm:flex-row  gap-4'>
        <div>
          <img className='bg-slate-600 w-full rounded-lg border-collapse drop-shadow-xl sm:max-w-72' src={docInfo.image} alt="" />
        </div>
        <div className='border border-gray-400 flex-1 rounded-xl p-8 py-7 bg-slate-100 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ' >
          {/*----Doc Info:name,degree,experience----- -*/}
          <p className=' font-extrabold flex gap-2 text-2xl text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-lg mt-1 text-gray-600'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='border rounded-full shadow-inner bg-slate-800 text-white py-0.5 px-2 text-sm'>{docInfo.experience}</button>
          </div>

          <div>
         <p className='flex gap-1 items-center text-sm font-medium text-black mt-3'>
          About <img  src={assets.info_icon} alt="" /> </p>
            <p className='text-sm text-gray-900 max-w-[700px] mt-1'>{docInfo.about}</p>          
          </div>
          <p className='text-black font-medium mt-4'>
            Appointment Fee: <span className='text-gray-700'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div> 
        </div>
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-800'>
         <p>Booking Slots</p>
         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docsSlots.length && docsSlots.map((item,index)=>(
             <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex==index ? 'bg-slate-700 text-white':'border border-slate-300'}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
               </div>
            ))
          }
        
        </div>
        <div className={`flex items-center gap-3 w-full rounded-full overflow-x-scroll mt-4`}>
  {docsSlots.length > 0 && docsSlots[slotIndex].map((item, index) => (
    <p 
      onClick={() => setSlotTime(item.time)} 
      className={`text-sm font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer 
        ${item.time === slotTime ? 'bg-slate-800 text-white shadow-lg' : 'text-gray-600 border border-gray-300 hover:bg-gray-100'} 
        transition-colors duration-200 ease-in-out transform hover:scale-105`} 
      key={index}
    >
      {item.time.toLowerCase()}
    </p>
  ))}
</div>
<button className='bg-slate-700 text-white text-xs font-medium px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      {/*Listing Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
