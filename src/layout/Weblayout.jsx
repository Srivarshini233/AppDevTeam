import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/web/Footer'
import Navbar from '@/components/web/Navbar'
const Weblayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'> 
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Weblayout
