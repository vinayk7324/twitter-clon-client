import React ,{useEffect, useRef} from 'react'
import ToggleItem1 from './ToggleItem1'
import ToggleItem2 from './ToggleItem2'

const ToggleOrigin = ({slug=""}) => {
    const toggleItems = [
        {
            slug:"/replySetting",
            element:<ToggleItem1/>
        },
        {
            slug:"/dashboard-more",
            element:<ToggleItem2/>
        },

    ]
    
 
    
  return (
   <>
   <div  className="  ">
    {
        toggleItems.map((ele,index)=>(
            <div key={index} className="">
                {
                    ele.slug==slug && ele.element
                }


            </div>
        ))
    }
   </div>

   </>
  )
}

export default ToggleOrigin
