import React from 'react'
import { motion } from 'framer-motion'
import {Typewriter, Cursor} from 'react-simple-typewriter' 
import programmerImg from '../assets/images/programmer.svg'
import { AiFillDownCircle } from "react-icons/ai"

function Main() {
 
  return (
    <div className='flex flex-col h-[850px] w-full container m-auto'>
    < div className= 'flex flex-col-reverse items-center justify-start w-full py-40 sm:justify-center sm:flex-row'>
      <motion.div initial ={{x:-200} }animate={{x:0}} transition = {{duration:0.8}}  className='w-full 2xl:w-2/3 '>
        <h2 className='w-full text-6xl font-bold text-white sm:text-[80px]'>
            Elias Gonzalez <br></br> 
            <span className='w-full text-green-400'>
              <Typewriter 
                words = {["FrontEnd Developer"]}
                loop= {1}    
              />
            </span>
            <span><Cursor></Cursor></span>
        </h2>
        </motion.div>
        <motion.div initial ={{x:200} }animate={{x:0}} transition = {{duration:0.8}}   className='hidden w-1/3 2xl:block ' >
          <img src={programmerImg} alt="img"/>
        </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center w-full my-16'>
        <AiFillDownCircle className= 'text-6xl text-white hover:text-violet-900 animate-bounce'/>
        </div>
    </div>

  )
}

export default Main