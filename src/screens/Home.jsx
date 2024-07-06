import React, { useState } from 'react'
import { api_url } from '../../env-controller'
import SignUp from '../CustomComponent/SignUp'
import axios from 'axios'
import { useContextApi } from '../context-api/contextAPI'
import BirthdayInput from '../CustomComponent/BirthdayInput'
import { Link, Outlet } from 'react-router-dom'



const Home = () => {

    //google Authentication
    const [birthInput, setBirthInput] = useState(false)
    const { signUpPage, setSignUp ,outlet,setOutlet} = useContextApi()
    const [loader, setLoader] = useState(false);
    const googleAuth = () => {

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

    
    return (
        <div className=" relative   ">
            <div className=' lg:grid lg:grid-cols-2 lg:pt-0 pt-10 gap-2 bg-black h-screen    text-white'>
                <div className="hidden lg:block h-full">
                <div className="     h-full flex items-center justify-center ">
                    <div className=" bg-img overflow-hidden   lg:scale-[1] rounded-full lg:h-[400px]  lg:w-[400px] bg-white "></div>



                </div>
                </div>
               <div className=" lg:hidden  flex items-center ps-10">
               <div className="  h-[48px] overflow-hidden w-[48px] ">
                <img  className=' border h-full w-full bg-white rounded-full scale-[2]' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
                </div>
               </div>
                <div className=" flex flex-col lg:pt-10 mt-10 space-y-3 lg:ps-16 lg:px-0 px-5  ">
                    <div className=" lg:space-y-6">
                        <div className="header twitter-text lg:text-[3.1rem]  text-[1.5rem] font-[800] "> Happening now </div>
                        <div className=" twitter-text font-[800] lg:text-[1rem] "> Join today. </div>
                    </div>

                    <div className="  lg:space-y-2 ">
                        <div className="   lg:w-[40%] w-full     ">

                            <div className="    flex-col flex items-center lg:space-y-4 space-y-2">
                                <button onClick={googleAuth} className=' flex items-center  w-full justify-center space-x-1 px-4 py-2  rounded-full bg-white text-black'>
                                    <span>
                                        <img className=' h-4 w-4 ' src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                    </span>
                                    <span className=' font-semibold text-[16px]'>
                                        sign in with Google
                                    </span>
                                </button>

                                <button className='  flex items-center border w-full justify-center space-x-1 px-4 py-2 rounded-full bg-white text-black'>
                                    <span>
                                        <img className=' h-4 w-4' src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" />
                                    </span>
                                    <span className=' font-bold text-[16px]'>
                                        Sign in with Apple
                                    </span>

                                </button>

                                <div className=' text-[18px]  w-full justify-center flex before:bottom-[50%] before:border-b before:absolute relative  before:w-[46%] before:left-0 after:bottom-[50%] after:border-b after:absolute relative  after:w-[46%] after:right-0 '> or </div>
                            </div>

                        </div>
                        <div className="lg:w-[40%] space-y-2 lg:space-y-1 ">
                         <Link to={"/signup"} onClick={()=>setOutlet(true)}> <button   className=' flex items-center font-bold   w-full justify-center  px-4 py-2 rounded-full bg-[#0055ff] text-white'>
                                Create account

                            </button>
                            </Link>
                            <p className=' text-[14px] open-sans-600  w-fit text-gray-500'>
                                By signing up, you agree to the <span className=' text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use</span>.
                            </p>

                        </div>
                    </div>

                    <div className=" lg:pt-2 pt-2 lg:w-[40%] lg:space-y-2 space-y-2">
                        <span className=' twitter-text font-semibold lg:text-[18px]'>Already have an Account?</span>
                        <button className=' twitter-text font-semibold hover:bg-[#141e2b] border-gray-600  border w-full py-2 rounded-full text-blue-500 text-[17px]'> Sign in </button>
                    </div>
                </div>

                <div className=" hidden  border w-[99.8vw] space-x-4 text-base  absolute bottom-2 flex items-end">
                    {
                        linkArr.map((element, index) => (
                            <span key={index} className=' text-gray-500 hover:underline lg:text-[18px] cursor-pointer'>
                                {element.title}

                            </span>
                        ))
                    }
                </div>
            </div>

            {/* {
                birthInput &&
                <BirthdayInput/>

            }

            {
                signUpPage && <SignUp />
            } */}

            {
              outlet &&  <div className=" absolute top-0 h-full w-full ">
                    <Outlet/>
                </div>
            }


        </div>

    )
}

export default Home
