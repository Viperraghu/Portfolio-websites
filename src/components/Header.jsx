import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
export default function Header() {
  const[toggleMenu , setToggleMenu]=useState(false);
  return <header className='flex  justify-between px-5 py-5 bg-secondary '>
      <a className=' font-extrabold text-white  ' href='#'>Raghuraman L</a>
      <nav className='hidden md:block'>
        <ul className='flex text-white'>
          <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contact</a></li>
        </ul>
      </nav>
      {toggleMenu && <nav className='block md:hidden'>
        <ul className='flex flex-col text-white mobile-nav' onClick={()=>setToggleMenu(!toggleMenu)}>
          <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contact</a></li>
        </ul>
      </nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu) } className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
      
  </header>
}
