import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-full'>
      <div className='text-white max-w-screen-lg w-full h-full flex flex-col justify-center p-4 mx-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
            <p className='text-xl py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/c45363df-dd31-4b6d-a75d-b5c536db2786" method='POST' className='flex flex-col w-full md:w-1/2 lg:'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                flex items-center rounded-md hover:scale110 duration-300'>Let's talk</button>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Contact
