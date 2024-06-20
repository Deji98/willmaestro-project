import React from 'react'
import { Link } from 'react-router-dom'
import Will from '../Images/WillMaestro Logo b 1.png'


function NavLinks() {
  return (
    <div class="lg:flex sm:hidden justify-between items-center bg-[#000000]">
        <div class='pt-0'>
        <Link to="/">
        <p class='text-green-300'><img width="150px" height="100px" src={Will} alt="logo" /></p>
        </Link>
        </div>
        <div class="flex gap-10 items-center text-[#E7E7E7] mr-5 font-['montserrat']">

          <a class="hover:text-[#2193B0]" href="/#Serve">SERVICES</a>

      <Link class="hover:text-[#2193B0]" to="About">ABOUT US</Link>

      <Link class="hover:text-[#2193B0]" to="About">WHY US?</Link>

      <a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-2 px-6 rounded-[10px] hover:bg-[#E7E7E7] hover:text-[#2193B0]">
          CONTACT US
     </button>
      </a>
        </div>
    </div>
  )
}

export default NavLinks

