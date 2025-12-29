import {useState, useEffect} from 'react'
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = ({toggleThemeFunc}) => {
  const [showNavigation, setShowNavigation] = useState(false)
  const [theme, setTheme] = useState()
  
  
  //alert(JSON.stringify(appRef))
  return (
    <header className="h-16 top-0  mx-auto fixed z-50 w-full bg-primary text-secondary/90 dark:text-secondary/90 dark:bg-dark-primary dark:border-b dark:border-offblack/60 md:px-15 px-5" >
      <div className='h-16 max-w-7xl mx-auto flex items-center justify-between '>
      <h3 className="text-shadow-xs relative z-50 text-white font-bold uppercase" >Sohail</h3>
      <ul className="relative z-50 gap-4 hidden md:flex ">
        <a href="#about" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >About</li></a>
        <a href="#skills" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Skills</li></a>
        <a href="#projects" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Projects</li></a>
        <a href="#contact" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-white dark:hover:hover:text-white transition-all duration-100 ease-in leading-4 hover:underline-offset-6 hover:underline decoration-white dark:decoration-white" >Contact</li></a>
      </ul>
      <span className="hidden md:flex text-2xl" onClick={()=>toggleThemeFunc()} >{showNavigation ? <FaToggleOff /> : <FaToggleOn />}</span>
      <div className="md:hidden flex gap-4 items-center text-xl" >
        <span className='' onClick={()=>toggleThemeFunc()} >{showNavigation ? <FaToggleOff /> : <FaToggleOn />}</span>
        <button className="md:hidden" onClick={()=> setShowNavigation(!showNavigation)}>{showNavigation ? <RxCross2 /> : <HiMenu />}</button>
      </div>
      <ul className={`${showNavigation ? 'translate-x-0' : ''} transition -translate-x-full absolute z-10 gap-4 md:hidden h-[calc(100vh - 64px)] w-full top-16 left-0 bg-white dark:bg-offblack text-black/80 dark:text-white/80 pt-4 px-4 flex flex-col py-8`}>
        <a href="#about" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >About</li></a>
        <a href="#skills" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Skills</li></a>
        <a href="#projects" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Projects</li></a>
        <a href="#contact" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Contact</li></a>
      </ul>
      </div>
    </header>
  )
}

export default Header