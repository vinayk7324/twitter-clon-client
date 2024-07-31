import React, { useState } from 'react'
import img from '../../assets/profile.jpg'
import {  HiHeart ,HiDotsHorizontal} from 'react-icons/hi'
import VerifiedIcon from '../../CustomComponent/VerifiedIcon'
import {FaRegComment,FaRegBookmark, FaRetweet} from 'react-icons/fa'
import {RiBarChartGroupedLine} from 'react-icons/ri'

import {MdOutlineFileUpload} from  "react-icons/md"
import {PiShareFatLight} from "react-icons/pi"
import mPic from '../../assets/mahi.jpeg'
import { useContextApi } from '../../context-api/contextAPI'

const ForYou = () => {
  const [isHoverComment,setIshoverComment] = useState(true);
  const {userDetails,setUserDetails} = useContextApi();
  
 
  const PostArray = [
    {
      name: userDetails?.name,
      avatarImage: userDetails?.avatarImage,
      isVerified: true,
      userName:userDetails?.userName,
      heading: "This is my first post!",
      img: img,
      postTime:"3h ago",
      PostReactIcons :[
        {
          icon:<FaRegComment/>,
          title:"4M",
         
        },
        {
          icon:<FaRetweet/>,
          title:"4.3k",
        },
        {
          icon:<HiHeart/>,
          title:"150M",
        },
        {
          icon:<RiBarChartGroupedLine/>,
          title:"3.3k",
        },
        {
          specialIcon:true,
          icons:[
            {
              icon:<FaRegBookmark/>,

            },
            {
              icon:<PiShareFatLight/>,
             
            },
          ]
          
        },
    
      ]

    },
    {
      name: "Vinay",
      avatarImage: img,
      isVerified: true,
      userName: "@vinay1234",
      heading: "This is my first post!",
      img: img,
      postTime:"3h ago",
      PostReactIcons :[
        {
          icon:<FaRegComment/>,
          title:"4M",
         
        },
        {
          icon:<FaRetweet/>,
          title:"4.3k",
        },
        {
          icon:<HiHeart/>,
          title:"150M",
        },
        {
          icon:<RiBarChartGroupedLine/>,
          title:"3.3k",
        },
        {
          specialIcon:true,
          icons:[
            {
              icon:<FaRegBookmark/>,

            },
            {
              icon:<PiShareFatLight/>,
             
            },
          ]
          
        },
    
      ]

    },
    
 
  ]
  return (
    <>
      <div className=" pb-32   ">
        {
          PostArray.map((element, index) => (
            <div key={index} className=" twitter-text p-4 border-b border-[#2a2929]">
              <div className=" top flex justify-between items-center">
                <div className="top-left flex items-center space-x-2">


                  <div className="avatar lg:h-14 lg:w-14 w-10 h-10 bg-gray-500  rounded-full overflow-hidden">
                     <img src={element.avatarImage} alt="" /> </div>

                  <div className="space-y-2 ">
                    <div className=" flex items-center  text-sm  space-x-1">
                      <div className=' font-bold  w-20  text-nowrap overflow-ellipsis overflow-hidden'> {element.name} </div>
                      {
                        element.isVerified && 
                       <span>
                       <VerifiedIcon/>
                       </span>
                      }
                      <span className=' text-[#696868] text-[14px]'>{element.userName} </span>
                      
                      
                      <span className='text-[#696868] text-[14px]'> {element.postTime} </span>
                    </div> 
                    <div className=" text-sm">
                      {element.heading}..

                    </div>
                  </div>
                </div>
                <div className=" top-right">
                  <span className=' text-gray-400'>
                    <HiDotsHorizontal/>
                  </span>

                </div>
              </div>



              <div className=" ps-16   pt-6 ">
              <div className=" bg-gray-800 rounded-2xl  w-full lg:h-96 h-64 flex items-center justify-center">
                <img src={element.img} className=' h-full' alt="" />
             
              </div>
              </div>
              <div className=" ps-16 pt-6 justify-between flex ">
                {
                  element.PostReactIcons.map((ele,index)=>(
                    <div key={index} className=" PostIcons text-[#69696a] flex items-center  ">
                      
                      
                     {
                      !ele.specialIcon ? <>
                       <div className={` cursor-pointer   flex items-center`}>
                       <span className={`  font-semibold transition-all duration-300 lg:text-2xl text-sm  p-1 rounded-full `}>{ele.icon}</span>
                       <span className=' transition-all duration-300 text-sm'>{ele.title} </span>
                       </div></>
                       :
                       <div className=' flex lg:space-x-5 space-x-2  items-center '>
                        {
                          ele.icons.map((elem,index)=>(
                            <span key={index} className='specialIcons transition-all duration-300 text-sm  lg:text-2xl cursor-pointer '>
                              {
                                elem.icon
                              }
                            </span>
                          ))
                        } </div>

                       
                     }
                    
                    </div>
                    
                      
                      
                     
                      
                    
                  ))
                }

              </div>
            </div>
          ))
        }

      </div>


    </>
  )
}

export default ForYou
