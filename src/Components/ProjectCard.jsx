import React from 'react'

const ProjectCard = () => {
  return (
    <div className="bg-primary/20 flex flex-col justify-between h-auto rounded-xl" >
      <iframe 
        src="https://portfolio-sohail-snowy.vercel.app" sandbox width="full" height="400px"
        className="rounded-tr-xl rounded-tl-xl" >
      </iframe>
      <div className="flex flex-col gap-2 p-4" >
        <h3>title</h3>
        <button role="redirect" className="px-4 py-2 bg-primary mr-auto text-white rounded-md text-sm" >View Live</button>
      </div>
    </div>
  )
}

export default ProjectCard