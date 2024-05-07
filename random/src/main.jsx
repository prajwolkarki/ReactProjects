import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About  from './components/About/About.jsx'
import Contact  from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Notfound from './components/Error/Notfound.jsx'
import User from './components/User/User.jsx'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import {Github,Loader}  from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path: '/',
//         element:<Home/>
//       },
//       {
//         path: '/about',
//         element:<About/>
//       },
//       {
//         path: '/contact',
//         element:<Contact/>
//       }
//     ]
//   },
  
// ])
const router = createBrowserRouter(createRoutesFromElements(
    
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userId' element={<User/>}/>
        <Route path='github' loader={Loader} element={<Github/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
