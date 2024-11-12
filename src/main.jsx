import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.tsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx'
import Head from './components/header/Head.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Shoping from './components/shoping/Shoping.jsx'
import Footer from './components/footer/Footer.jsx'
// import Card from './components/card/Card.jsx'
import Addcart from './components/addcart/Addcart.jsx'
// import {createBrouserRouter}  from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<> <Head /><Home /><Footer /></>
  },
  {
    path:"/Shoping",
    element:<> <Head /><Shoping /><Footer /></>
  },
  {
    path:"/Contact",
    element:<> <Head /><Contact /><Footer/></>
  },
  {
    path:"/About",
    element:<> <Head /><About /><Footer/></>
  },
  {
    path:"/Addcart",
    element:<> <Head /><Addcart /><Footer/></>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>

  </StrictMode>,
)
