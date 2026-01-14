import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
  const Tskills = [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'HTML & CSS',
    'React Router DOM',
    'Redux',
    'Node js(basics)',
    'Express js(basics)',
  ]
  const Uiskills = [
    'Tailwind CSS',
    'Responsive UI Design',
    'UI Consistency',
    'Figma',
    'UI/UX Principles',
    'Design System',
  ]
  const Tools = [
    'Git',
    'Github',
    'VS Code',
    'Figma',
  ]
  
  return (
    <div id="skills" className="py-20 w-full px-5 md:px-15 bg-secondary text-offblack/80 dark:bg-dark-secondary dark:text-white/90" >
      
      <div className='max-w-7xl mx-auto'>
      <h2 className="text-shadow-xs text-offblack dark:text-white/90" >My Skills</h2>
      <p className="text-center text-md pb-5 product-para dark:text-white/70" >A few of the things I've Know</p>
      <h3 className='pt-4 pb-2'>Library & Frameworks:</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Tskills.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      <h3 className='py-4 pb-2'>Styling & UI</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Uiskills.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      <h3 className='py-4 pb-2'>Tools</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Tools.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default SkillSection