import React, { useEffect, useRef, useState } from 'react'
import { useContextApi } from '../context-api/contextAPI'
import { IoEarthOutline } from "react-icons/io5";
import { HiCheck } from 'react-icons/hi';
import { SlUserFollowing } from "react-icons/sl";
import { GoVerified,GoMention } from "react-icons/go";
const ToggleItem1 = () => {
    
    
    
    const replyArray = [
        {
            title:"Everyone",
            icon:<IoEarthOutline/>,
            isActive:useState(true),
            id:"everyone"
        },
        {
            title:"Account  you follow",
            icon:<SlUserFollowing />,
            isActive:useState(false),
            id:"Account-you-follow"
        },
        {
            title:"Verified acoounts",
            icon:<GoVerified />,
            isActive:useState(false),
            id:"Verified-acoounts"
        },
        {
            title:"Only accounts you mention",
            icon:<GoMention/>,
            isActive:useState(false),
            id:"Only-accounts-you-mention"
        },

    ]

    const handleIsActive = ({id})=>{
    replyArray.forEach((element)=>{
        element.isActive[1](id===element.id)

    })

    }
    return (
        <div onClick={(e) => {
            e.stopPropagation()
        }} className=' twitter-text  bg-black  border-[#2a2929] box-shadow text-white border w-[80%] top-36 left-10 lg:w-[22%] relative  lg:top-36 lg:left-80 rounded-xl '> 

            <div className=" px-3 py-2 ">
                <div className=" lg:text-2xl text-md font-semibold ">
                    who can reply?
                </div>
                <div className= " text-[#a2a2a2] lg:text-[18px] text-sm"> Choose who can reply to this post.</div>
                <div className=' text-[#aeaeae] lg:text-[18px] text-sm'>
                   
                    Anyone mentioned can always reply.
                </div>
            </div>
            <div className="  space-y-2 pb-2" >
                {
                    replyArray.map(( element,index)=>(
                       <div key={index} onClick={()=>{
                        handleIsActive({id:element.id})
                       }} className=" flex items-center justify-between px-4 rounded-md transition-all duration-200 cursor-pointer hover:bg-[#3a3a4b4d] ">
                         <div  className=" flex   space-x-4   items-center py-2     ">
                            <div className="  p-2 rounded-full bg-blue-600  lg:text-2xl flex itece justify-center "> {element.icon} </div>
                            <div className=" text-sm "> {element.title} </div>
                            
                        </div>
                        {
                            element.isActive[0] && <span className=' text-blue-500 text-xl'><HiCheck/></span>
                        }
                       </div>

                    ))

                }

            </div>


        </div>
    )
}

export default ToggleItem1
