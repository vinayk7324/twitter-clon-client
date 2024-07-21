import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import offlineIcon from '../assets/offline.png'
import reload from '../assets/reload1.png'
import { useContextApi } from '../context-api/contextAPI';
import {  HiArrowLeft } from 'react-icons/hi';
import BirthdayInput from './BirthdayInput';
import { useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import axios from 'axios';
import { api_url } from '../../env-controller';
import isEmailExist from '../utils/isEmailExist.js';



const SignUp = () => {
  const [loader, setLoader] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const {setOutlet,userData,setuserData} = useContextApi();
  const [insideLoader,setInsideLoader] = useState(true);
  const [name,setName] = useState('');
  const [email,setEmail] =  useState('');
  const [btnLoader,setBtnLoader] = useState(false);
  const navigate = useNavigate();
  const [disable,setDisable] = useState(true);
  const [isEmail,setIsEmail] = useState(false);
  const toastOptions = {
    position:"top-center",
    theme:"dark"}

  const [DOBInput,setDOBInput] = useState(
    {
      month:"",
      date:"",
      year:""
    }
  );
 
  
  const{month,date,year}  = DOBInput
  const onchangeHandler = (e)=>{
    let Name = e.target.name
  
 
    setDOBInput({...DOBInput,[Name]:e.target.value})
}



 
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

  useEffect(()=>{
    
    if(email!=='' && name!=='' && month!=='' && year!=='' && date!==''){
      setDisable(false);
      
    }

  },[email,name,month,year,date]);

 
  const sendOTP =async ()=>{
    try {
       if(!email || !name || !month || !year || !date  ){
       return toast.error('All field required',toastOptions);
       }
       setBtnLoader(true);
       const isemailExist = await isEmailExist({email:email});
       
       if(!isemailExist){
        setBtnLoader(false);
        setIsEmail(true);
        return;
       }
       
       const res = await axios.post(`${api_url}/auth/send-otp`,{email});
       if(!(res?.data?.success)){
       setBtnLoader(false)
       return toast.error(res.data.message,toastOptions);

       }
        console.log(month,year,date);
       setBtnLoader(false);
       toast.success(res.data.message,toastOptions);
      
       setuserData({...userData,name:name,email:email,DOB:`${date}/${month}/${year}`})
       console.log(userData);
       setTimeout(() => {
        navigate('/OtpInput');
        
       }, 2000);
       return;
    } catch (error) {
      console.log(error);
      
    }
  }







  return (

 <>
   <div className="absolute  top-0  h-full  w-full flex items-center  bg-[#61617b5e] justify-center">

{
  !loader? <div className="  text-white   relative w-[100%] h-full lg:w-[35%] lg:h-[75%] shadow-xl shadow-[#0b0b0b] bg-black lg:rounded-xl   ">
 <span onClick={()=>{
   window.history.back();
   setOutlet(false);

   }} className=' cursor-pointer absolute  transition-all duration-300 flec itece justify-center p-1 rounded-full lg:hover:bg-[#aaa9a985] left-1 top-4 text-[20px] '>
  <HiArrowLeft/>
 </span>
 {
   isOnline ?<> <div className=" flex flex-col    space-y-2 pt-10 lg:pt-5    ">
     <div className="  grid grid-rows-2 h-fit lg:px-16 ">
       <div className=' flex itece justify-center'>
         <div className="  w-fit h-fit  overflow-hidden bg-white ">
           <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
         </div>
       </div>
       <div className="    px-3 ">
         <span className=' twitter-text  font-bold lg:text-xl text-xl   items-center flex justify-center' >Create your account </span>
       
       </div>
     </div>
     <div className=" w-full  space-y-1     px-2 lg:px-5  ">


       <div className=' flex  '>
         <form className='     border-[2px] p-1    border-[#31acca] w-full rounded-md   relative flex flex-col'>
           <label htmlFor="username" className=' twitter-text flex justify-between px-3   ' >
             <span className=' text-[#31acca] lg:text-[14px] text-[16px] '>Name</span>
             <span className=' text-gray-400 lg:text-[12px] text-[14px] '>{name.length}/50</span>
           </label>
           <input onChange={(e)=>{setName(e.target.value)}}  value={name} type="text" className='text-[16px]  h-7 bg-inherit border-none text-gray-300 twitter-text text-[12px] font-semibold' />
         </form>
       </div>
       <div className=' flex flex-col '>
         <form className='   border-[2px]   border-[#31acca] w-full rounded-md p-1  relative flex flex-col'>
           <label htmlFor="email" className=' twitter-text flex justify-between  px-3  ' >
             <span className=' text-[#31acca] lg:text-[14px] text-[16px] '>Email</span>
             
           </label>
           <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className=' h-7 text-[16px] bg-inherit border-none text-gray-300 twitter-text font-semibold text-[12px]' />
           
         </form>
         {
            isEmail && <div className=' text-[13px] px-3 pt-2 text-red-500'>
              Enter correct email address.
            </div>
           }
       </div>

       <div className=" lg:space-y-6 ">
         <div className=" twitter-text font-semibold text-[16px]"> Date of birth</div>
         <div className=" twitter-text  text-gray-400 text-[14px]">This will not be shown publicly.Confirm your own age,even if this account is for bussiness,a pet,or something else. </div>
         <div className=" ">
         <BirthdayInput  DOB={DOBInput} onchangeHandler={onchangeHandler} />
         </div>
       </div>

       <div className="">

       </div>
     </div>

     <div className="lg:h-full px-3 flex  lg:border-gray-500 lg:py-1 lg:px-16 pb-4 lg:pb-6  ">
   <div className=" w-full  ">
     <button disabled={disable} onClick={sendOTP} className={` ${disable?" cursor-not-allowed bg-[#383939] ":"hover:bg-[#3cbdd1]  bg-[#20abad]"} w-full transition-all duration-300  py-2    rounded-full twitter-text  text-[14px]  font-bold `}>{btnLoader?<span><Spinner/></span>:"Next"} </button>
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
       <button onClick={handleRetry} className='  flex items-center px-2 py-1 lg:px-4 lg:py-2 space-x-2 bg-[#21cae4] rounded-lg '> 
         
           
           <span> <img src={reload} className=' h-3' alt="" /> </span>
           <span className=' text-[14px]  font-semibold'>Retry</span>
         
          </button>

     </div>:<Spinner size={"lg"}/>
      }


     </div>
 }

</div>:<Spinner/>
}



</div>
<ToastContainer/>
 </>




  )
}

export default SignUp
