import React from 'react'
import { FaRegBookmark } from 'react-icons/fa';
import { RiFileList2Line,RiAdvertisementLine} from "react-icons/ri";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { BsLightningCharge,BsSuitcaseLg } from "react-icons/bs";
import { IoCloudOutline,IoSettingsOutline } from "react-icons/io5";
const ToggleItem2 = () => {
    const toggleArr = [
        {
            title:"List",
            icon:RiFileList2Line
        },
        {
            title:"Bookmarks",
            icon:FaRegBookmark
        },
        {
            title:"Monetization",
            icon:MdOutlineMonetizationOn
        },
        {
            title:"Verified Orgs",
            icon:BsLightningCharge
        },
        {
            title:"Ads",
            icon:RiAdvertisementLine
        },
        {
            title:"Jobs",
            icon:BsSuitcaseLg
        },
        
        {
            title:"Create your Space",
            icon:IoCloudOutline
        },
        {
            title:"Setting & Privacy",
            icon:IoSettingsOutline
        },
    ]
  return (
    <div onClick={(e)=>e.stopPropagation()} className=' text-white  w-[20%] bg-black  rounded-xl relative  border-[#2a2929] left-36 top-44 box-shadow'>
        {
            toggleArr.map((element,index)=>(
                <div key={index} className=" flex cursor-pointer items-center hover:bg-[#45444465] rounded-xl space-x-4 transition-all duration-300 px-2 py-3 ">
                    <div className=" text-2xl bg-blue-500  p-2 rounded-full"> {<element.icon/>} </div>
                    <div className=" text-2xl"> {element.title} </div>

                </div>
            ))
        }
      
    </div>
  )
}

export default ToggleItem2
