import React from 'react'
import empty_repository from '../assets/empty_repository.png'

const Project = () => {

    const projects = [
        {
            id:1,
            src: empty_repository
        },
        {
            id:2,
            src: empty_repository
        },
        {
            id:3,
            src: empty_repository
        },
        {
            id:4,
            src: empty_repository
        },
        {
            id:5,
            src: empty_repository
        },
        {
            id:6,
            src: empty_repository
        }
    ]

  return (
    <div name='project' className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold border-b-4 inline border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    
                {projects.map(({id,src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                    <   div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Project
