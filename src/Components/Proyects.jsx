import React from "react"
import { motion } from "framer-motion"
import {proyects} from "../data/proyects"
import { AiFillDownCircle, AiFillUpCircle  } from "react-icons/ai"
import  {HiOutlineExternalLink} from "react-icons/hi"
import {BsFileEarmarkCode} from "react-icons/bs"
import { useState } from "react";
// import tasksImg from '../assets/images/tasks.png';
// import gastosImg from '../assets/images/gastos.png';
// import seguroImg from '../assets/images/seguro.png';

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
      <section id="portfolio" className="flex items-center justify-center w-full my-0 xl:my-20">   
      <div className='xl:w-[1400px] flex flex-col items-center justify-center w-full  p-2 sm:p-6 mt-6  font-extralight'>
            <motion.h1 initial ={{x:200} }animate={{x:0}} transition = {{duration:0.6}} className='text-6xl font-bold text-center text-green-400 xl:text-7xl font-bebas w-96 lg:text-7xl'>Portfolio</motion.h1>
            
            <AiFillDownCircle onClick = {scrollDown} className={down ? "hidden" : " hidden fixed cursor-pointer bottom-0 z-50  my-16 text-6xl text-white right-0 lg:right-8 animate-bounce "}/>
            <AiFillUpCircle onClick={scrollTop} className={down ? "cursor-pointer fixed bottom-0 z-50  my-16 text-6xl text-white right-0 lg:right-8 animate-bounce " : "hidden" } />            
                <div
                className='grid w-full grid-cols-1 gap-10 my-8 xl:my-20 xl:grid-cols-2 font-poppins'>
                    {proyects.map((proyects)=>(
                    <motion.div
                    key={proyects.title}
                    initial = {{y:200, opacity:0}} 
                    transition= {{duration: 0.7}} 
                    whileInView={{opacity: 1, y:0}} 
                    viewport= {{once:true}}
                    className="grid items-center justify-center w-full grid-cols-1 gap-3 p-5 shadow-2xl rounded-3xl bg-neutral-900 shadow-black">
                          <div className="flex justify-center w-full ">
                              <img className="shadow-2xl shadow-black rounded-xl"  src={proyects.image}></img>
                          </div>
                          <div className="flex flex-col w-full gap-5 p-1 border-t-4 border-violet-800 ">
                              <h1 className='mt-5 text-4xl font-normal text-center text-green-400 xl:text-5xl font-bebas'>{proyects.title}</h1>
                              <p className='text-center text-white text-md xl:text-lg'>{proyects.description}</p>
                              <div className='flex justify-center gap-4 text-lg text-center xl:text-xl font-bebas'>
                              <button 
                                  className='flex items-center justify-center h-12 gap-2 text-black bg-green-400 rounded hover:text-white w-36 hover:bg-violet-900'>
                                      <a className="flex gap-1"  target="_blank"  href={proyects.urlDeploy}>
                                          Visitar Pagina
                                          <span>
                                              <HiOutlineExternalLink className="mt-[2px]"/>
                                          </span>
                                      </a>
                                  </button>
                                  <button 
                                  className='flex items-center justify-center h-12 gap-2 text-black bg-green-400 rounded hover:text-white w-36 hover:bg-violet-900'>
                                      <a className="flex gap-1" target="_blank"  href={proyects.urlCode}>
                                      Code
                                          <span>
                                              <BsFileEarmarkCode className="mt-[2px]"/>
                                          </span>
                                      </a>
                                  </button>
                              </div>
                          </div>
                          
                    </motion.div>
                    
                  ))}
                  </div>
                  <button className="h-12 text-2xl bg-green-400 rounded shadow-2xl shadow-black w-60 text- hover:bg-violet-800 hover:text-white">Ver todos los proyectos</button>
            
      </div>
      </section>
  
  
    )
  }

  export default Proyects