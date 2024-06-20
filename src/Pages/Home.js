import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Ellipse05 from '../Images/Ellipse 5.png'
import Ellipse06 from '../Images/Ellipse 6.png'
import Ellipse07 from '../Images/Ellipse 7.png'
import Services from './Services'
import Frame from '../Images/Frame 18.jpg'
import Frame2 from '../Images/Frame 19.jpg'
import Frame3 from '../Images/Frame 20.jpg'
import Frame4 from '../Images/Frame 21.jpg'
import Frame5 from '../Images/Frame 22.jpg'
import Frame6 from '../Images/Frame 23.jpg'
import Frame7 from '../Images/Frame 24.jpg'
import Frame8 from '../Images/Frame 25.jpg'
import Frame9 from '../Images/Frame 26.jpg'
import Frame10 from '../Images/Frame 27.jpg'
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { RiRefreshFill } from "react-icons/ri";



function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
    <div class="flex justify-between pt-10 p-2">
      <div class="font-['montserrat'] font-light pl-6">
      <h1 class="text-[64px] leading-[4rem]  w-[32rem]">Unlock Your Business' Full Potential  </h1>
      <p class="font-light text-[30px] leading-[2rem] w-[42rem] pt-4 italic">
      Whether you're looking to optimize your online presence, streamline your operations, 
      or launch a new digital product, at <span class="font-bold">Willmaestro Global IT</span>, 
      our consultancy services provide the expertise and guidance you need to achieve your goals.
      </p>
      </div>

      <div class="relative mr-[20px] pt-[5rem]">
        <img class="top-0 right-0 w-[200px]" src={Ellipse05} alt={Ellipse05} />
        <img class="absolute top-0 right-0 mt-[220px] mr-28 w-[100px]" src={Ellipse07} alt={Ellipse07}  />
        <img class="absolute w-[120px] ml-16 mt-[-30px] "  src={Ellipse06} alt={Ellipse06} />
      </div>
    </div>

    {/* Services */}
    <div class="flex text-center justify-center items-center justify-center items-center bg-[url('./Images/abg-100.png')] w-[full] bg-no-repeat h-[850px]" id="Serve">
        <Services />
      </div>


 {/* Explore our services */}
 <div id="Explore">

  {/* Software Development */}
 <div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame} alt={Frame} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] w-[700px] absolue">Software Development</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-2">
A service that provides custom <br />
software design and development, <br />
as well as integration of existing <br />
 software application into larger <br />  system.
</p>
  <a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Blockchain */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame2} alt={Frame2} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Blockchain App Development</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our team of expert web designers <br /> 
creates captivating and visually <br /> 
stunning websites that leave a <br />
lasting impression on your visitors. <br />
We believe that great design not <br />
only attracts attention but also <br />
enhances user experience <br />
and drives conversions.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Web design */}
<div class="flex text-center  space-x-[290px] pl-14 pr-8 py-14">

<div>
<img class="w-[400px]" src={Frame3} alt={Frame3} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Web Design</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our team of expert web designers <br /> 
creates captivating and visually <br /> 
stunning websites that leave a <br />
lasting impression on your visitors. <br />
We believe that great design not <br />
only attracts attention but also <br />
enhances user experience <br />
and drives conversions.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* UI/UX Design */}
<div class="flex text-center  space-x-[290px] pl-14 pr-8 py-14">

<div>
<img class="w-[400px]" src={Frame4} alt={Frame4} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">UI/UX Design</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
We create user-centered UI/UX <br /> 
designs that prioritize the needs <br /> 
and preferences of your target <br /> 
audience. Our designs are crafted <br /> 
to delight users, enhance their <br /> 
experience, and drive engagement <br /> 
and conversion rates.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Graphics Design */}
<div class="flex text-center  space-x-[250px] pl-14 pr-8 py-14">

