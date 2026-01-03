import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-offblack text-secondary dark:bg-dark-secondary px-5 md:px-15 py-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <h4>Made with</h4> 
                <FaHeart className='text-red-600'/>
                <h4>By</h4>
                <span>MD Sohail</span>
            </div>
            <div className='flex gap-4 text-xl md:text-2xl '>
                <a href='https://github.com/Md-Sohail-1' target="_blank" className='group text-secondary/70'>
                    <FaGithub className='group-hover:text-white'/>
                </a>
                <a href="https://linkedin.com" target="_blank" className='group text-secondary/70'>
                    <FaLinkedin className='group-hover:text-white'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer