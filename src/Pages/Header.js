import React from 'react'
// import Navbar from './Navbar'
import { GoArrowRight } from "react-icons/go";

function Header() {
  return (
    <div class="bg-[url('./Images/will2.jpg')] w-full bg-no-repeat h-[750px]">
      {/* <Navbar /> */}
      <div class="flex flex-col text-center justify-center pt-48">
      <div> 
        <h2 class="text-[#E7E7E7] text-[60px] font-[300px] leading-[5rem]">TRANSFORMING YOUR <br/> BUSINESS INTO <span class="text-[#E7E7E7] font-['montserrat'] text-[80px] font-[700px] "> A <br/> DIGITAL REALITY </span></h2>
      </div>
      <div class="flex items-center justify-center">
        <a href="/#Explore">
        <button class=" flex items-center border-2 gap-2 py-2 px-4 mt-10 text-[#E7E7E7] rounded-[10px] hover:bg-[#2193B0] hover:border-0 hover:gap-4">
          Explore Our Services <GoArrowRight size={20} />
        </button>
        </a>

      </div>
      </div>
    </div>
  )
}

export default Header

