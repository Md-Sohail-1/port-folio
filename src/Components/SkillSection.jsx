import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
  const skills = [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'Responsive UI Design',
    'UI/UX Design',
    'Figma(Design to Code)',
    'Accessibility',
    ]
  
  return (
    <div className="py-20 w-full px-5 md:px-15 bg-light-primary/60 text-offblack/80 dark:bg-dark-secondary/80 dark:text-light-primary" >
      <h2 className="text-shadow-xs" >My Skills</h2>
      <p className="text-center text-md py-4" >A few of the things I've Know</p>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        skills.map((skill)=>(
          <SkillCard skill={skill}/>
        ))
      }
      </div>
    </div>
  )
}

export default SkillSection