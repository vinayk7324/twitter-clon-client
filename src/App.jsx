import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { api_url } from '../env-controller'
import UserName from './CustomComponent/UserName'
import AppLoader from './CustomComponent/AppLoader'
import TwitterUI from './twitter-colon-web/TwitterUI'

import TwitterDashboard from './twitter-colon-web/TwitterDashboard'
import TwitterUIRight from './twitter-colon-web/TwitterUIRight'


const App = () => {
  const [appLoader,setAppLoader] = useState(true);
  const [userNameVal,setUsernameVal] =  useState('kumarvinay')
 const  onChangeUsername = (e)=>{
  setUsernameVal(e.target.value)

  }


  useEffect(()=>{
    setTimeout(() => {
      setAppLoader(false)
      
    }, 3000);

  },[])


  return (
<div className="h-screen w-full text-white twitter-text">

 
   

  


  </div>
  )
}

export default App
