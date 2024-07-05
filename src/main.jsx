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

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[{
      path:"signup",
      element:<SignUp/>
    },
  {
    path:"OtpInput",
    element:<OtpInput/>
  },
  {
    path:"password-input",
    element:<PasswordInput/>
  }

]

  },
  {
    path:"twitter-home-page",
    element:<App/>

  }
  ,
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <ContextProvider>
   <React.StrictMode>
    <RouterProvider router={ router}/>
  </React.StrictMode>
 </ContextProvider>
)
