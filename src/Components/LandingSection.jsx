import { ReactTyped } from 'react-typed'

const LandingSection = () => {
  const typedStrings = ["Frontend Engineer UI", "UI Engineer", "Product Frontend Engineer"]

  return (
    <main className="relative pt-16 bg-white  text-offblack dark:text-secondary dark:bg-offblack w-full min-h-[calc(100vh-64px)] md:px-15  md:py-0 px-5 " >
      <div className='md:h-screen  max-w-7xl mx-auto  flex gap-12 md:gap-20 flex-col md:flex-row md:items-center md:justify-between pb-10 md:pb-0 '>
      <div className="flex flex-col gap-2 self start md:w-1/2" >
        <h1 className="font-bold traking-widest leading-10 md:leading-16" >
          I'm <ReactTyped className=" text-primary dark:text-blue-400 font-semibold" 
           strings={typedStrings} 
           typeSpeed={80} 
           backSpeed={60} 
           loop /></h1 >
        <p className="landing-para pr-8 md:pr-4  leading-8" >
          UI Engineer specializing in building clean, accessible and responsive user interfaces using 
          <strong> React, Tailwind CSS, and JavaScript, </strong>
          with strong focus on 
          <strong> UI consistency, UX principles, and design-to-code workflows.</strong>
        </p>
        <a href="../src/assets/sohailResume.pdf" aria-label="dowmload resume" download="sohailResume.pdf" className="mr-auto w-content text-sm text-white/90 bg-primary dark:text-white/80 shadow-sm text-shadow-md hover:bg-dark-primary focus:bg-primary/80 dark:bg-dark-primary hover:dark:bg-primary focus:dark:bg-dark-primary/80 px-4 md:px-8 py-3 md:py-3 rounded-md transition-all ease-in-out duration-200 mt-4" >Download Resume</a>
      </div>
      <div className='landing-image bg-white rounded-full'>
        <img 
          alt="vector illutration" 
          fetchPriority="high"
          src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-man-typing-program-language-web-application_18660-4882.jpg?semt=ais_hybrid&w=740&q=80"
          height="100%"
          width="100%"
          className=" mix-blend-multiply  rounded-full aspect-square dark:brightness-90 object-cover"
        />
      </div>
      </div>
    </main>
  )
}

export default LandingSection