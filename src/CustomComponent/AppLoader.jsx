import React from 'react'
import twitterIcon from '../assets/Designer.png'
const AppLoader = () => {
  return (
    <div className=" h-screen absolute w-full z-[4]">
      <div className='  bg-black h-full  w-full flex justify-center items-center '>
        <span className=' flex items-center justify-center rounded-full overflow-hidden h-12 w-12  '>
            <img src={twitterIcon} className='  scale-[1.34]   border' alt="twitter-loader" />
        </span>
      
    </div>
    </div>
  )
}

export default AppLoader
