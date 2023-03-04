import React from 'react'
import { motion } from 'framer-motion'
import Tecnologies from './Tecnologies'


function AboutMe() {
  return (
    <div>
      <motion.h1 initial = {{opacity: 0}} animate= {{ opacity:1 }} transition = {{duration: 0.6}} className='mx-auto mt-4 font-semibold text-center text-white shadow-2xl text-7xl bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-900 w-96'>Sobre mi.</motion.h1>
       <div className='flex items-center justify-center w-full'>
        <motion.div initial ={{x:-200} }animate={{x:0,}} transition = {{duration:0.6}} className='flex items-center justify-center w-5/6 gap-2 p-2 shadow-2xl mt-14 backdrop-blur-sm rounded-3xl'>
        
            <img className='rounded-full w-[430px]' src="me.png" alt=""/>
        
          <div className='flex flex-col items-center gap-8 p-6 rounded-3xl'>
              <p className='text-lg font-light text-center text-white'>Hola! Mi nombre es Elias Ivan Gonzalez, vivo en la provincia de Buenos Aires y actualmente soy Estudiante de Administracion de Empresas. Con un gran interes por el desarrollo web y
				                  ganas de aprender cosas nuevas dia a dia para especializarme en el area</p>
              <button className='h-12 text-center text-white rounded-full w-28 bg-gradient-to-r from-blue-400 via-violet-500 to-violet-900'>Ver CV</button>
              <p className='text-lg font-light text-center text-white'>Actualmente, los leguajes/herramientas que domino y uso en mis proyectos son los que se pueden observar en la derecha, aunque siempre estoy aprendiendo algo nuevo!</p>
              <Tecnologies/>
          </div>
          
        </motion.div>

        </div>
           
        </div>

     
  
      

  )
}



export default AboutMe