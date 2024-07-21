import React, { useEffect, useState } from 'react'

const Practice = () => {
  const state = useState(false);
  console.log(state[0]);

  
  return (
    <div className=' flex flex-col'>
    <span><button onClick={()=>state[1](!state[0])}> Click me</button></span>
    <span> stateValue:{state[0]?"true":"false "}</span>
      
    </div>
  )
}

export default Practice
