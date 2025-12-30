import { useRef, useEffect } from 'react'

import Header from './Components/Header'
import LandingSection from './Components/LandingSection'
import About from './Components/About'
import ProjectsSection from './Components/ProjectsSection'
import SkillSection from './Components/SkillSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'


const App = () => {
  const appRef = useRef(null)
  
  function toggleTheme (theme) {
    if(theme == 'light'){
      appRef.current.classList.toggle("dark")
      return
    }
    appRef.current.classList.remove("dark")
  }
  
  function assignDefaultTheme () {
    if(window.localStorage.getItem('theme') === null){
      window.localStorage.setItem('theme', 'light')
      return
    }
  }

  useEffect(()=>{
    assignDefaultTheme()
  },[])

  return (
    <div ref={appRef} className={`font-poppins pt-16`} >
      <Header toggleFunc={toggleTheme}/>
      <LandingSection />
      <About />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default App