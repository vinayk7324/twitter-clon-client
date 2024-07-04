import React, { useState } from 'react'
import { api_url } from '../../env-controller'
import SignUp from '../CustomComponent/SignUp'
import axios from 'axios'
import { useContextApi } from '../context-api/contextAPI'



const Home = () => {

    //google Authentication
    const [birthInput,setBirthInput] = useState(false)
    const {signUpPage,setSignUp}  = useContextApi()
    const [loader,setLoader] = useState(false);
    const googleAuth = ()=>{
       
        window.open(`${api_url}/auth/google/callback`,
            "_self"
        )

    }
    
    


    
    const linkArr = [
        {
            link: "",
            title: "About"
        },
        {
            link: "",
            title: "Download the X app"
        },
        {
            link: "",
            title: "Help Center"
        },
        {
            link: "",
            title: "Terms of Service"
        },
        {
            link: "",
            title: "Privacy Policy"
        },
        {
            link: "",
            title: "Cookie Policy"
        },
        {
            link: "",
            title: "Accessibility"
        },
        {
            link: "",
            title: "Ads info"
        },
        {
            link: "",
            title: "Blog"
        },
        {
            link: "",
            title: "Careers"
        },
        {
            link: "",
            title: "Brand Resources"
        },
        {
            link: "",
            title: "Advertising"
        },
        {
            link: "",
            title: "Marketing"
        },
        {
            link: "",
            title: "X for Bussiness"
        },
        {
            link: "",
            title: "Developers"
        },
        {
            link: "",
            title: "Directory"
        },
        {
            link: "",
            title: "Settings"
        },

    ]
    const monthArr = [
        {
            name: "",

        },
        {
            name: "January",

        },
        {
            name: "February",

        },
        {
            name: "March",

        },
        {
            name: "April",

        },
        {
            name: "May",

        },
        {
            name: "June",

        },
        {
            name: "July",

        },
        {
            name: "August",

        },
        {
            name: "September",

        },
        {
            name: "October",

        },
        {
            name: "November",

        },
        {
            name: "December",

        },

    ]
    const dateArr = [
        {
            date: ""
        }

    ]
    const yearArr = [
        {
            year: ``
        }

    ]
    for (let index = 0; index < 31; index++) {
        dateArr.push({ date: `${index + 1}` })

    }

    for (let index = 0; index < 200; index++) {
        yearArr.push({ year: `${(new Date()).getFullYear() - index}` })

    }
    return (
        <div className=" relative   ">
            <div className=' grid grid-cols-2  gap-2 bg-black h-screen    text-white'>
                <div className="  flex items-center justify-center  ">
                    <div className=" bg-img overflow-hidde scale-[1.8] rounded-full lg:h-[400px]  lg:w-[400px] bg-white "></div>


                </div>
                <div className=" flex flex-col lg:pt-16  lg:space-y-3 ps-16  ">
                    <div className=" lg:space-y-10">
                        <div className="header twitter-text text-[5rem] font-[800] "> Happening now </div>
                        <div className=" twitter-text font-[800] lg:text-[2rem] "> Join today. </div>
                    </div>

                    <div className="  lg:space-y-4 ">
                        <div className="        ">

                            <div className="  w-[45%] flex-col flex items-center space-y-4">
                                <button onClick={googleAuth} className=' flex items-center  w-full justify-center space-x-2 px-4 py-3  rounded-full bg-white text-black'>
                                    <span>
                                        <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                    </span>
                                    <span className=' font-semibold'>
                                        sign in with Google
                                    </span>
                                </button>

                                <button  className='  flex items-center border w-full justify-center space-x-2 px-4 py-2 rounded-full bg-white text-black'>
                                    <span>
                                        <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" />
                                    </span>
                                    <span className=' font-bold'>
                                        Sign in with Apple
                                    </span>

                                </button>

                                <div className='  w-full justify-center flex before:bottom-[50%] before:border-b before:absolute relative  before:w-[46%] before:left-0 after:bottom-[50%] after:border-b after:absolute relative  after:w-[46%] after:right-0 '> or </div>
                            </div>

                        </div>
                        <div className="w-[45%] space-y-2 ">
                            <button onClick={()=>setSignUp(true)} className=' flex items-center font-bold   w-full justify-center  px-4 py-2 rounded-full bg-[#0055ff] text-white'>
                                Create account

                            </button>
                            <p className=' text-[16px] open-sans-600  w-fit text-gray-500'>
                                By signing up, you agree to the <span className=' text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use</span>.
                            </p>

                        </div>
                    </div>

                    <div className=" pt-16 w-[45%] space-y-6">
                        <span className=' twitter-text font-semibold lg:text-[24px]'>Already have an Account?</span>
                        <button className=' twitter-text font-semibold hover:bg-[#141e2b] border-gray-600  border w-full py-3 rounded-full text-blue-500'> Sign in </button>
                    </div>
                </div>

                <div className="  w-[99.8vw] space-x-4 text-base  absolute bottom-2 flex items-end">
                    {
                        linkArr.map((element, index) => (
                            <span key={index} className=' text-gray-500 hover:underline lg:text-[18px] cursor-pointer'>
                                {element.title}

                            </span>
                        ))
                    }
                </div>
            </div>

           {
            birthInput &&
              <div className="absolute  top-0 h-full w-full flex items-center  bg-[#61617b5e] justify-center">
            <div className="  text-white   lg:h-[85%] lg:w-[40%] shadow-xl shadow-[#0b0b0b] bg-black rounded-xl px-16  ">

                <div className=" flex flex-col  space-y-4  h-full p-3">
                    <div className="  grid grid-rows-2 h-fit  ">
                        <div className=' flex itece justify-center'>
                            <div className="  w-fit h-fit  overflow-hidden bg-white ">
                                <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
                            </div>
                        </div>
                        <div className="  grid grid-rows-2 gap-2 ">
                            <span className=' twitter-text lg:text-3xl font-bold'>What's your birth date? </span>
                            <span className=' twitter-text text-gray-500 lg:text-[22px] '>This won't be public.</span>
                        </div>
                    </div>
                    <div className="   ">


                        <div className=' flex justify-between '>
                            <div className="   relative w-fit  ">
                                <label htmlFor="  " className=' absolute twitter-text   top-1 lg:text-[18px] left-3 text-white' >Month</label>

                                <select aria-invalid="false" className=' selctedArea border-[4px] focus-within:border-[4px] rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white  h-20  w-60     twitter-text font-semibold  ' aria-placeholder='hello' name="" id="">
                                    {
                                        monthArr.map((element, index) => (

                                            <option key={index} className=' bg-black border-b text-white hover:bg-blue-300 rounded-none twitter-text' value={index} >{element.name} </option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="   relative w-fit rounded-md  ">
                                <label htmlFor="  " className=' absolute  top-1 lg:text-[18px] left-3 text-white twitter-text' >Date</label>

                                <select aria-invalid="false" className=' selctedArea border-[4px]  focus-within:border-[4px] rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white  h-20  w-28     twitter-text font-semibold  ' aria-placeholder='hello' name="" id="">
                                    {
                                        dateArr.map((element, index) => (

                                            <option key={index} className=' bg-black  text-white hover:bg-blue-300 rounded-none twitter-text' value={index} >{element.date} </option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="   relative w-fit ">
                                <label htmlFor="  " className=' absolute  top-1 lg:text-[18px] left-3 text-white twitter-text' >Year</label>

                                <select aria-invalid="false" className=' selctedArea border-[4px] focus-within:border-[4px] rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white  h-20  w-28     twitter-text font-semibold  ' aria-placeholder='hello' name="" id="" >
                                    {
                                        yearArr.map((element, index) => (

                                            <option key={index} className=' bg-black border-b text-white hover:bg-blue-300 rounded-none twitter-text' value={index} >{element.year} </option>
                                        )
                                )
                                    }
                                </select>
                            </div>



                        </div>

                        <div className="">
                            <p className=' twitter-text text-gray-600 py-2  '>
                            By signing up, you agree to the <span className='link'>Terms of Service</span> and <span className='link'>Privacy Policy</span>, including <span className='link'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className='link'>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='link'>here</span>.
                            </p>
                        </div>
                    </div>
                   <div className="h-full flex items-end  pb-4">
                   <div className=" w-full  ">
                        <button className='  w-full py-4 rounded-full twitter-text lg:text-[23px] bg-[#a4a3a3] font-bold text-black'>SignUp </button>
                    </div>
                   </div>


                </div>

            </div>
        </div>

           }

           {
            signUpPage && <SignUp/>
           }


        </div>

    )
}

export default Home
