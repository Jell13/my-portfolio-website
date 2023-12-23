import React from 'react'
import empty_repository from '../assets/empty_repository.png'


const Project = () => {

  return (
    <div name='project' className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold border-b-4 inline border-gray-500'>Projects</p>
                <p className='py-6 text-xl'>Each project is a unique piece of development</p>
            </div>
            <div className='flex flex-col gap-12'>
    
                <div className='flex flex-col sm:flex-row rounded-lg'>
                    <img className=' h-auto w-full sm:w-1/2 rounded-md duration-200 hover:scale-105 inline' src={empty_repository} alt="" />
                    <div className=' p-8 text-center w-full sm:w-1/2 flex flex-col justify-center items-center'>
                        <h2 className='font-bold text-lg pb-8'>First Project Title</h2>
                        <p>Something something something
                            something something something
                        </p>
                        <div className='flex justify-around w-full'>
                            <button>Code</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row-reverse rounded-lg'>
                    <img className=' h-auto w-full sm:w-1/2 rounded-md duration-200 hover:scale-105 inline' src={empty_repository} alt="" />
                    <div className=' p-8 text-center w-full sm:w-1/2 flex flex-col justify-center items-center'>
                        <h2 className='font-bold text-lg pb-8'>Second Project Title</h2>
                        <p>Something something something
                            something something something
                        </p>
                        <div className='flex justify-around w-full'>
                            <button>Code</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row rounded-lg'>
                    <img className=' h-auto w-full sm:w-1/2 rounded-md duration-200 hover:scale-105 inline' src={empty_repository} alt="" />
                    <div className=' p-8 text-center w-full sm:w-1/2 flex flex-col justify-center items-center'>
                        <h2 className='font-bold text-lg pb-8'>Third Project Title</h2>
                        <p>Something something something
                            something something something
                        </p>
                        <div className='flex justify-around w-full'>
                            <button>Code</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Project
