import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="group h-auto bg-secondary shadow-[0px_0px_1px_rgba(0,0,0,0.4)] hover:shadow-[0px_0px_2px_rgba(0,0,0,0.4)] text-offblack/90 dark:bg-dark-secondary dark:text-secondary/90 flex flex-col justify-between rounded-md hover:-translate-y-2 transition transition-discrete duration-300" >
      <img 
        src={project.image}
        alt={project.title}
        className='rounded-tr-md rounded-tl-md aspect-video border-b border-primary/20'
        height='100%'
        width='100%'/>
      <div className="h-full flex flex-col justify-center gap-2 px-4 py-4 md:px-6 md:pt-6 md:pb-8" >
        <h3>{project.title}</h3>
        <p className='product-para md:leading-7 h-full '>{project.description}</p>
        <div className='flex gap-2 items-center justify-start'>
          <a href={project.liveLink} aria-label="view website live" className="product-para px-6 py-2 md:py-3 bg-primary text-white dark:bg-dark-primary/90 dark:hover:bg-primary hover:bg-dark-primary drop-shadow-sm  rounded-md text-sm transition-all ease duration-100 " >View Live</a>
          <a href={project.githubLink} aria-label="view github repo" className="product-para px-6 py-2 md:py-3 bg-white hover:bg-white/80 dark:bg-secondary dark:hover:bg-white drop-shadow-sm text-offblack/90 dark:text-offblack rounded-md transition-all ease duration-100" >Github Repo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard