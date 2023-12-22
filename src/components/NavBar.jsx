import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    
    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'project'
        },
        {
            id:4,
            link: 'experience'
        },
        {
            id:5,
            link: 'contact'
        }
    ]
  return (
    <div className='flex px-4 bg-black justify-between items-center w-full h-20 text-white fixed'>
      <div>
        <h1 className=' font-signature text-5xl ml-2'>Jason.dev</h1>
      </div>
      <ul className='hidden md:flex'>

        {links.map(({id,link}) => (<li key={id} className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-150 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>))}

      </ul>
      <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className='flex absolute bg-gradient-to-b from-black to-gray-800 text-gray-500 top-0 left-0 w-full h-screen items-center flex-col justify-center'>
        {links.map(({id,link}) => (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-150 duration-300'><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
