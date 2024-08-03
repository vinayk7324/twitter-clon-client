import React, { useEffect, useRef, useState } from 'react'
import TwitterDashboard from './TwitterDashboard'
import TwitterUIRight from './TwitterUIRight'
import { json, Outlet, useNavigate } from 'react-router-dom'
import ToggleOrigin from '../toggle-component/ToggleOrigin'
import { useContextApi } from '../context-api/contextAPI'
import AppLoader from '../CustomComponent/AppLoader'
import axios from 'axios'
import { api_url } from '../../env-controller'

const TwitterUI = () => {
    const navigate = useNavigate();
    const { toggle, setToggle,userDetails,setUserDetails,isGoogleLogin} = useContextApi();
    const [appLoader,setApploader] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    
   isGoogleLogin && useEffect(()=>{
        const googleAuth =async ()=>{
            try {
                const res = await axios.get(`${api_url}/auth/login/success`,{withCredentials:true});
               
                setUserDetails(res.data.user);
                console.log(res.data.user);
                setIsLogin(true);
                
                sessionStorage.setItem("user",JSON.stringify(res.data.user));
              
                if(res.data.success){

                    const userRes = await axios.post(`${api_url}/auth/twitter-user/google-account-user`,{id:userData._id},{withCredentials:true});
                  
                
                }
                setApploader(false);
            } catch (error) {
                console.log(error);
                
            }

        }
        googleAuth();
        
    },[])
   
    useEffect(()=>{
        if(!isLogin){
            navigate("/auth")
        }

    },[])
  
 



    return (
        <>
            <div className=" flex flex-col-reverse md:flex-row     bg-black h-screen text-white    h-full ">

                <div className=" xl:w-[28%]   border  border-[#2a2929]  md:h-full">
                    <TwitterDashboard />
                </div>
                <div className=" xl:w-[72%] h-[100vh] w-full overflow-y-scroll flex  scrollOutlet ">
                    <div className=" xl:w-[60%] w-full border-r border-[#2a2929] ">
                        <Outlet />
                    </div>
                    <div className=" w-[40%] xl:block hidden ">
                        <TwitterUIRight />
                    </div>
                </div>
               {
                appLoader &&  <AppLoader/>
               }

            </div>
            {
                toggle != "" &&
                <div onClick={() => setToggle("")} className=" absolute top-0 h-screen w-full z-[3] ">
                    <ToggleOrigin slug={toggle} />
                </div>
            }

           

        </>
    )
}

export default TwitterUI
