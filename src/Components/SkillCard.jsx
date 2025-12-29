import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className="md:px-10 px-4 gap-2 md:gap-4 flex md:py-3 py-2 border border-primary text-primary dark:border-secondary/80 dark:hover:border-dark-primary/20 rounded-md shadow-sm hover:scale-102  transition-all duration-200 ease-in-out">
      <h3>{skill}</h3>
    </div>
  )
}

export default SkillCard