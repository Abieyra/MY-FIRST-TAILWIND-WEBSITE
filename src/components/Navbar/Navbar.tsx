import Link from "next/link"
import React from 'react'

const Navbar = () => {
  return (
    <div className = 'bg-pink-400 h-12'>
        <div className ='text-yellow-300 flex justify-between items-center'>
<h1 className = 'text-xl m-2 cursor-pointer'>NAVBAR</h1>
<ul className = 'flex gap-3 mr-4 cursor-pointer'>
 
<li><Link className=" hover:text-blue-700" href="/">Home</Link></li>
<li><Link className=" hover:text-blue-700" href="/about">About</Link> </li>
<li><Link className=" hover:text-blue-700" href="contact">Contact</Link></li>
<li><Link  className=" hover:text-blue-700" href="services">Services</Link></li>

</ul>

    </div>
    </div>
  )
}

export default Navbar;
