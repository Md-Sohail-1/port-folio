import SkillCard from './SkillCard'

const SkillSection = () => {
  const Fskills = [
    'React.js',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'HTML & CSS',
    'Redux',
    'Accessibility',
    'Node js(basics)',
    'Express js(basics)',
  ]
  const Uiskills = [
    'Tailwind CSS',
    'Responsive UI Design',
    'UI Consistency',
    'UI/UX Principles',
  ]
  const Tools = [
    'Git',
    'Github',
    'VS Code',
    'Figma (basic)',
    'Chrome DevTools',
  ]
  
  return (
    <section id="skills" className="py-20 w-full px-5 md:px-15 bg-secondary text-offblack/90 dark:bg-dark-secondary dark:text-white/90" >
      <div className='max-w-7xl mx-auto'>
      <h2 className="text-shadow-xs text-offblack dark:text-white/90" >My Skills</h2>
      <p className="text-center text-md pb-5 product-para text-offblack/70 dark:text-white/70" >A few of the things I've Know</p>
      <h3 className='pb-2'>Key skills:</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Fskills.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      <h3 className='py-4 pb-2'>Styling & UI:</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Uiskills.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      <h3 className='py-4 pb-2'>Tools & Others:</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-2 " >
      {
        Tools.map((skill,index)=>(
          <SkillCard skill={skill} key={index}/>
        ))
      }
      </div>
      </div>
    </section>
  )
}
export default SkillSection