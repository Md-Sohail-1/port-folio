import React from 'react'

const LandingSection = () => {
  return (
    <div className="md:px-15 font-poppins relative top-16 md:top-0 bg-offwhite text-black/80 dark:text-offwhite/80 dark:bg-offblack/90 w-full md:h-screen min-h-[calc(100vh-64px)] flex flex-col md:flex-row md:items-center md:justify-center pt-40 px-4 gap-12 md:gap-20" >
      <div className="flex flex-col gap-4" >
        <h1 className="text-4xl font-bold traking-widest text-shadow-xs" >I'm UI/UX Designer </h1>
        <p className="text-sm pr-12 md:pr-4 text-shadow-xs" >I’m MD Sohail who enjoys building clean, responsive, and user-friendly web design.</p>
        <button role="download" className="mr-auto w-content text-sm text-white/90 bg-primary shadow-sm text-shadow-md hover:bg-dark-primary dark:bg-dark-primary hover:dark:bg-dark-primary/80 px-6 py-2 rounded-md" >Download Resume</button>
      </div>
      <div>
        <img 
          alt="image" 
          src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-man-typing-program-language-web-application_18660-4882.jpg?semt=ais_hybrid&w=740&q=80"
          height="100%"
          width="100%"
          className="mix-blend-multiply dark:mix-blend-color-dodge rounded-full aspect-1/1 dark:brightness-80 object-cover"
        />
      </div>
    </div>
  )
}

export default LandingSection