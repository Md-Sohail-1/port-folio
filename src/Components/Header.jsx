import {useState, useEffect} from 'react'
import { IoIosMoon } from "react-icons/io";
import { LuSunMedium }from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = ({toggleFunc}) => {
  const [showNavigation, setShowNavigation] = useState(false)
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'))

  function toggleTheme () {
    let currentTheme = window.localStorage.getItem('theme')
    if(currentTheme == 'light'){
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
      toggleFunc('light')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
      toggleFunc('dark')
    }
  }  


  return (
    <nav className="h-16 top-0  mx-auto sticky z-50 w-full bg-primary text-secondary/90 dark:text-secondary/90 dark:bg-offblack dark:border-b dark:border-offblack/60 md:px-15 px-5" >
      <div className='h-16 max-w-7xl mx-auto flex items-center justify-between dark:border-b dark:border-white/40'>
      <h3 className="relative z-50 text-white font-semibold uppercase" >Portfolio</h3>
      <ul className="relative z-50 gap-4 hidden md:flex ">
        <li ><a aria-label="goto home page" href="#hero"  className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Home</a></li>
        <li ><a aria-label="about me" href="#about"  className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >About</a></li>
        <li ><a aria-label="view projects " href="#projects" className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Projects</a></li>
        <li ><a aria-label="view skills" href="#skills" className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Skills</a></li>
        <li ><a aria-label="get contact" href="#contact_us" className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Contact</a></li>
      </ul>
      <button aria-label="toggle theme" className="theme-toggler hidden md:flex text-2xl text-white hover:text-secondary" onClick={()=>toggleTheme()} >{theme === 'light' ? <IoIosMoon /> : <LuSunMedium />}</button>
      <div className="md:hidden flex gap-4 items-center text-2xl text-secondary" >
        <button aria-label="toggle theme" className='theme-toggler' onClick={()=>toggleTheme()} >{theme === 'light' ? <IoIosMoon /> : <LuSunMedium />}</button>
        <button aria-label="toggle navbar" className="md:hidden" onClick={()=> setShowNavigation(!showNavigation)}>{showNavigation ? <RxCross2 /> : <HiMenu />}</button>
      </div>
      <ul className={`${showNavigation ? 'translate-x-0' : ''} transition -translate-x-full absolute z-10 gap-4 md:hidden h-[calc(100vh - 64px)] w-full top-16 left-0 bg-white dark:bg-offblack text-black/80 dark:text-white/80 pt-4 px-4 flex flex-col py-8 border-b border-slate-300/50`}>
        <li ><a aria-label="Home" href="#hero" className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Home</a></li>
        <li ><a aria-label="about me" href="#about" className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >About</a></li>
        <li ><a aria-label="view projects" href="#projects" className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Projects</a></li>
        <li ><a aria-label="view skills " href="#skills" className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Skills</a></li>
        <li ><a aria-label="get contact" href="#contact_us" className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Contact</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Header