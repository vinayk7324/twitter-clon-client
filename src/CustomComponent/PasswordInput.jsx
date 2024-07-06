import {  Spinner } from 'flowbite-react';
import React, { useEffect, useState,useRef } from 'react'
import offlineIcon from '../assets/offline.png'
import reload from '../assets/reload1.png'

import {HiArrowLeft, HiEye } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';


const PasswordInput = () => {
  
  const [isOnline, setIsOnline] = useState(false);
  const [insideLoader,setInsideLoader] = useState(true);
  const navigate = useNavigate()
 



 


  useEffect(() => {
    setIsOnline(navigator.onLine);
    if(navigator.onLine){      
      
        
        setInsideLoader(false);
    
    }
    else{
      
      setTimeout(()=>{
        setInsideLoader(false);
      },4000);
    }
  },[]);
  const handleRetry = () =>{
    setInsideLoader(true);
    setTimeout(() => {
     setIsOnline(navigator.onLine)
      setInsideLoader(false)
     
      
      
    }, 3000);
    
   
  }





  return (

    <div className="absolute  top-0  h-full  w-full flex items-center  bg-[#61617b5e] justify-center">

     {
       <div className="  text-white   relative w-[100%] h-full lg:w-[35%] lg:h-[75%] shadow-xl shadow-[#0b0b0b] bg-black lg:rounded-xl   ">
      <span onClick={()=>window.history.back()}  className=' cursor-pointer absolute left-4 top-4 text-[20px] '>
        <HiArrowLeft/>
      </span>
      {
        isOnline ?<> <div className=" flex flex-col   space-y-4 pt-10  h-full lg:py-4 ">
          <div className="  grid grid-rows-2 h-fit space-y-2 lg:px-5 ">
            <div className=' flex itece justify-center'>
              <div className="  w-fit h-fit  overflow-hidden bg-white ">
                <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
              </div>
            </div>
            <div className=" flex flex-col   px-3  ">
              <span className=' twitter-text  font-bold lg:text-xl text-[1.2rem]  ' > You'll need a password </span>
              <span className=' twitter-text text-[12px] ' >Make sure it’s 8 characters or more.</span>
            
            
            </div>
          </div>
          <div className="  flex items-center justify-center px-3 lg:px-5">
          <div className='  lg:p-2   border-[2px]    border-[#31acca] w-full rounded-md   relative flex flex-col'>
                <label htmlFor="username" className=' twitter-text flex justify-between px-3 py-2   ' >
                  <span className=' text-[#31acca]  text-[14px]  '>Password</span>
                  <span className=' text-gray-400 text-[14px] '>0/50</span>
                </label>
               <span className=' flex items-center'>
               <input type="text" className='text-[15px] h-7  bg-inherit   border-none w-full text-gray-300 twitter-text font-semibold' />
               <span className='lg:hover:cursor-pointer px-2 text-[15px] '> <HiEye/> </span>
               </span>
              </div>
          </div>
          

          <div className="lg:h-full px-3 flex flex-col space-y-5 lg:border-gray-500 lg:py-1 lg:px-5 pb-4 lg:pb-6  ">
            <div className="">
                <p className='  text-[12px]  twitter-text text-[#9f9f9f]'>
                By signing up, you agree to the <span className='link'>Terms of Service</span> and <span className='link'> Privacy Policy</span>, including <span className=' link'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className=' link '>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='link'>here</span>.
                </p>
            </div>
        <div className=" w-full  ">
          <button disabled className='  w-full transition-all duration-300  py-2  bg-[#20abad]   rounded-full twitter-text   font-bold hover:bg-[#3cbdd1] text-[14px] '>Sign Up </button>
        </div>
      </div> 

          
        </div>

      </> :
          <div className=' h-full  w-full flex items-center justify-center'>
           {
            !insideLoader? <div className=' flex flex-col items-center justify-center space-y-3'>
            <span className=' '> <img className=' h-6  ' src={offlineIcon} alt="Offline" />
            </span>
            <span className=' text-[14px] text-[#717171] text-center'>
            Looks like you lost your connection. Please check it and try again.
            </span>
            <button onClick={handleRetry} className='  flex items-center px-2 py-1 lg:px-4 lg:py-3 space-x-2 bg-[#21cae4] rounded-lg '> 
              
                
                <span> <img src={reload} className=' h-3' alt="" /> </span>
                <span className=' text-[14px]  font-semibold'>Retry</span>
              
               </button>

          </div>:<Spinner size={"lg"}/>
           }


          </div>
      }

    </div>
     }
     



    </div>



  )
}

export default PasswordInput
