import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <div className="h-auto w-full md:px-15 px-5 py-20 font-poppins bg-offwhite text-offblack/90 dark:bg-offblack/90 dark:text-offwhite/90" >
      <h2 className="text-center text-2xl font-bold text-shadow-xs" >Projects</h2>
      <p className="text-center text-md my-4" >A few of the things I've built</p>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-cols-in auto-rows-auto" >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectsSection