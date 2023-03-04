import React from "react"
import { motion } from "framer-motion"
import { AiFillDownCircle, AiFillUpCircle  } from "react-icons/ai"
import { useState } from "react";

function Proyects() {
  const [down, setDown] = useState(false);

  const downScroll = ()=>{
      if(window.scrollY > 700){
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
      top: 900,
      behavior: "smooth",
    }) 
  }

  window.addEventListener("scroll", downScroll);
    return (
     
      <div  className='flex flex-col items-center justify-center w-full gap-20 mt-4 mb-24 font-light '>
        <motion.h1 initial = {{opacity: 0}} animate= {{ opacity:1 }} transition = {{duration: 0.6}}  className="font-bold text-center text-white text-7xl bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-900 w-96">Portfolio.</motion.h1>
        <AiFillDownCircle onClick = {scrollDown} className={down ? "hidden" : "fixed cursor-pointer bottom-0 z-50 mx-2 my-16 text-6xl text-white right-8 animate-bounce "}/>
        <AiFillUpCircle onClick={scrollTop} className={down ? "cursor-pointer fixed bottom-0 z-50 mx-2 my-16 text-6xl text-white right-8 animate-bounce" : "hidden" } />
          <motion.div initial = {{x:-200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, x:0}} viewport= {{once:true}} className='flex justify-center w-full '>
                <div className="flex items-center w-8/12 gap-2 border-l-8 rounded-r-lg shadow-2xl bg-zinc-800 h-72 ">
                  <div className="w-1/2">
                           <img className="scale-110 shadow-2xl shadow-black rounded-xl"  src='tasks.png'></img>
                  </div>
                <div className="flex flex-col w-1/2 gap-4" >
                  <h1 className='text-4xl font-semibold text-white'>Movies Wiki</h1>
                  <p className='text-lg text-white'>Basicamente es un proyecto creado con React que utliza los datos de the movie db , en este proyecto podremos buscar y vizualizar peliculas, cada una con su descripcion, genero , año en que se publico y su puntaje.</p>
                  <p className= "text-xl font-medium text-white "><span className="text-orange-500">HTML5 </span>/ <span className="text-cyan-500">TAILWINDCSS </span>/ <span className="text-blue-600">REACT JS</span></p>
                  <div className='flex justify-center gap-4'>
                          <button className='h-12 text-lg font-normal text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36 '>Vistar Pagina</button>
                          <button className='h-12 text-lg font-normal text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36'>GitHub</button>
                   </div>
          </div>
          </div>
          </motion.div>
          <motion.div initial = {{x:-200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, x:0}} viewport= {{once:true}} className='flex justify-center w-full '>
                <div className="flex items-center w-8/12 gap-2 border-l-8 rounded-r-lg shadow-2xl h-72 1/3 bg-neutral-800 ">
                  <div className="w-1/2">
                           <img className="scale-110 shadow-2xl shadow-black rounded-xl "  src='mb.png'></img>
                  </div>
                <div className="flex flex-col w-1/2 gap-4" >
                  <h1 className='text-4xl font-semibold text-white'>Movies Wiki</h1>
                  <p className='text-lg text-white'>Basicamente es un proyecto creado con React que utliza los datos de the movie db , en este proyecto podremos buscar y vizualizar peliculas, cada una con su descripcion, genero , año en que se publico y su puntaje.</p>
                  <p className= "text-xl font-medium text-white "><span className="text-orange-500">HTML5 </span>/ <span className="text-cyan-500">TAILWINDCSS </span>/ <span className="text-blue-600">REACT JS</span></p>
                  <div className='flex justify-center gap-4'>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36 '>Vistar Pagina</button>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36'>GitHub</button>
                   </div>
          </div>
          </div>
          </motion.div>
          <motion.div initial = {{x:-200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, x:0}} viewport= {{once:true}} className='flex justify-center w-full '>
                <div className="flex items-center w-8/12 gap-2 border-l-8 rounded-r-lg shadow-2xl h-72 1/3 bg-neutral-800 ">
                  <div className="w-1/2">
                           <img className="scale-110 shadow-2xl shadow-black rounded-xl "  src='gastos.png'></img>
                  </div>
                <div className="flex flex-col w-1/2 gap-4" >
                  <h1 className='text-4xl font-semibold text-white'>Movies Wiki</h1>
                  <p className='text-lg text-white'>Basicamente es un proyecto creado con React que utliza los datos de the movie db , en este proyecto podremos buscar y vizualizar peliculas, cada una con su descripcion, genero , año en que se publico y su puntaje.</p>
                  <p className= "text-xl font-medium text-white "><span className="text-orange-500">HTML5 </span>/ <span className="text-cyan-500">TAILWINDCSS </span>/ <span className="text-blue-600">REACT JS</span></p>
                  <div className='flex justify-center gap-4'>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36 '>Vistar Pagina</button>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36'>GitHub</button>
                   </div>
          </div>
          </div>
          </motion.div>
          <motion.div initial = {{x:-200, opacity:0}} transition= {{duration: 0.7}} whileInView={{opacity: 1, x:0}} viewport= {{once:true}} className='flex justify-center w-full '>
                <div className="flex items-center w-8/12 gap-2 border-l-8 rounded-r-lg shadow-2xl h-72 1/3 bg-neutral-800 ">
                  <div className="w-1/2">
                           <img className="scale-110 shadow-2xl shadow-black rounded-xl "  src='seguro.png'></img>
                  </div>
                <div className="flex flex-col w-1/2 gap-4" >
                  <h1 className='text-4xl font-semibold text-white'>Movies Wiki</h1>
                  <p className='text-lg text-white'>Basicamente es un proyecto creado con React que utliza los datos de the movie db , en este proyecto podremos buscar y vizualizar peliculas, cada una con su descripcion, genero , año en que se publico y su puntaje.</p>
                  <p className= "text-xl font-medium text-white "><span className="text-orange-500">HTML5 </span>/ <span className="text-cyan-500">TAILWINDCSS </span>/ <span className="text-blue-600">REACT JS</span></p>
                  <div className='flex justify-center gap-4'>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36 '>Vistar Pagina</button>
                          <button className='h-12 text-lg text-center text-white rounded-full bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900 w-36'>GitHub</button>
                   </div>
          </div>
          </div>
          </motion.div>
          
          
          
      </div>
  
  
    )
  }

  export default Proyects