import React from 'react'

const LandingSection = () => {
  return (
    <div className="relative pt-16 bg-white text-offblack dark:text-secondary dark:bg-offblack w-full md:px-15  md:py-0 px-5 gap-12 md:gap-20" >
      <div className='md:h-screen  max-w-7xl mx-auto min-h-[calc(100vh-64px)] flex flex-col md:flex-row md:items-center md:justify-between  '>
      <div className="flex flex-col gap-4 self start md:w-1/2" >
        <h1 className="font-bold traking-widest text-shadow-xs" >I'm <span className='text-primary  italic'>Design</span> focused <span className='text-primary italic'>Frontend Developer</span> | <span className='text-primary italic'>UI Engineer</span></h1 >
        <p className="landing-para pr-12 md:pr-4 text-shadow-xs" >
          UI Engineer specializing in building clean, accessible and responsive user interfaces using <b>React, Tailwind CSS, and JavaScript,</b> with strong focus on <b>UI consistency, UX principles, and design-to-code workflows.</b>
        </p>
        <a href="../src/assets/sohailResume.pdf" role='button' download="sohailResume.pdf" className="mr-auto w-content text-sm text-white/90 bg-primary dark:text-white/80 shadow-sm text-shadow-md hover:bg-dark-primary dark:bg-dark-primary hover:dark:bg-dark-secondary px-4 md:px-8 py-3 md:py-3 rounded-md transition-all ease-in-out duration-200" >Download Resume</a>
      </div>
      <div className='landing-image bg-white rounded-full'>
        <img 
          alt="image" 
          src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-man-typing-program-language-web-application_18660-4882.jpg?semt=ais_hybrid&w=740&q=80"
          height="100%"
          width="100%"
          className=" mix-blend-multiply  rounded-full aspect-square dark:brightness-90 object-cover"
        />
      </div>
      </div>
    </div>
  )
}

export default LandingSection