<div>
<img class="w-[400px]" src={Frame5} alt={Frame5} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Graphics Design</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our team of talented graphic <br /> 
designers creates stunning visuals <br /> 
that capture attention and leave a <br /> 
lasting impression. From logos to <br /> 
marketing materials, we craft <br /> 
designs that elevate your brand <br /> 
and help you stand out from the <br />
competition.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Email */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame6} alt={Frame6} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Email and Digital Marketing</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our digital marketing experts <br /> 
leverage advanced targeting <br /> 
techniques to ensure your <br /> 
campaigns are seen by the right <br /> 
people, at the right time, and on <br /> 
the right platforms, maximizing <br /> 
your chances of success.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Creative and content writing */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame7} alt={Frame7} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Creative and Content Writing</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our content writing services are <br /> 
versatile and include a variety of <br /> 
formats, such as blog posts, articles, <br /> 
product descriptions, and more. We <br /> 
work with you to create content <br /> 
that meets your specific needs and <br /> 
goals.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* SEO */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame8} alt={Frame8} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Search Engine Optimization - SEO</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Boost your online visibility and <br /> 
attract organic traffic with our <br /> 
strategic SEO services. We conduct <br /> 
in-depth keyword research, <br /> 
optimize your website's structure <br /> 
and content, and build high-quality <br /> 
backlinks to improve your search <br /> 
engine rankings and drive targeted <br /> 
traffic to your site.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Social Media Management */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[500px]" src={Frame9} alt={Frame9} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Social Media Management</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our social media management <br /> 
services are designed to help <br /> 
businesses establish a strong and <br /> 
influential presence across social <br /> 
media platforms. From content <br /> 
creation to community <br /> 
management, we have the <br /> 
expertise to grow your audience, <br /> 
engage your followers, and drive <br /> 
meaningful results.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>

{/* Business Consultancy */}
<div class="flex text-center  space-x-24 pl-14 pr-8 py-14">

<div>
<img class="w-[450px]" src={Frame10} alt={Frame10} />
</div>
<div class="text-[#242424]">

<div>
   <h1 class="text-[64px] leading-[4.0rem]">Business Consultancy</h1>
 </div>   
<div>
<p class="font-light leading-[1.5rem] tracking-[2px] mt-4">
Our business consultancy services <br />
are designed to help businesses <br /> 
navigate challenges, unlock <br /> 
opportunities, and achieve <br /> 
sustainable growth. We offer <br /> 
strategic guidance and practical <br /> 
solutions tailored to your unique <br /> 
 needs, empowering you to make <br /> 
 informed decisions and drive <br />
  meaningful results.
</p>

<a href="/#contactus">
      <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-4 px-6 mt-6 rounded-[10px]">
          CONTACT US
      </button>
   </a>

</div>

</div>

</div>



 </div>

 {/* contact bottom */}
 <div class="bg-[url('./Images/lbg.jpeg')] w-full bg-no-repeat h-[500px]" id="contactus">
 <div class="flex flex-col text-center  text-[#E7E7E7] pt-4">
 <h2 class="text-[40px] font-light">Contact Us</h2>
 <p class="pt-4 text-[20px]">Our team works closely with your business to understand your vision and <br /> goals, 
  bringing a collaborative and creative approach to every of your <br /> project.</p>
 </div>

 <div class="flex text-center items-center justify-center text-[#E7E7E7] space-x-6 px-14 pt-10 cursor-pointer">
  {/* Email */}
  <div class="flex flex-col text-center items-center justify-center">
  <HiOutlineMail size={20} />
  <p>Email Us</p>
  <p class="text-[20px] font-bold">willmaestroglobalit@gmail.com</p>
  </div>

  {/* Call */}
  <div class="flex flex-col text-center items-center justify-center">
  <IoCallOutline size={20} />
  <p>Call Us</p>
  <p class="text-[20px] font-bold">+2349065967453</p>
  </div>

  {/* Partner */}
  <div class="flex flex-col text-center items-center justify-center">
  <Link class="flex flex-col text-center items-center justify-center" to="Partner">
  <RiRefreshFill size={20} />
  <p>Partner with Us</p>
  </Link>
  <p class="text-[20px] font-bold">Let's innovate Together</p>
  </div>



 </div>

  {/* form */}
  <div class="text-[#E7E7E7] text-center font-bold pt-10">
    <p>To Get the Latest Updates & News</p>
  </div>

  <div class="flex justify-center pt-4 space-x-2">

  <div>
  <form>
  <input class="appearance-none w-[700px] block bg-gray-200 text-gray-700 border border-gray-200 rounded-[10px] py-3 px-4 leading-tight" id="grid-zip" type="Email" placeholder="Your email address" />
  </form>
 </div>

 <div>
 <a href="willmaestrostroglobalit@gmail.com">
 <button class="bg-[#2193B0] text-[#E7E7E7] font-bold py-2 px-6 rounded-[10px]">
  Subscribe
</button>
</a>
 </div>

 </div>

 
 
 </div>


      




    </div>

  
  )
}

export default Home
