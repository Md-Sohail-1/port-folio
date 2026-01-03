import React from 'react'
import { MdAddCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div id="contact" className="px-5 py-20 md:px-15 text-offblack/80 bg-white dark:text-secondary/70 dark:bg-offblack min-h-20 w-full" >
      <div className='max-w-7xl mx-auto'>
      <h2 className='text-offblack dark:text-secondary'>Get in Touch</h2>
      <p className='text-center pb-8 product-para'>Have a project in mind, a question, or just want to connect? Drop me a message!</p>
      <div className='flex gap-8 flex-wrap items-center justify-center'>
        <a href='mailto:sohil931376@gmail.com' className='flex flex-col hover:scale-102 transition ease-in-out md:py-6 md:px-12 py-8 px-8 rounded-md border bg-secondary shadow-sm shadow-primary/30 dark:bg-dark-secondary items-center justify-center dark:border-secondary'>
          <h4>Sent a Message</h4>
          <BiLogoGmail className=' text-offblack  dark:text-secondary text-6xl py-2' />
        </a>
        <a href={`tel:9891113240`} className='flex flex-col hover:scale-102 transition ease-in-out md:py-6 md:px-12 py-8 px-8 rounded-md border bg-secondary shadow-sm shadow-primary/30 dark:bg-dark-secondary items-center justify-center dark:border-secondary'>
          <h4>Make a Call</h4>
          <MdAddCall className=' text-offblack dark:text-secondary text-6xl py-2'/>
        </a>
 
      </div>
      </div>
    </div>
  )
}

export default ContactSection