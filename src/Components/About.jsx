const About = () => {
  return (
    <section id='about' className="w-full md:px-20 h-auto py-20 pb-20 px-5 bg-secondary mx-auto text-offblack/80 dark:bg-dark-secondary dark:text-secondary " >
      <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
        <h2 className="text-shadow-xs " >About Me</h2>
        <p className="md:text-center landing-para leading-8" >I'm MD Sohail, a  Frontend Developer passionate about crafting fast, accessible and responsive web applications using 
          <strong className='font-normal dark:text-slate-100'> React.js</strong>, 
          <strong className='font-normal dark:text-slate-100'> Tailwind CSS</strong>, and
          <strong className='font-normal dark:text-slate-100'> JavaScript.</strong>
        </p>
        <p className="md:text-center landing-para leading-8">
          I focus on performance optimization, clean component architecture, and accessibility best practices, ensuring applications work reliably across devices, browsers, and assistive technologies. I enjoy solving frontend problems such as improving performance and managing complex UI states.
        </p>
      </div>
    </section>
  )  
}
export default About