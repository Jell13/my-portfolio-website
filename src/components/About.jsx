import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum perspiciatis aliquam repellat, obcaecati illo reiciendis totam nesciunt explicabo, dolore doloribus qui minus molestias harum tenetur vitae unde doloremque odit.
        </p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nihil tempore nulla animi. Qui quas earum molestias vero quam, atque architecto velit, incidunt maiores laudantium, id fugiat vitae autem! Itaque.</p>
      </div>
    </div>
  )
}

export default About
