
import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
  return (
    <div className="py-20 w-full px-5 md:px-15 bg-white text-black/80 dark:bg-offblack/70 dark:text-offwhite/80" >
      <h2 className="text-center text-2xl font-bold text-shadow-xs" >My Skills</h2>
      <p className="text-center text-md py-4" >A few of the things I've Know</p>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 flex-wrap justify-center gap-4 " >
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  )
}

export default SkillSection