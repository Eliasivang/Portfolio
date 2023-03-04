import React from 'react'
import { motion } from 'framer-motion'
import Tecnologies from './Tecnologies'


function AboutMe() {
  return (
    <motion.div initial ={{x:-200} }animate={{x:0}} transition = {{duration:0.6}}   className='flex flex-col items-center justify-center px-5 sm:p-0 '>
        <div className='w-full pr-0 mt-6 shadow-2xl mb-28 sm:mb-8 sm:mt-20 sm:rounded-l-full sm:pr-6 sm:w-4/5 sm:backdrop-blur-3xl '>
            <div className='flex flex-col items-center justify-center w-full gap-4 sm:flex-row'>
                <div className='justify-center overflow-hidden rounded-full '>
                         <img src='me.png' alt="profile-image"className='transition duration-700 ease-in-out rounded-full hover:scale-110'/>
                </div>
                 <div className='flex flex-col items-center justify-center w-full gap-8 py-3 text-center sm: py:0 backdrop-blur-3xl rounded-3xl sm:rounded-none sm:w-2/3'>
                         <p className='text-lg text-white rounded sm:text-2xl font-extralight '>Hola! Mi nombre es Elias Ivan Gonzalez, vivo en la provincia de Buenos Aires y actualmente soy Estudiante de Administracion de Empresas. Con un gran interes por el desarrollo web y
				                  ganas de aprender cosas nuevas dia a dia para especializarme en el area.</p>
                        <button className='h-12 text-white rounded-full text-md sm:text-xl w-28 bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900'>Ver CV</button>
                        <p className='text-lg text-white rounded sm:text-2xl font-extralight'>Actualmente, los leguajes/herramientas que domino y uso en mis proyectos son los que se pueden observar en la derecha, aunque siempre estoy aprendiendo algo nuevo!</p>
                        <Tecnologies/>
                    
                        
                </div>
               
            </div>
        </div>
    </motion.div>
      

  )
}



export default AboutMe