import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const LandingSection = lazy(()=> import('./Components/LandingSection'))
const About = lazy(()=> import('./Components/About'))
const ProjectsSection = lazy(()=> import('./Components/ProjectsSection'))
const SkillSection = lazy(()=> import('./Components/SkillSection'))
const ContactSection = lazy(()=> import('./Components/ContactSection'))
const Footer = lazy(()=> import('./Components/Footer'))
import Loading from './Components/Loading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
    <Suspense fallback={<Loading />} >
      <LandingSection />
      <About />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
      <Footer/>
    </Suspense>
    </App>
  </StrictMode>,
)
