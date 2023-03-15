
import { motion } from 'framer-motion'
import { useState } from 'react';
import {BiMenu} from 'react-icons/bi'
import { IconContext } from "react-icons";
import logo from '../assets/images/logov.png'




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
   
    <div  className={ fixed || active  ? "sticky top-0 flex w-full justify-between px-20   lg:transition ease-in-out bg-zinc-900 z-50 lg:duration-300  " : "flex justify-center sm:bg-transparent container m-auto w-full transition-all"} >
      <motion.div  whileTap = {{scale :1}} transition={{duration:0.5}} className="flex items-center justify-between w-full py-5" >
       
            <motion.div whileTap = {{scale :0.9}} className='w-24 sm:w-auto'>
                <img src={logo} alt="logo" className='w-[67px]'/>
            </motion.div>
  
        <IconContext.Provider value={{size:45}}>
              <BiMenu onClick={handleClickk} className='p-1 mx-2 bg-white rounded-full lg:hidden'/>
        </IconContext.Provider>
            <ul className={active ? 'absolute  shadow-2xl transition ease-in duration-900  top-24 z-50 grid justify-center items-center  lg:w-auto w-full  gap-8 text-xl h-72 text-white bg-zinc-900 py-10 ' : 'hidden lg:flex justify-center lg:w-auto w-full text-white gap-12 text-xl items-center'} >
     
         
       
        
                <motion.li className='text-center lg:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}}>Sobre Mi</motion.li>
            
                    <motion.li className='text-center lg:inline-block' whileHover={{scale: 1.1}} whileTap = {{scale :0.9}} >Portfolio</motion.li>
       
              
                    <motion.li className='items-center justify-center transition-all duration-500 rounded shadow-lg lg:h-12 lg:flex w-28 lg:bg-green-400'  whileHover={{scale: 1.1}}  whileTap = {{scale :0.9}}> 
                    <p className='text-center'>Contacto </p>
               </motion.li>
             
               
              
            </ul>

       
       
        </motion.div >
    </div>
  )
}

export default Header