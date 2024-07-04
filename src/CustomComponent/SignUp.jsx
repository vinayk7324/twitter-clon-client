import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import offlineIcon from '../assets/offline.png'
import reload from '../assets/reload1.png'
import { useContextApi } from '../context-api/contextAPI';
import { HiArrowCircleRight, HiArrowRight, HiX } from 'react-icons/hi';
import BirthdayInput from './BirthdayInput';


const SignUp = () => {
  const [loader, setLoader] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const { setSignUp,signUpPage } = useContextApi();
  const [insideLoader,setInsideLoader] = useState(true);
  const [btnLoader,setBtnLoader]  =useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] =  useState('');
  const [DOBInput,setDOBInput] = useState(
    {
      month:'',
      date:"",
      year:""
    }
  )
  const{month,date,year}  = DOBInput
  const onchangeHandler = (e)=>{
    let Name = e.target.name
    console.log(Name);
    console.log(e.target.value);
    setDOBInput({...DOBInput,[Name]:e.target.value})
}

console.log(month,date,year);
 
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
      
    }, 2000);

  },[])


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

    <div className="absolute  top-0 h-full w-full flex items-center  bg-[#61617b5e] justify-center">

     {
      !loader? <div className="  text-white  relative z-[1]  lg:h-[85%] lg:w-[40%] shadow-xl shadow-[#0b0b0b] bg-black rounded-xl   ">
      <span onClick={()=>setSignUp(false)} className=' cursor-pointer absolute right-4 top-4 text-2xl '>
        <HiX/>  
      </span>
      {
        isOnline ?<> <div className=" flex flex-col  space-y-4  h-full py-2 ">
          <div className="  grid grid-rows-2 h-fit px-16 ">
            <div className=' flex itece justify-center'>
              <div className="  w-fit h-fit  overflow-hidden bg-white ">
                <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
              </div>
            </div>
            <div className="  grid grid-rows-2  ">
              <span className=' twitter-text lg:text-3xl font-bold'>Create your account </span>
            
            </div>
          </div>
          <div className=" w-full space-y-4   px-16  ">


            <div className=' flex  '>
              <div className=' border-[4px] p-2   border-[#31acca] w-full rounded-md p-1  relative flex flex-col'>
                <label htmlFor="username" className=' twitter-text flex justify-between   ' >
                  <span className=' text-[#31acca]'>Name</span>
                  <span className=' text-gray-400'>{name.length}/50</span>
                </label>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className=' bg-inherit border-none text-gray-300 twitter-text font-semibold' />
              </div>
            </div>
            <div className=' flex  '>
              <div className=' border-[4px] p-2   border-[#31acca] w-full rounded-md p-1  relative flex flex-col'>
                <label htmlFor="email" className=' twitter-text flex justify-between   ' >
                  <span className=' text-[#31acca]'>Email</span>
                  
                </label>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" className=' bg-inherit border-none text-gray-300 twitter-text font-semibold' />
              </div>
            </div>

            <div className=" space-y-6 ">
              <div className=" twitter-text font-semibold"> Date of birth</div>
              <div className=" twitter-text lg:text-[19px] text-gray-400">This will not be shown publicly.Confirm your own age,even if this account is for bussiness,a pet,or something else. </div>
              <div className="">
              <BirthdayInput  DOB={DOBInput} onchangeHandler={onchangeHandler} />
              </div>
            </div>

            <div className="">

            </div>
          </div>
          <div className="h-full flex items-end border-t-[3px] border-gray-500 px-16  pb-4">
        <div className=" w-full  ">
          <button className=' bg-[#898989] w-full transition-all duration-300 py-3  text-gray-900 rounded-full twitter-text lg:text-[23px]  font-bold hover:bg-[#ababab] '>Next </button>
        </div>
      </div> 
          
        </div>

      </> :
          <div className=' h-full  w-full flex items-center justify-center'>
           {
            !insideLoader? <div className=' flex flex-col items-center space-y-3'>
            <span className=' '> <img className='  ' src={offlineIcon} alt="Offline" />
            </span>
            <span className=' text-[23px] text-[#717171]'>
            Looks like you lost your connection. Please check it and try again.
            </span>
            <button onClick={handleRetry} className='  flex items-center px-4 py-2 space-x-2 bg-[#21cae4] rounded-xl '> 
              
                
                <span> <img src={reload} className=' h-6' alt="" /> </span>
                <span className=' font-bold'>Retry</span>
              
               </button>

          </div>:<Spinner size={"lg"}/>
           }


          </div>
      }

    </div>:<Spinner/>
     }
     



    </div>



  )
}

export default SignUp
