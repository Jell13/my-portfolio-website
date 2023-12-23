import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About me</p>
        </div>
        <p className='text-xl mt-20 '>
          As a junior Front-End Developer, I possess the arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Python.
          I excel in maintaining and designing responsive websites that offers a smooth user experience in different types of medium.
        </p>
        <br />
        <p className='text-xl'>
          I am a team player who thrives in collaborating with cross functional-teams to produce an outstanding web application.
          My free time consist of doing problem solving activities and be an active learner in the world of coding.      
        </p>
      </div>
    </div>
  )
}

export default About
