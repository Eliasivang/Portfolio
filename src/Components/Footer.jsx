import React from 'react'
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function Footer() {
  return (
    <motion.div animate={{ y: [100,-20, 0] }} className='grid w-full grid-rows-2 mt-10 mb-1 ' >
    <div className='flex items-center justify-center gap-2 sm:gap-3'>
        
        <FaLinkedin className='text-4xl sm:text-5xl text-violet-900'/>
        <FaGithub className='text-4xl sm:text-5xl text-violet-900'/>
        <FaTwitter className='text-4xl sm:text-5xl text-violet-900'/>
       

    </div>
    <div className='grid items-center text-center'>
      <p className='text-sm font-medium text-white sm:text-lg'>© 2023 Elias Gonzalez. Todos los derechos reservados</p>
    </div>
    </motion.div>
  )
}

export default Footer