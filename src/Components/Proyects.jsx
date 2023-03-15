import React from "react"
import { motion } from "framer-motion"
import { AiFillDownCircle, AiFillUpCircle  } from "react-icons/ai"
import { useState } from "react";
import moviesImg from '../assets/images/mb.png';
import tasksImg from '../assets/images/tasks.png';
import gastosImg from '../assets/images/gastos.png';
import seguroImg from '../assets/images/seguro.png';

function Proyects() {
  const [down, setDown] = useState(false);

  const downScroll = ()=>{
      if(window.scrollY > 900){
        setDown(true)
      }else {
        setDown(false)
      }
  }
  const scrollTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }) 
  }
  const scrollDown = ()=>{
    window.scrollTo({
      top : 4000,
      behavior: "smooth",
    }) 
  }
  window.addEventListener("scroll", downScroll);
  
    return (
      <div  className='container flex flex-col items-center justify-center w-full gap-8 px-3 m-auto mt-6 mb-24 font-light sm:gap-10'>
        <motion.h1 initial ={{x:200} }animate={{x:0}} transition = {{duration:0.6}} className='text-6xl font-bold text-center text-green-400 font-bebas w-96 lg:text-7xl'>Portfolio.</motion.h1>
        
        
        <motion.div initial = {{x:-200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, x:0}} viewport= {{once:true}} className='flex justify-center w-full '>
                <div className="grid items-center justify-center gap-2 p-5 shadow-2xl rounded-3xl lg:flex 2xl:w-10/12 bg-neutral-900 shadow-black">
                      <div className="flex justify-center lg:w-1/2 ">
                           <img className="shadow-2xl shadow-black rounded-xl"  src={moviesImg}></img>
                      </div>
                      <div className="flex flex-col w-full gap-5 p-5 border-violet-800 lg:border-l-4 rounded-r-xl lg:w-1/2 ">
                          <h1 className='text-5xl font-normal text-center text-green-400 font-bebas lg:text-left'>Movies Wiki</h1>
                          <p className='text-white sm:text-lg text-md'>Basicamente es un proyecto creado con React que utliza los datos de the movie db , en este proyecto podremos buscar y vizualizar peliculas, cada una con su descripcion, genero , año en que se publico y su puntaje.</p>
                          <div className='flex justify-center gap-4 '>
                              <button className='h-12 text-xl text-center text-white bg-green-400 rounded font-bebas w-36 hover:bg-violet-900 '>Vistar Pagina</button>
                              <button className='h-12 text-xl text-center text-white bg-green-400 rounded font-bebas w-36 hover:bg-violet-900 '>GitHub</button>
                          </div>
                      </div>
                </div>
          </motion.div>
         
       
          
          
          
      </div>
  
  
    )
  }

  export default Proyects