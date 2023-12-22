import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <NavBar/>
        <Home/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
        <SocialLinks/>
      </div>
    </>
  )
}

export default App
