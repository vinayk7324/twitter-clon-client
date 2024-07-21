import React, { useEffect, useRef } from 'react'
import TwitterDashboard from './TwitterDashboard'
import TwitterUIRight from './TwitterUIRight'
import { Outlet, useNavigate } from 'react-router-dom'
import ToggleOrigin from '../toggle-component/ToggleOrigin'
import { useContextApi } from '../context-api/contextAPI'

const TwitterUI = () => {
    const navigate = useNavigate();
    const { toggle, setToggle } = useContextApi();



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
