import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

function MobileNavlinks() {
  return (
    <div class="bg-green-200 lg:hidden sm:block">
        <div class="flex justify-between">
        <div>
            <p>Icon</p>
        </div>
        <div class="grid gap-10  bg-red-300">
        <Link to={About}>Services</Link>
      <Link to={About}>Services</Link>
      <Link to={About}>Services</Link>
      <Link to={About}>Services</Link>
        </div>
    </div>
    </div>
  )
}

export default MobileNavlinks
