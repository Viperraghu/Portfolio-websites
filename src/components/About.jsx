import React from 'react'
import AboutImg from "../assets/Project pic/about.png"

export default function About() {
  const config = {
    line1 : " Hii , My Name is Raghuraman L .. I am a Full Stack Web Developer . I Built Some Projects With React.js , TailwindCSS ",
    line2 : " I am Proficient in Fronted Skills Like React.js , TailwindCSS , Express JS , JavaScript , CSS , HTML" ,
    line3 : " In Backend I Know Node.js , MongoDB , SQL , Python "
  }
  return <section className=' flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='md:w-1/2 py-1'>
         <img src={AboutImg}/>
    </div>
    <div className='md:w-1/2 flex md:justify-center '>
      <div className='flex flex-col text-white justify-center '>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[175px] font-bold'> About Me</h1>
          <p className='pb-5'>{config.line1}</p>
          <p className='pb-5'>{config.line2}</p>
          <p className='pb-5'>{config.line3}</p>
      </div>
    </div>

  </section>
}
