import { useRef, useEffect,useState } from 'react'

import Header from './Components/Header'


const App = ({children}) => {
  const appRef = useRef(null)
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'))

  function toggleTheme (theme) {
    if(theme == 'light'){
      appRef.current.classList.add("dark")
      return
    }
    appRef.current.classList.remove("dark")
  }
  
  function assignDefaultTheme () {
    if(window.localStorage.getItem('theme') === null){
      window.localStorage.setItem('theme', 'light')
      return
    }
    setTheme(window.localStorage.getItem('theme'))
  }

  useEffect(()=>{
    assignDefaultTheme()
  },[])

  return (
    <div ref={appRef} className={`${theme == 'dark' && 'dark'} font-poppins pt-16`} >
      <Header toggleFunc={toggleTheme}/>
      {children}
    </div>
  )
}

export default App