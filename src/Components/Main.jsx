import React from 'react'
import { motion } from 'framer-motion'
import {Typewriter, Cursor} from 'react-simple-typewriter' 

function Main() {
 
  return (
    <div  className='flex flex-col-reverse items-center justify-start w-full px-8 mt-24 sm:justify-center sm:flex-row sm:px-20 sm:mt-28'>
      <motion.div initial ={{x:-200} }animate={{x:0}} transition = {{duration:0.8}}  className='w-full 2xl:w-2/3 '>
        <h2 className='w-full text-6xl font-bold text-white sm:text-7xl md:text-8xl '>
            Elias Gonzalez <br></br> 
            <span className='w-full text-violet-900'>
              <Typewriter 
                words = {["FrontEnd Developer"]}
                loop= {1}    
              />
            </span>
            <span><Cursor></Cursor></span>
        </h2>
        </motion.div>
        <motion.div initial ={{x:200} }animate={{x:0}} transition = {{duration:0.8}}   className='hidden w-1/3 2xl:block ' >
          <img src="programmer.svg" alt="programer-photo"/>
        </motion.div>
    </div>
  )
}

export default Main