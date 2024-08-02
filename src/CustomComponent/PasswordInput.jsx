import { Spinner } from 'flowbite-react';
import React, { useEffect, useState, useRef } from 'react'
import offlineIcon from '../assets/offline.png'
import reload from '../assets/reload1.png'
import { findDigit,findSpecialChar,findUpperCaseChar } from '../utils/PasswordValidation.js'
import { HiArrowLeft, HiCheckCircle, HiEye, HiXCircle } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';
import { useContextApi } from '../context-api/contextAPI.jsx';
import axios from 'axios';
import { api_url } from '../../env-controller.js';
import createUserName from './../utils/createUserName';
import { toast, ToastContainer } from 'react-toastify';


const PasswordInput = () => {

  const [isOnline, setIsOnline] = useState(false);
  const [insideLoader, setInsideLoader] = useState(true);
  const [password, setPassword] = useState('')
  const [character,setCharacter] = useState(false);
  const [upperCase,setUppercase] = useState(false);
  const [digits,setDigit] = useState(false);
  const [special,setSpecial] = useState(false);
  const [disable,setDisable] = useState(true);
  const  [loader,setLoader] = useState(false);
  const {userData,setuserData,setOutlet,setGoogleLogin} = useContextApi();
  const toastOptions = {
    theme:'dark',
    position:"top-center"
  }
  const navigate = useNavigate()
  useEffect(() => {
    setIsOnline(navigator.onLine);
    if (navigator.onLine) {
      setInsideLoader(false);

    }
    else {

      setTimeout(() => {
        setInsideLoader(false);
      }, 4000);
    }
  }, []);
  const handleRetry = () => {
    setInsideLoader(true);
    setTimeout(() => {
      setIsOnline(navigator.onLine)
      setInsideLoader(false)
    }, 3000);


  }

  useEffect(()=>{
    if(findDigit(password)){
      setDigit(true);
    }
    else{
      setDigit(false);
    }

  },[password]);
  useEffect(()=>{
    if(findSpecialChar(password)){
      setSpecial(true);
    }
    else{
      setSpecial(false);
    }

  },[password]);
  useEffect(()=>{
    if(findUpperCaseChar(password)){
      setUppercase(true);
    }
    else{
      setUppercase(false);
    }

  },[password]);
  
  useEffect(()=>{
    if(password.length>=8){
      setCharacter(true);
    }
    else{
      setCharacter(false);
    }
  },[password]);


  useEffect(()=>{
    if(digits && special && character && upperCase){
      setDisable(false);
    }
    else{
      setDisable(true);
    }

  });
  
  const handleSignUp =async ()=>{
    try {
      const  {name,email,DOB} = userData
      const userName = createUserName(name);
      const res = await axios.post(`${api_url}/auth/twitter-register`,{name,userName, email,password,DOB});
      if(!res.data.success){
        setLoader(false)
        return toast.error(res.data.message,toastOptions);
      }
      setLoader(false);
      toast.success(res.data.message,toastOptions);
      console.log(res.data.userDetails);
      const user = sessionStorage.getItem('user-data');
      if(user){
        sessionStorage.removeItem('user-data');
      }
      sessionStorage.setItem('user-data',JSON.stringify(res.data.userDetails));

      setuserData({...userData,userName:userName,password:password});

      setTimeout(() => {
        setGoogleLogin(false);
        navigate('/');
        setOutlet(false);
      }, 3000);
      
      
      

      
    } catch (error) {
      console.log('handleSignup :: ',error);
      
    }
  }


  return (

    <div className="absolute  top-0  h-full  w-full flex items-center  bg-[#61617b5e] justify-center">

      {
        <div className="  text-white   relative w-[100%] h-full lg:w-[35%] lg:h-[75%] shadow-xl shadow-[#0b0b0b] bg-black lg:rounded-xl   ">
          <span onClick={() => window.history.back()} className=' cursor-pointer absolute left-4 top-4 text-[20px] '>
            <HiArrowLeft />
          </span>
          {
            isOnline ? <> <div className=" flex flex-col   space-y-4 pt-10  h-full lg:py-4 ">
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
                    <span className=' text-gray-400 text-[14px] '>{password.length}/50</span>
                  </label>
                  <span className=' flex items-center'>
                    <input value={password} onChange={(e) => {setPassword(e.target.value);}} type="text" className='text-[15px] h-7  bg-inherit   border-none w-full text-gray-300 twitter-text font-semibold' />
                    <span className='lg:hover:cursor-pointer px-2 text-[15px] '> <HiEye /> </span>
                  </span>
                </div>
              </div>
              {
                password && <div className=" lg:px-5 px-3  text-[12px] ">

                  <div className=" ">
                    <div className={` flex items-center space-x-2 ${character?"text-green-500":"text-red-500"} `}>
                      <span className='  text-center'>{character?<HiCheckCircle/>:<HiXCircle/>} </span>
                      <p> Password should contain at least 8 characters. </p>
                    </div>
                    <div className={` flex items-center space-x-2 ${upperCase?"text-green-500":"text-red-500"} `}>
                      <span className='  text-center'>{upperCase?<HiCheckCircle/>:<HiXCircle />} </span>
                      <p> Password should contain at least one Uppercase character. </p>
                    </div>
                    <div className={` flex items-center space-x-2 ${special?"text-green-500":"text-red-500"} `}>
                      <span className='  text-center'> {special?<HiCheckCircle/>:<HiXCircle />} </span>
                      <p> Password should contain at least one Special character. </p>
                    </div>
                    <div className={` flex items-center space-x-2 ${digits?"text-green-500":"text-red-500"} `}>
                      <span className='  text-center'>{digits?<HiCheckCircle/>:<HiXCircle />} </span>
                      <p> Password should contain at least one digits. </p>
                    </div>

                  </div>

                </div>
              }


              <div className="lg:h-full px-3 flex flex-col space-y-5 lg:border-gray-500 lg:py-1 lg:px-5 pb-4 lg:pb-6  ">
                <div className="">
                  <p className='  text-[12px]  twitter-text text-[#9f9f9f]'>
                    By signing up, you agree to the <span className='link'>Terms of Service</span> and <span className='link'> Privacy Policy</span>, including <span className=' link'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className=' link '>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='link'>here</span>.
                  </p>
                </div>
                <div className=" w-full  ">
                  <button onClick={handleSignUp} disabled={disable} className={` ${disable?"bg-[#797777] cursor-not-allowed":"bg-[#20abad] hover:bg-[#3cbdd1]"}  w-full transition-all duration-300  py-1     rounded-full twitter-text   font-bold  text-[12px] `}> {!loader?"Sign Up":<Spinner size={'sm'}/>} </button>
                </div>
              </div>


            </div>

            </> :
              <div className=' h-full  w-full flex items-center justify-center'>
                {
                  !insideLoader ? <div className=' flex flex-col items-center justify-center space-y-3'>
                    <span className=' '> <img className=' h-6  ' src={offlineIcon} alt="Offline" />
                    </span>
                    <span className=' text-[14px] text-[#717171] text-center'>
                      Looks like you lost your connection. Please check it and try again.
                    </span>
                    <button onClick={handleRetry} className='  flex items-center px-2 py-1 lg:px-4 lg:py-3 space-x-2 bg-[#21cae4] rounded-lg '>


                      <span> <img src={reload} className=' h-3' alt="" /> </span>
                      <span className=' text-[14px]  font-semibold'>Retry</span>

                    </button>

                  </div> : <Spinner size={"md"} />
                }


              </div>
          }

        </div>
      }

<ToastContainer/>

    </div>



  )
}

export default PasswordInput
