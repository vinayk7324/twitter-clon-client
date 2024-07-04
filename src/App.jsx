import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { api_url } from '../env-controller'


const App = () => {

  const [User,setUser] = useState()
 useEffect(()=>{
  const getUser =async ()=>{
    try {
      const res = await axios.get(`${api_url}/auth/login/success`,{withCredentials:true})
      if(res.data.success){
       const user = localStorage.getItem("user")
       if(user){
        localStorage.removeItem('user')
       }
        localStorage.setItem('user',JSON.stringify(res.data.user._json))
      }
      
    } catch (error) {
      console.log(error);
      
    }

  }
  getUser();

 },[]);
 const logoutHandler =  ()=>{
  window.open(`${api_url}/auth/logout`,"_self")

 }
 
 useEffect(()=>{
  const user = localStorage.getItem('user')
  if(user){
    setUser(JSON.parse(user));
  }
  

 },[])
  


  return (
  <div className="">
    <span> {User?.name}</span>
    <img src={User?.picture} alt="" />
    <span>{User?.email} </span>
    <button onClick={logoutHandler} >Logout</button>

   


  </div>
  )
}

export default App
