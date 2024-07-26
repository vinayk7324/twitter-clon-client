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
    element:<Home/>,
    children:[{
      path:"/signup",
      element:<SignUp/>
    },
  {
    path:"/OtpInput",
    element:<OtpInput/>
  },
  {
    path:"/password-input",
    element:<PasswordInput/>
  }

]

  },
  
  
  {
    path:"/login-failed",
    element:<LoginFailed/>

  },
  {
    path:'/practice',
    element:<Practice/>
  },
  {
    path:"/twitter-home-page",
    element:<TwitterUI/>,
    children:[
      {
      path:'/twitter-home-page',
      element:<Xhome/>
    },
    {
      path:"/twitter-home-page/explore",
      element:<TwitterUIRight/>
    },
    {
      path:"/twitter-home-page/notifications",
      element:<Notifications/>
    },

  ]
  }

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <ContextProvider>
   <React.StrictMode>
    <RouterProvider router={ router}/>
  </React.StrictMode>
 </ContextProvider>
)
