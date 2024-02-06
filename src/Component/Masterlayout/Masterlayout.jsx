import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Masterlayout() {
  return (
    <div>
    <Navbar/>
    <div>
<Outlet/>
</div>
<Footer/>
</div>
  )
}

