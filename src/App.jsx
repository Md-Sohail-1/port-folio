import React from 'react'

import Header from './Components/Header'
import LandingSection from './Components/LandingSection'
import About from './Components/About'
import ProjectsSection from './Components/ProjectsSection'
import SkillSection from './Components/SkillSection'
import ContactSection from './Components/ContactSection'

const App = () => {
  return (
    <div className=" font-poppins pt-16" >
      <Header />
      <LandingSection />
      <About />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
    {/*
      <div className="dark:bg-black py-10 px-10 dark">
    <div className="h-10 w-full bg-primary/50 ">App</div>
    <div className="h-10 w-full bg-primary/30 ">App</div>
    <div className="h-10 w-full bg-primary dark:bg-dark-primary dark:text-white">App</div>
    <div className="h-10 w-full bg-secondary/50">App</div>
    <div className="h-10 w-full bg-secondary/30">App</div>
    <div className="h-10 w-full bg-secondary dark:bg-dark-secondary dark:text-white">App</div>
  </div>
      <div className="dark:bg-black py-10 px-10">
    <div className="h-10 w-full bg-primary/50">App</div>
    <div className="h-10 w-full bg-primary/30 ">App</div>
    <div className="h-10 w-full bg-primary dark:bg-dark-primary ">App</div>
    <div className="h-10 w-full bg-secondary/50">App</div>
    <div className="h-10 w-full bg-secondary/30">App</div>
    <div className="h-10 w-full bg-secondary dark:bg-dark-secondary">App</div>
  </div>
    */}  
    </div>
  )
}

export default App