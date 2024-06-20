import React from 'react'
import Navbar from './Navbar'
// import Header from './Header'
import { Outlet } from 'react-router-dom'

function Sharedlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Sharedlayout

