import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import TwitterIcon from '../CustomComponent/TwitterIcon'
import { useContextApi } from '../context-api/contextAPI'
import { HiPlus } from 'react-icons/hi'

const TwitterDashboard = () => {
    const { setToggle } = useContextApi()
    const dashBoardArr = [
        {
            slug: "/twitter-home",
            icon: "home",
            title: "Home"
        },
        {
            slug: "/twitter-home/explore",
            icon: "search",
            title: "Explore"
        },
        {
            slug: "/twitter-home/notifications",
            icon: "Notifications",
            title: "Notifications"
        },
        {
            slug: "/twitter-ui",
            icon: "mail",
            title: "Messages"
        },
        {
            slug: "/twitter-ui",
            icon: "indeterminate_check_box",
            title: "Grok"
        },
        {
            slug: "/twitter-ui",
            icon: "group",
            title: "Communities"
        },
        {
            slug: "/twitter-ui",
            title: "Premium"
        },
        {
            slug: "/twitter-ui",
            icon: "person",
            title: "Profile"
        },
        {
            slug: "/twitter-ui",
            icon: "sms",
            title: "More",
            special: true
        },  

    ]
    return (
        <div className=' lg:w-full md:w-fit     h-full flex-col xl:overflow-y-hidden overflow-y-scroll    xl:items-end flex  xl:px-8' >
            <div className=" md:flex-col flex  items-center xl:w-[70%]  w-full   xl:space-y-2    xl:h-full">
                <div className=" w-full ps-2 md:block hidden ">
                    <div className='  cursor-pointer p-3 hover:bg-[#212121] transition-all duration-300  flex items-center  justify-center rounded-full w-14 h-14 '>
                        <TwitterIcon fill='white' className=' w-full h-full' />
                    </div>
                </div>
                <div className=" flex flex-col items-center w-full space-y-2      ">
                    <div className=" w-full space-y-2   flex md:flex-col   items-center justify-between   w-full">
                        {
                            dashBoardArr.map((element, index) => (
                                !element.special ? <NavLink className={({ isActive }) => ` ${isActive && element.slug !== "/twitter-home" ? " bg-[#1d1c1c] " : " hover:bg-[#1d1c1c] "}   xl:ps-3 xl:rounded-full  transition-all duration-300  xl:text-[25px]  xl:w-full    items-center `} key={index} to={element.slug}>  
                                    <div className="  flex xl:space-x-2 xl:py-1  justify-center xl:justify-start items-center ">
                                        
                                            <div className=' text-center  flex flex-row justify-center items-center '>

                                                {element.icon ?
                                                    <span className=" text-4xl   material-symbols-outlined ">
                                                        {element.icon}
                                                    </span> :
                                                    <div className="w-6  flex items-center     justify-center h-6   ">
                                                        <TwitterIcon className=' h-full w-full ' />

                                                    </div>
                                                }

                                            </div>
                                        
                                        <span className='   w-fit xl:block hidden '> {element.title} </span>
                                    </div>
                                </NavLink> :
                                    <div  key={index} onClick={() => setToggle("/dashboard-more")} className='  md:block hidden  hover:bg-[#1d1c1c] items-center cursor-pointer   ps-3 rounded-full  transition-all duration-300  text-[25px]  w-full  items-center '>
                                        <div className=" flex  py-2  space-x-2">
                                            <span className=' text-4xl material-symbols-outlined  '> {element.icon} </span>
                                            <button className=' xl:block hidden '> {element.title} </button>

                                        </div>
                                    </div>
                            ))
                        }
                    </div>

                </div>
                <div className=" lg:block hidden  h-full  w-full">
                <div className=" w-full flex md:flex-col  justify-between  h-full">
                    <div className=' md:block hidden w-full'>
                        <button className=' twitter-text font-bold hover:bg-[#387dbe] bg-[#2972bf] transition-all duration-300  lg:rounded-full w-full py-4'>
                            POST
                        </button>
                    </div>
                    <div className=" w-full ">
                        <button className=' bg-[#1e1d1d]  w-full py-4 lg:rounded-full'>
                            Profile


                        </button>
                    </div>
                </div>
                </div>
                <div  className=" lg:text-2xl text-md lg:hidden rounded-full bg-blue-500 block absolute bottom-14 right-8 p-2  flex items-center justify-center z-[3]">
                    <HiPlus/>
                    
                </div>

            </div>

        </div>
    )
}

export default TwitterDashboard
