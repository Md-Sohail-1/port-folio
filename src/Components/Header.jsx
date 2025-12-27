import {useState, useEffect} from 'react'
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  
  
  return (
    <header className=" font-poppins h-16 fixed top-0 z-50 w-full bg-primary text-offwhite dark:text-offwhite/90 dark:bg-offblack/90 dark:border-b dark:border-offwhite/60 flex items-center justify-between md:px-15" >
      <h2 className="text-shadow-xs relative z-50 text-xl font-bold uppercase" >Sohail</h2>
      <ul className="relative z-50 gap-4 hidden md:flex">
        <a><li>Home</li></a>
        <a><li>About</li></a>
        <a><li>Skills</li></a>
        <a><li>Projects</li></a>
        <a><li>Contact</li></a>
      </ul>
      <span className="text-xl" >{showNavigation ? <FaToggleOff /> : <FaToggleOn />}</span>
      <div className="md:hidden flex gap-4 items-center text-xl" >
        <span>{showNavigation ? <FaToggleOff /> : <FaToggleOn />}</span>
        <button className="md:hidden" onClick={()=> setShowNavigation(!showNavigation)}>{showNavigation ? <RxCross2 /> : <HiMenu />}</button>
      </div>
      <ul className={`${showNavigation ? 'translate-x-0' : ''} transition -translate-x-[100%] absolute z-10 gap-4 md:hidden h-[calc(100vh - 64px)] w-full top-16 left-0 bg-linear-to-br from-white to-white dark:from-black/80 dark:to-black/90 text-black dark:text-white/70 pt-4 px-4 flex flex-col gap-4 py-8`}>
        <a href="#" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Home</li></a>
        <a href="#" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >About</li></a>
        <a href="#" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Skills</li></a>
        <a href="#" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Projects</li></a>
        <a href="#" ><li className="text-shadow-xs px-2 py-2 rounded-md hover:text-primary/70 leading-4 underline-offset-6 hover:underline decoration-primary" >Contact</li></a>
      </ul>
      
    </header>
  )
}

export default Header