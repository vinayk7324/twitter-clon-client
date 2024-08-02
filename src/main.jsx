import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home.jsx'
import { ContextProvider } from './context-api/contextAPI.jsx'
import SignUp from './CustomComponent/SignUp.jsx'
import OtpInput from './CustomComponent/OtpInput.jsx'
import PasswordInput from './CustomComponent/PasswordInput.jsx'
import Practice from './Practice.jsx'
import LoginFailed from './screens/LoginFailed.jsx'
import TwitterUI from './twitter-colon-web/TwitterUI.jsx'
import Xhome from './twitter-colon-web/UI-childrens/Xhome.jsx'
import Explore from './twitter-colon-web/Twitter-dashboard/Explore.jsx'
import Notifications from './twitter-colon-web/Twitter-dashboard/Notifications.jsx'
import TwitterUIRight from './twitter-colon-web/TwitterUIRight.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<TwitterUI/>,
    children:[
      {
      path:'/',
      element:<Xhome/>
    },
    {
      path:"/explore",
      element:<TwitterUIRight/>
    },
    {
      path:"/notifications",
      element:<Notifications/>
    },

  ]
  }
  ,
  {
    path:"/auth",
    element:<Home/>,
    children:[{
      path:"/auth/signup",
      element:<SignUp/>
    },
  {
    path:"/auth/OtpInput",
    element:<OtpInput/>
  },
  {
    path:"auth/password-input",
    element:<PasswordInput/>
  },
 

]

  },
  {
    path:"login-failed",
    element:<LoginFailed/>

  },
  {
    path:'practice',
    element:<Practice/>
  },
  
  
 

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <ContextProvider>
   <React.StrictMode>
    <RouterProvider router={ router}/>
  </React.StrictMode>
 </ContextProvider>
)
