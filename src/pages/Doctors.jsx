import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const {speciality}=useParams()
  const[filterDoc,setfilterDoc]=useState([])
  const{doctors}=useContext(AppContext)
  const navigate=useNavigate();
  const applyFilter=()=>{
    if(speciality){
      setfilterDoc(doctors.filter(doc=> doc.speciality===speciality))
    }else{
      setfilterDoc(doctors);
    }
  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  return (
    <div>
    <p className='text-gray-600 font-semibold text-xl'>Browse through the doctors specialist.</p>  
    <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <div className='flex flex-col gap-2 text-sm text-white'>
        <p onClick={()=> speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="General physician"?"bg-indigo-100 text-black":""}`}>General physician</p>
        <p onClick={()=> speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="Gynecologist"?"bg-indigo-100 text-black":""}`}>Gynecologist</p>
        <p onClick={()=> speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="Dermatologist"?"bg-indigo-100 text-black":""}`}>Dermatologist</p>
        <p onClick={()=> speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="Pediatricians"?"bg-indigo-100 text-black":""}`}>Pediatricians</p>
        <p onClick={()=> speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="Neurologist"?"bg-indigo-100 text-black":""}`}>Neurologist</p>
        <p onClick={()=> speciality==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-200 rounded transition-all cursor-pointer bg-slate-500 ${speciality==="Gastroenterologist"?"bg-indigo-100 text-black":""}`}>Gastroenterologist</p>
      </div>
       <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
        {
          filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-zinc-400' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-zinc-800 text-lg font-semibold'>{item.name}</p>
                  <p className='text-red-900 text-sm font-semibold'>{item.speciality}</p>
                </div>
              </div>
            ))}
       </div>
    </div>
    </div>
  )
}

export default Doctors
