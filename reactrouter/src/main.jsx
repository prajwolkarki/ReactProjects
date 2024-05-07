import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Root from './routes/root.jsx'
import ErrorPage from './routes/error-page'
import './index.css'
import Fetch from './Fetch.jsx'
import Marks from './Marks.jsx'
const router  = createBrowserRouter([
  { 
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/fetch',
    element: <Fetch/>
  },
  {
    path:'/memo',
    element: <Marks/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
