import React from 'react'
import ProjectCard from './ProjectCard'
import eComImage from "../assets/eCom.png"
import RealEstateImg from "../assets/realEstate.png"
import Healthcare from "../assets/healthcare.png"

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce UI",
      description: "A clean, responsive e-commerce interface built with React and Tailwind. Includes product pages, search, cart, wishlist, and checkout UI—everything except payment integration.",
      image: eComImage,
      liveLink: "https://e-commerce-psi-two-62.vercel.app",
      githubLink: "https://github.com/Md-Sohail-1/e-com",
    },
    {
      id: 2,
      title: "Real Estate Web App",
      description: "Built a responsive property platform with features to buy, sell, and search properties by location, price, and more. Used Tailwind CSS for UI and React Router Dom for routing.",
      image: RealEstateImg,
      liveLink: "https://realestate-peach-seven.vercel.app",
      githubLink: "https://github.com/Md-Sohail-1/realestate",
    },
    {
      id: 3,
      title: "Healthcare Single-Page Web UI",
      description: "A clean and responsive healthcare website UI featuring service details, doctor profiles, and appointment booking button with a trust-focused design approach.",
      image: Healthcare,
      liveLink: "https://medical-healthcare-omega.vercel.app/",
      githubLink: "https://github.com/Md-Sohail-1/Medical-Healthcare"
    }
  ]

  return (
    <div id='projects' className="h-auto w-full md:px-15 px-5 py-20  bg-white text-offblack/70 dark:bg-offblack dark:text-secondary/70" >
      
      <div className='max-w-7xl mx-auto'>
      <h2 className=" text-shadow-xs text-offblack dark:text-white" >Projects</h2>
      <p className="text-center text-md pb-8 product-para" >A few of the things I've built</p>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  auto-rows-auto" >
        {projects.map((project)=>(
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default ProjectsSection