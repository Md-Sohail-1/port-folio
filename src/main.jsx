import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import LandingSection from './Components/LandingSection'
import About from './Components/About'
import ProjectsSection from './Components/ProjectsSection'
import SkillSection from './Components/SkillSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <LandingSection />
      <About />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
      <Footer/>
    </App>
  </StrictMode>,
)
