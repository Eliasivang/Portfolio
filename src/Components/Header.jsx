import React, { useRef } from 'react'
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react';
import {BiMenu} from 'react-icons/bi'
import { IconContext } from "react-icons";




function Header() {
  const [fixed, setFixed] =useState(false);
  const [active,setActive] = useState(false);
  

  const handleClickk = ()=>{
     if (!active) {
      setActive(true)
     
     
     } else{
      setActive(false)
     }
  
  }
  
  const navBar=() =>{
    if(window.scrollY >= 1) {
        setFixed(true)


        
    }else {
      setFixed(false)
    }
  }
  window.addEventListener("scroll", navBar);

  return (
   
    <div  className={ fixed || active  ? "  sticky top-0 flex items-center justify-between w-full  sm:px-10 sm:transition sm:ease-in bg-zinc-900 z-50 sm:duration-300 drop-shadow-2xl" : "flex items-center justify-between sm:bg-transparent w-full  px-0 sm:px-10 transition-all"} >
      <motion.div  whileTap = {{scale :1}} transition={{duration:0.5}} className="flex items-center justify-between w-full" >
        
        <Link to= '/'>
          <div className='w-24 sm:w-auto'>
             <img src="eig-logo.png" alt="logo" className='scale-75 sm:scale-75'/>
             </div>
        </Link>
        <IconContext.Provider value={{size:45}}>
              <BiMenu onClick={handleClickk} className='p-1 mx-2 bg-white rounded-full sm:hidden'/>
        </IconContext.Provider>
        
        
        
        
            <ul className={active ? 'absolute shadow-2xl transition ease-in duration-900  top-24 z-50 grid items-center justify-center w-full gap-8 text-xl h-72 text-white  bg-zinc-900 py-10 ' : 'hidden sm:flex text-white gap-12 text-xl items-center'} >
            <motion.li className='text-center sm:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}}>Home</motion.li>
           
             <Link to='/About'>
                <motion.li className='text-center sm:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}}>Sobre Mi</motion.li>
             </Link>
             <Link to = '/portfolio'>
                    <motion.li className='text-center sm:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}} >Portfolio</motion.li>
             </Link>
               <Link to= "/contact">
               <motion.li className='items-center justify-center transition-all duration-500 rounded-full sm:h-12 sm:flex w-28 sm:bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900'  whileHover={{scale: 1.1}}  whileTap = {{scale :0.9}}> 
                    <p className='text-center'>Contacto </p>
               </motion.li>
               </Link>
               
              
            </ul>

       
       
        </motion.div >
    </div>
  )
}

export default Header