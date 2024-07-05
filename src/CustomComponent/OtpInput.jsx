import {  Spinner } from 'flowbite-react';
import React, { useEffect, useState,useRef } from 'react'
import offlineIcon from '../assets/offline.png'
import reload from '../assets/reload1.png'

import {HiArrowLeft } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';


const OtpInput = () => {
  const [minute,setMinute] = useState(1);
  const [resend,setResend] = useState(true);
  const [redZone,setRedZone] = useState(false);
  const [second,setSecond] = useState(59);
  const [isOnline, setIsOnline] = useState(false);
  const [insideLoader,setInsideLoader] = useState(true);
  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
    if (value !== "" && index < 4 - 1) {
      inputRefs.current[index + 1].focus();
    }
    // onChange(otp.join(''));
  };
  const handleKeyDown = (e, index) => {
    
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };


useEffect(()=>{
 const interval =  setInterval(() => {
    if(second>0 && minute>=0){
       if(second<=16 && minute==0){
        setRedZone(true);
  
  
      }
      setSecond(second-1);
    }
    else if(second==0 && minute>0){
      setSecond(59);
    setMinute(minute-1);
    }
   
    else{
       setResend(false);
      return;
    }
    
  }, 1000);

  return ()=>{clearInterval(interval)}; 
},[second])
  
 
 


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
        isOnline ?<> <div className=" flex flex-col  justify-between lg:space-y-4 pt-10  h-full lg:py-4 ">
          <div className="  grid grid-rows-2 h-fit lg:px-16 ">
            <div className=' flex itece justify-center'>
              <div className="  w-fit h-fit  overflow-hidden bg-white ">
                <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
              </div>
            </div>
            <div className=" flex flex-col   px-3  ">
              <span className=' twitter-text lg:text-3xl font-bold text-2xl  ' > We sent you a code </span>
              <span className=' twitter-text ' >Enter it below to verify</span>
              <span className=' twitter-text '> default email </span>
            
            </div>
          </div>
          <div className=" w-full lg:space-y-4 space-y-2 flex items-center justify-center flex-col      lg:px-16 px-2  ">
          <div className=" space-x-2">
              <span className={` ${redZone?"text-red-500":"text-white"}  py-2 px-4 twitter-text`}> {minute}:{second} </span>
              <button disabled={resend} className={`twitter-text px-3  text-[18px] ${resend?" text-gray-500 hover:cursor-not-allowed":" text-white lg:hover:text-[#5dd4e6] "}`}>resend</button>
             </div>
            
               <div className="flex  space-x-3 ">
               {otp.map((data, index) => (
                 <input
                   className="w-12 h-12 text-center text-xl border-[4px] border-white bg-inherit text-white focus:border-[#43dae2]  rounded-md 
                     box-shadow-non  "
                   type="text"
                   name="otp"
                   maxLength="1"
                   key={index}
                   value={data}
                   onChange={(e) => handleChange(e.target, index)}
                   onKeyDown={(e) => handleKeyDown(e, index)}
                   ref={(el) => inputRefs.current[index] = el}
                 />
               ))}
             </div>
             

            



          

            <div className="">

            </div>
          </div>

          <div className="lg:h-full px-3 flex items-end lg:border-gray-500 lg:py-1 lg:px-16 pb-4 lg:pb-6  ">
        <div className=" w-full  ">
          <button  onClick={()=>navigate('/password-input')} className='  w-full transition-all duration-300  py-3  bg-[#20abad]   rounded-full twitter-text  text-[16px]  font-bold hover:bg-[#3cbdd1] '>Next </button>
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

export default OtpInput
