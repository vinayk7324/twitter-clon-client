import React from 'react'
import { HiDotsHorizontal, HiSearch } from 'react-icons/hi'
import img from "../assets/mahi.jpeg"
import vini from '../assets/profile.jpg'

const TwitterUIRight = () => {
  const trendingArr = [
    {
       trendingName:" #NEETUGUPDATE",
       trendingTitle:"Trending with #NEET"
   },
    {
       trendingName:" #NEETUGUPDATE",
       trendingTitle:"Trending with #NEET"
   },
    {
       trendingName:" #NEETUGUPDATE",
       trendingTitle:"Trending with #NEET"
   },
    {
       trendingName:" #NEETUGUPDATE",
       trendingTitle:"Trending with #NEET"
   },
];
const users = [
  {
    avatarImage:img,
    name:"mahi sharma",
    userName:"@mahi0849"
  },
  {
    avatarImage:vini,
    name:"vinay sharma",
    userName:"@vinay0849"
  },
  {
    avatarImage:img,
    name:"mahi sharma",
    userName:"@mahi0849"
  },
 

]
  return (
    <div className=' h-full  scroll-smooth overflow-y-scroll   '>
      <div className="  h-full   w-[80%] ">
        <div className="   px-6  py-2  backdrop-blur-lg border-[#2a2929]   w-[28.86%] border-b fixed">
          <span className='  relative '>
            <input placeholder='Search...' type="text" className=' bg-inherit w-[85%] ps-12  twitter-text bg-[#3130306b]  focus:border-none box-shadow-none rounded-full' />
            <span className=' absolute left-2 -top-[6px]  rounded-full text-[27px] text-gray-500  p-1 '> <HiSearch/> </span>

          </span>

        </div>
       <div className=" space-y-4 twitter-text ps-6 pb-8 ">
       <div className=" pt-16   ">
        <div className="  w-full space-y-2 border rounded-2xl p-4   border-[#2a2929] ">
          <div className="    " >
          <span className=' font-bold text-2xl '>Showcase your best content with Highlights</span>
          <div className=' text-[16px]'>
          Enhance your profile with X Premium.
          </div>

          </div>
          <div className="">
             <button className=' py-2 font-semibold px-4 rounded-full bg-blue-500'>Subscribe</button>
          </div>
        </div>



       </div>
        <div className="  w-full space-y-2 border rounded-2xl p-4   border-[#2a2929]">
          <div className=" font-bold text-2xl"> What's Happening </div>
          <div className=" space-y-5 ">
           {
            trendingArr.map((element,index)=>(
              
             <div key={index} className="">
             <div  className=" flex items-center justify-between text-[#7b7b7b]">
            <div className=" text-[#7b7b7b] text-[12px] ">Trending in India</div>
            <div className=" text-2xl"> <HiDotsHorizontal/> </div>
           </div>
           <div className="">
            <div className=""> {element.trendingName} </div>
            <div className=" text-[12px]  text-[#7b7b7b]"> {element.trendingTitle}  </div>
           </div>
             </div>
         
              
            ))
           }
          </div>
        </div>
        <div className=" w-full space-y-2 border rounded-2xl p-4   border-[#2a2929]">
          <div className="font-bold text-2xl ">What to Follow</div>
          <div className="  space-y-2">
            {
               users.map((element,index)=>(
                <div key={index} className=" flex justify-between">
                <div className= " flex space-x-2">
                <div className=" h-12 w-12 overflow-hidden  rounded-full">
                  <img src={element.avatarImage} className='  ' alt="" />
                </div>
                <div className=" flex flex-col">
                  <span>{element.name} </span>
                  <span className=' text-gray-600'>{element.userName}</span>
                  
                   </div>
                </div>
                <div className="">
                  <button className=' font-semibold px-4 py-2 rounded-full bg-white text-black '>Follow</button>
                </div>
    
              </div>
  
              ))
            }
          </div>
        </div>
        <div className="  w-[70%] ">
          <div className=" text-[16px] text-gray-500 ">
            <span className=' hover:underline-offset-4 cursor-pointer '> Terms of Services </span>
            <span className=' hover:underline-offset-4 cursor-pointer '> Privacy Policy </span>
            <span className=' hover:underline-offset-4 cursor-pointer '> Cookie Policy</span>
            <span className=' hover:underline-offset-4 cursor-pointer '>Accessbility </span>
            <span className=' hover:underline-offset-4 cursor-pointer '>Ads Info </span>
            <span className=' hover:underline-offset-4 cursor-pointer '>More.. </span>
            <span> &copy;2024 X Corp. </span>
          </div>
        </div>
       </div>

      </div>
    </div>
  )
}

export default TwitterUIRight
