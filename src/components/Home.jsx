import { HiArrowRight } from "react-icons/hi";
import myHero from "../assets/myhero.png"
import {Link} from 'react-scroll'
import Reveal from 'react-reveal/Reveal';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <Reveal>
          <div className=" top-44 flex flex-col justify-center h-full">
              <h2 className=" text-4xl mt-10 md:text-7xl  font-bold text-white">
                Front-End React developer
              </h2>
              <p className="text-gray-500 py-4 max-w-md">
                Hi, I'm Jason Sugiharto. A passionate Front-end React developer.      
              </p>
              <div>
                  <Link to="project" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                      Projects
                      <span className=" group-hover:rotate-90 duration-300">
                          <HiArrowRight className="ml-1" size={25}/>
                      </span>
                  </Link>
              </div>
          </div>
          <div>
              <img src={myHero} className="rounded-2xl mx-auto w-2/3 md:w-full" alt="pic" />
          </div>
        </Reveal>    
      </div>
    </div>
  )
}

export default Home
