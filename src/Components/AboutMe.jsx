import React from 'react'
import meImg from '../assets/images/eigv.png'
import { motion } from 'framer-motion'
import Tecnologies from './Tecnologies'



function AboutMe() {
  return (
    <div className='container flex flex-col h-full px-3 m-auto mt-6 lg:w-full '>
      <h1 className='font-bold text-center text-green-400 text-7xl font-bebas'>Sobre Mi. </h1>
      <motion.div initial ={{x:200} }animate={{x:0,}} transition = {{duration:0.6}}  className='lg:flex items-center justify-center p-3 lg:p-0 grid h-auto gap-6 my-32 rounded-2xl bg-neutral-900 lg:h-[380px] shadow-2xl'>
        <div className='w-[470px] overflow-hidden lg:hidden rounded-full m-auto'>
            <img className='rounded-full  hover:scale-110 transition-all duration-500 w-[470px]' src={meImg} alt="me" />
        </div>
        <div className='flex flex-col items-center justify-center h-full gap-8 p-3 lg:w-1/3'>
            <p className='p-2 font-light text-center text-white lg:text-lg text-md'>Lorem ipsum dolor sit dasssssssssssssssdadasdad as das dasd asd ut debitis velit sunt ab hic, error corporis. Consequatur. Esse eligendi incidunt illo cumque libero perspiciatis, pariatur cum accusamus, sequi totam asperiores natus rem impedit. Alias natus officiis sapiente rem veritatis?</p>
            <div className='flex items-center justify-center w-full' >
            <button className='w-32 h-12 p-2 text-xl text-center text-black bg-green-400 rounded hover:shadow-xl hover:text-white hover:shadow-black hover:bg-violet-900 font-bebas '> DESCARGAR CV</button>
            </div>
            </div>
        <div className='w-[470px] overflow-hidden lg:block hidden rounded-full'>
            <img className='rounded-full  hover:scale-110 transition-all duration-500 w-[470px]' src={meImg} alt="me" />
        </div> 
        <div className='flex flex-col items-center justify-center w-full h-full gap-8 p-3 lg:w-1/3'>
          <p className='font-light text-center text-white lg:text-lg text-md '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim earum laborum aliquam accusamus aliquid ratione molestiae quae magni fuga, similique tenetur dolores maiores ex modi! Iure harum ipsa a libero?</p>
          <Tecnologies/>
        </div>


      </motion.div>
     
    </div>
      

  )
}



export default AboutMe