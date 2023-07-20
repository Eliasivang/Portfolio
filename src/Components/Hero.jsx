import React from 'react'
import { animate, motion } from 'framer-motion'
import {Typewriter, Cursor} from 'react-simple-typewriter' 
import programmerImg from '../assets/images/programmer.svg'
import { AiFillDownCircle } from "react-icons/ai"
import SideSocials from './SideSocials'

function Main() {
 
  return (
    <div className='flex flex-col items-center w-full h-screen'>
    <div className= 'flex flex-col-reverse items-center justify-center xl:w-[1400px] px-6 py-40 h-3/4 sm:flex-row'>
      <motion.div initial ={{x:-200} }animate={{x:0}} transition = {{duration:0.8}}  className='2xl:w-2/3'>
        <h2 className='w-full text-7xl text-white font-extralight  sm:text-[100px]'>
                <Typewriter 
                words = {["Elias Gonzalez"]}
                loop= {1}    
                />
                <br></br> 
                <h2 className='w-full text-7xl text-green-400 font-extralight xl:text-[90px]'>
                      <Typewriter 
                      words = {["FrontEnd Developer"]}
                      loop= {1}  
                      />
                </h2>
            {/* <span><Cursor></Cursor></span><br /> */}
        </h2>
        </motion.div>
        <motion.div initial ={{x:200} }animate={{x:0}} transition = {{duration:0.8}}   className='hidden w-1/3 2xl:block ' >
            <img src={programmerImg} alt="img"/>
        </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center w-full my-16'>
        <AiFillDownCircle className= 'text-6xl text-white animate-bounce'/>
        </div>
        <motion.div
        initial= {{opacity:0}}
        animate ={{opacity:1}}
        > 
              <SideSocials/>
        </motion.div>
        
    </div>

  )
}

export default Main