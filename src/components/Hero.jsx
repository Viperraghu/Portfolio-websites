import React from 'react'
import { FaTwitter ,FaFacebook ,FaLinkedin } from "react-icons/fa";
import HeroImg from "../assets/Project pic/hero.png"
export default function Hero() {
const config ={
    subtitle : "Im a Full-stack developer and Designer . "
} 
return <section className='md:flex  px-5 py-5 bg-primary justify-center '>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl sriracha-regular py-2'>hii , <br/>Im Raghuraman <span className='text-black'>L</span></h1>
            <p className='text-2xl py-4'>{config.subtitle}</p>
        <div className="flex py-10 ">
            <a href='' className='hover:text-white pr-5 ' ><FaTwitter size={40}/></a>
            <a href=''className='hover:text-white pr-5' ><FaFacebook size={40}/></a>
            <a href=''className='hover:text-white' ><FaLinkedin size={40}/></a>
         </div>
      </div>
      
    <img className="md:w-1/3" src={HeroImg}/>
  </section>
}
