import React from 'react'
import twitterIcon from '../assets/Designer.png'
const AppLoader = () => {
  return (
    <div className=' h-screen bg-black  w-full flex justify-center items-center '>
        <span className=' flex items-center justify-center rounded-full overflow-hidden h-12 w-12  '>
            <img src={twitterIcon} className='  scale-[1.34]   border' alt="twitter-loader" />
        </span>
      
    </div>
  )
}

export default AppLoader
