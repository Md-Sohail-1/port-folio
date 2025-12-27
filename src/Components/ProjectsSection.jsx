import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce UI",
      description: "A clean, responsive e-commerce interface built with React and Tailwind. Includes product pages, search, cart, wishlist, and checkout UI—everything except payment integration.",
      liveLink: "",
      githubLink: "",
    },
    {
      id: 2,
      title: "Real Estate Web App",
      description: "Built a responsive property platform with features to buy, sell, and search properties by location, price, and more. Used Tailwind CSS for UI and React Router Dom for routing.",
      liveLink: "",
      githubLink: "",
    },{
      id: 3,
      title: "Twitter Clone",
      description: "Built with Node.js, Express, EJS, and MongoDB. Features secure login with JWT, public & private posts, and full CRUD. Clean UI with vanilla CSS & JavaScript.",
      liveLink: "",
      githubLink: "",
    },
  ]

  return (
    <div className="h-auto w-full md:px-15 px-5 py-20  bg-white text-offblack dark:bg-dark-secondary/90 dark:text-offwhite/90" >
      <h2 className=" text-shadow-xs" >Projects</h2>
      <p className="text-center text-md my-4" >A few of the things I've built</p>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  auto-rows-auto" >
        {projects.map((project)=>(
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection