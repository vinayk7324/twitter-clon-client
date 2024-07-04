import React from 'react'


import {HiAtSymbol, HiCheck, HiCheckCircle, HiMail, HiUser} from 'react-icons/hi'

const UserName = () => {

  return (
    <div className='relative h-screen '>
       <div className="absolute  top-0 h-full w-full flex items-center  bg-[#61617b5e] justify-center">
                <div className="  text-white   lg:h-[85%] lg:w-[40%] shadow-xl shadow-[#0b0b0b] bg-black rounded-xl px-16  ">

                    <div className=" flex flex-col  space-y-4  h-full p-3">
                        <div className="  grid grid-rows-2 h-fit  ">
                            <div className=' flex itece justify-center'>
                                <div className="  w-fit h-fit  overflow-hidden bg-white ">
                                    <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
                                </div>
                            </div>
                            <div className="  grid grid-rows-2  ">
                                <span className=' twitter-text lg:text-3xl font-bold'>What should we call you? </span>
                                <span className=' twitter-text text-gray-500 lg:text-[22px] '>Your @username is unique. You can always change it later.</span>
                            </div>
                        </div>
                        <div className=" w-full    ">


                            <div className=' flex  '>
                              <div className=' border-[4px] p-2   border-[#31acca] w-full rounded-md p-1  relative flex flex-col'>
                                <label htmlFor="username" className=' twitter-text text-[#31acca]  ' >Username</label>
                                <span className=' flex items-center'>
                                <span className=' lg:text-[23px]  flex twitter-text  items-center  border-none '>
                                  <HiAtSymbol/>
                                  
                                </span>
                                <input id='username' value={"VinayKumar07318"} className=' border-none lg:text-[24px] twitter-text font-bold  w-full bg-inherit '  type="text" />
                                <span className=' text-green-500 lg:text-[23px] '>
                                <HiCheckCircle />
                                </span>
                                </span >
                                

                              </div>

                            
                              



                            </div>

                            <div className="">
                                
                            </div>
                        </div>
                       <div className="h-full flex items-end  pb-4">
                       <div className=" w-full  ">
                            <button className='  w-full transition-all duration-300 py-4 border-gray-500 text-gray-200 rounded-full twitter-text lg:text-[23px] border-[4px] font-bold hover:bg-[#1111326e]'>Skip for now </button>
                        </div>
                       </div>


                    </div>

                </div>
            </div>
    
      
    </div>
  )
}

export default UserName

