import React, { useRef, useState } from 'react'
import TwitterIcon from '../../CustomComponent/TwitterIcon'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard, MdFace6 } from "react-icons/md";
import TabsContainer from './TabsContainer';
import img from '../../assets/profile.jpg'
import { useContextApi } from '../../context-api/contextAPI';

const Xhome = () => {
  const [slug, setSlug] = useState("/for-you");
  const [isActive, setIsActive] = useState(false);
  const [replySettingToggle, setReplyToggole] = useState(false);
  const {setToggle} = useContextApi();
  const [PostText,setPostText]= useState(undefined);
  const XhomeArr = [
    {
      slug: " ",
      icon: "gallery_thumbnail "
    },
    {
      slug: " ",
      icon: "gif_box"
    },
    {
      slug: " ",
      icon: "ballot"
    },
    {
      slug: " ",
      icon: "sentiment_satisfied"
    },
    {
      slug: " ",
      icon: "calendar_clock"
    },
    {
      slug: "",
      icon: "location_on"
    }

  ]

  const arrayTab = [
    {
      name: "For You",
      slug: "/for-you"
    },
    {
      name: "Following",
      slug: "/following"
    }
  ]
  return (
   <>
    <div className=" h-full relative   ">
      
      <div className=" text-white justify-between   flex fixed  w-full xl:w-[43.15%] z-[3]   backdrop-blur-md border-[#2a2929] bg-inherit overflow-x-hidden  ">
        {
          arrayTab.map((element, index) => (
            <button onClick={() =>
            (setIsActive(true),
              setSlug(element.slug))
            } key={index} className={`  transition-all  duration-300 lg:hover:bg-[#272727]  bg-inherit backdrop-blur-2xl flex w-full py-4  items-center justify-center `}>
              <span className={` ${element.slug == slug ? " text-white  after:absolute after:w-[80%] after:left-2 after:-bottom-4 after:flex after:rounded-full  after:border-[3px] relative after:border-[#577eff] " : " text-gray-500 "}  font-bold twitter-text `}  >
                {element.name}
              </span>


            </button>

          ))
        }
      </div>

      <div className="  h-screen  pt-14 overflow-y-scroll">
        <div className="h-screen">
          <div className=" border-b border-[#2a2929] p-3">
            <div className="flex space-x-2 ">
              <div className=' bg-gray-500 rounded-full lg:w-12 lg:h-12 w-10 h-10 overflow-hidden  '>
                <img src={img} className=' ' alt="" />
              </div>
              <span>
                <input value={PostText} onClick={()=>setPostText("")} onChange={(e)=>(setPostText(e.target.value))} type="text" className=' lg:text-[23px] twitter-text bg-inherit border-none' placeholder='What is Happening?!' /> </span>
            </div>
            <div className="ps-14 space-y-2  ">
             {
              PostText=="" &&  <div className=" flex items-center  relative  text-blue-500  ">
              <button onClick={() => setToggle('/replySetting')} className=' twitter-text space-x-2 flex items-center transition-all duration-300 rounded-3xl px-2 py-1 hover:bg-[#4040a04b]'>
                <span className=' material-symbols-outlined' >
                  public

                </span>
                <div className=' text-[16px]'>
                  Everyone can reply
                </div>
              </button>
         

            </div>
             }
              


              <div className=" flex justify-between border-t border-[#2a2929] ">
                <div className=" ps-2  flex items-center space-x-4 py-3">

                  {
                    XhomeArr.map((element, index) => (

                      <div key={index} className={` ${element.icon == "location_on" ? " opacity-50 " : ""} flex items-center justify-center text-[#3e3ef5 text-blue-500 font-bold `}>
                        <button disabled={element.icon == "location_on"} className=' material-symbols-outlined lg:text-2xl'>
                          {element.icon}
                        </button>

                      </div>
                    )
                    )
                  }
                </div>
                <div className=" flex items-center ">
                  <button disabled className=' text-[14px]  lg:px-4 px-2  py-1 twitter-text bg-blue-500 lg:py-2 font-semibold opacity-50 rounded-full  '>POST</button>
                </div>
              </div>
            </div>

          </div>
          <div className=" flex items-center justify-center py-3 border-b border-[#2a2929]">
            <span className=' text-blue-500 text-sm twitter-text'> Show 35 Posts </span>
          </div>

          <TabsContainer slug={slug} />
        </div>

      </div>
     

    </div>
   </>

  )
}

export default Xhome
