import React from 'react'
import NavLinks from './NavLinks'
import MobileNavlinks from './MobileNavlinks'

function Navbar() {
  return (
    <div>
      <NavLinks class="sm:hidden" />
      <MobileNavlinks class="bg-black hidden" />
    </div>
  )
}

export default Navbar
