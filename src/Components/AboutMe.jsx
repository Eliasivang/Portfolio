import React from 'react'
import meImg from '../assets/images/eigv.png'
import meImg1 from '../assets/images/eig.png'
import { motion } from 'framer-motion'
import Tecnologies from './Tecnologies'



function AboutMe() {
  return (
    <section  className='flex justify-center px-2 w-ful xl:px-6'>    
    <div className=' sm:w-[1400px]  w-full flex flex-col px-2  xl:px-6 '>
        <h1 className='text-6xl font-bold text-center text-green-400 sm:text-7xl font-bebas'>Sobre Mi </h1>
        <motion.div 
        initial = {{y:200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, y:0}} viewport= {{once:true}} 
        className='xl:flex xl:items-center font-poppins xl:justify-center grid justify-items-center w-full h-auto  gap-8 my-20 xl:pb-0 py-3  shadow-black rounded-2xl bg-neutral-900 xl:h-[380px]  shadow-2xl'>
            <div className='flex w-full justify-center  items-center sm:w-[490px] overflow-hidden rounded-full xl:hidden '>
                <img className='rounded-full hover:scale-110 transition-all duration-500 sm:w-[450px]' src={meImg1} alt="me" />
            </div>
            <div className='flex flex-col items-center justify-center h-full gap-12 xl:gap-8 xl:w-1/3'>
                <p className='text-center text-white font-extralight text-md xl:text-lg'>Estudiante de sistemas en la Unviersidad Tecnologica Nacional, autodidacta y estusiasta por el desarrollo web. Motivado a seguir sumando conocimientos para aplicarlos en el entorno profesional.</p>
                <div className='flex items-center justify-center w-full' >
                    <button className='w-32 h-12 p-2 text-lg text-center text-black bg-green-400 rounded xl:text-xl hover:shadow-xl hover:text-white hover:shadow-black hover:bg-violet-900 font-bebas '> DESCARGAR CV</button>
                </div>
            </div>
        <div className='sm:w-[500px] w-full overflow-hidden xl:block hidden rounded-full'>
            <img className='rounded-full  hover:scale-110 transition-all duration-500 w-[500px]' src={meImg1} alt="me" />
        </div> 
        <div className='flex flex-col items-center justify-center w-full h-full gap-12 xl:gap-8 xl:w-1/3'>
          <p className='text-center text-white font-extralight xl:text-lg text-md'>Tecnologias que utilizo tanto en mis proyectos personales como en la universidad, siempre aprendiendo algo nuevo o bien especializandome es los ya aprendidos.</p>
          <Tecnologies/>
        </div>
      </motion.div>

    </div>
      
    </section>
  )
}



export default AboutMe