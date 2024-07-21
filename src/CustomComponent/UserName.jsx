import React from 'react'


import {HiAtSymbol, HiCheckCircle} from 'react-icons/hi'

const UserName = ({
  userNameVal,
  onChangeUsername = ()=>{}
}) => {

  return (
    <div className='relative h-screen '>
       <div className="absolute  top-0 h-full w-full flex items-center  bg-[#61617b5e] justify-center">
                <div className="  text-white   lg:h-[75%] lg:w-[35%] h-full w-full shadow-xl shadow-[#0b0b0b] bg-black lg:rounded-xl lg:px-5  ">

                    <div className=" flex flex-col  space-y-2  h-full p-3">
                        <div className="  grid grid-rows-2 h-fit  ">
                            <div className=' flex itece justify-center'>
                                <div className="  w-fit h-fit  overflow-hidden bg-white ">
                                    <img className=' scale-[1.59] ' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
                                </div>
                            </div>
                            <div className="  grid grid-rows-2  ">
                                <span className=' twitter-text lg:text-xl text-xxl font-bold'>What should we call you? </span>
                                <span className=' twitter-text text-gray-500 lg:text-[15px] text-[12px] '>Your @username is unique. You can always change it later.</span>
                            </div>
                        </div>
                        <div className=" w-full    ">


                            <div className=' flex  '>
                              <div className=' border-[2px]    border-[#31acca] w-full rounded-md px-3 py-1  relative flex flex-col'>
                                <label htmlFor="username" className=' twitter-text text-[15px] text-[#31acca]  ' >Username</label>
                                <span className=' flex items-center'>
                                <span className=' lg:text-[15px]  flex twitter-text  items-center  border-none '>
                                  <HiAtSymbol/>
                                  
                                </span>
                                <input onChange={onChangeUsername}  id='username' value={userNameVal} className=' border-none text-[14px] lg:text-[15px] twitter-text font-bold  w-full bg-inherit '  type="text" />
                                <span className=' text-green-500 lg:text-[15px] text-[14px] '>
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
                            <button className='  w-full transition-all duration-300 py-2 border-gray-500 text-gray-200 rounded-full twitter-text lg:text-[15px] text-[12px] border-[2px] font-bold hover:bg-[#35a7af]'>Skip for now </button>
                        </div>
                       </div>


                    </div>

                </div>
            </div>
    
      
    </div>
  )
}

export default UserName

