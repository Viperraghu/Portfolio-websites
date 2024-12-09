import React from 'react'
import ResumeImg from "../assets/Project pic/resume.jpg"
export default function Resume() {
  const config = {
    link : "https://pdfobject.com/pdf/sample.pdf"
  }
  return <section  id="resume" className='md:flex bg-primary px-5'>
     <div className='py-5 md:w-1/2 flex md:justify-end justify-center'>
        <img  className=" w-[300px]"  src={ResumeImg}/>
     </div>
     <div className='md:w-1/2 flex justify-center'>
        <div className='md:flex md:flex-col justify-center text-white' >
            <h1 className='text-4xl border-b-4 border-secondary w-[130px] mb-4 font-bold'> Resume</h1>
            <p className='pb-5'> You Can View My Resume   <a className='btn' href={config.link}download> Download</a></p>
        </div>
     </div>

  </section>
}
