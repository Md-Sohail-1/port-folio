import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
  const skills = [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'Web Design',
    'UI/UX Design',
    'Responsive UI Design',
    'HTML & CSS',
    'Mobile first UX',
    'Figma(Design to Code)',
    'REST APIs',
    'Git/Github',
    'Problem Solving',
    'Accessibility',
    ]
  
  return (
    <div id="skills" className="py-20 w-full px-5 md:px-15 bg-secondary text-offblack/80 dark:bg-dark-secondary dark:text-secondary/60" >
      
      <div className='max-w-7xl mx-auto'>
      <h2 className="text-shadow-xs text-offblack dark:text-white/90" >My Skills</h2>
      <p className="text-center text-md pb-5 product-para" >A few of the things I've Know</p>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        skills.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default SkillSection