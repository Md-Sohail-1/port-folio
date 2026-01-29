const SkillCard = ({skill}) => {
  return (
    <div className="md:px-10 px-4 gap-2 md:gap-4 flex justify-center md:py-3 py-2 border border-primary text-offblack/90 dark:border dark:text-secondary/90 dark:hover:text-secondary/90 dark:hover:border-secondary rounded-md shadow-sm transition-all duration-200 ease">
      <h4>{skill}</h4>
    </div>
  )
}
export default SkillCard