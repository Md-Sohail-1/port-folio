import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full md:px-20 h-auto py-20 pb-20 px-5 bg-secondary mx-auto text-offblack/80 dark:bg-dark-secondary dark:text-secondary " >
      <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
      <h2 className="text-shadow-xs " >About Me</h2>
      <p className="text-center landing-para" >I'm a frontend developer passionate about crafting modern, responsive websites and web apps. I focus on performance, accessibility, and clean UI/UX. I enjoy working with tools like React, Tailwind CSS, and JavaScript to build engaging user interfaces/experience.</p>
      <p className="text-center landing-para" >When I'm not coding, you'll find me exploring design trends, contributing to open source, or sketching UI ideas.</p>
      </div>
    </div>
  )
}

export default About