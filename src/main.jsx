import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home.jsx'
import { ContextProvider } from './context-api/contextAPI.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>

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
