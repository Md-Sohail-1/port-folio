import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="h-auto bg-light-primary/60 shadow-md text-offblack/90 dark:bg-light-primary dark:text-offblack flex flex-col justify-between rounded-md hover:scale-105 transition-all duration-200 ease-in-out " >
      {/* <iframe 
        src="https://portfolio-sohail-snowy.vercel.app" width="full" height="400px"
        className="rounded-tr-xl rounded-tl-xl" >
      </iframe> */}
      <img src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-man-typing-program-language-web-application_18660-4882.jpg?semt=ais_hybrid&w=740&q=80"
      className='rounded-tr-md rounded-tl-md aspect-video border-b border-primary/20'
      height='100%'
      width='100%'/>
      <div className="h-content flex flex-col gap-2 px-4 py-4 md:px-6 md:pt-6 md:pb-8" >
        <h3>{project.title}</h3>
        <p className='product-para'>{project.description}</p>
        <div className='flex gap-2 items-center justify-start'>
          <a role="buttom" className="product-para px-6 py-2 md:py-3 bg-primary text-white dark:bg-primary  hover:bg-dark-primary drop-shadow-sm  rounded-md text-sm transition-all ease duration-100 " >View Live</a>
          <a role="buttom" className="product-para px-6 py-2 md:py-3 hover:bg-light-secondary/60 bg-white dark:bg-white dark:hover:bg-offwhite drop-shadow-sm text-offblack/90 dark:text-offblack rounded-md transition-all ease duration-100" >View Live</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard