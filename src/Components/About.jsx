import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full md:px-20 h-auto py-20 pb-20 px-5 bg-secondary mx-auto text-offblack/80 dark:bg-dark-secondary dark:text-secondary " >
      <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
      <h2 className="text-shadow-xs " >About Me</h2>
      <p className="text-center landing-para leading-8" >I'm a Frontend Engineer passionate about crafting modern, responsive websites and web apps. I focus on performance, accessibility, and clean UI/UX. I enjoy working with tools like 
        <span className='font-semibold dark:text-slate-100'> React.js</span>, 
        <span className='font-semibold dark:text-slate-100'> Tailwind CSS</span>, and
        <span className='font-semibold dark:text-slate-100'> JavaScript</span> to build engaging user interfaces/ experience.</p>
       <p className="text-center landing-para leading-8">I care deeply about UI consistency, spacing, typography, and user experience, and I enjoy turning thoughtful designs into production ready components. My work emphasizes design-to-code accuracy, real world UI states, and scalable frontend architecture.</p>
      </div>
    </div>
  )
        // <span className='text-indigo-500 font-semibold dark:text-slate-100'> Figma</span>,  
}

export default About