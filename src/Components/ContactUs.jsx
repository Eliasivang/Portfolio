import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {FiSend} from 'react-icons/fi';
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [text,setText] =useState('');


 

  const sendEmail = (e) => {
    e.preventDefault();

    if([email, name, text].includes('')) {
      setError(true)
      return;
    } else {

    emailjs.sendForm('service_tb970ea', 'template_2p8jwlg', form.current, 'RHTL9fh2jyclRUc29')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setError(null);
    }
  };


  return (
    <div className='flex flex-col items-center w-full my-3 sm:my-6 h-1/2 '>
    
        <motion.h1 initial ={{x:-200} } animate={{x:0}} transition = {{duration:0.6}}  className='px-2 text-6xl font-semibold text-center text-white sm:text-8xl' >Contacto</motion.h1>
        <motion.form initial ={{x:200} }animate={{x:0,}} transition = {{duration:0.6}}  className='grid items-center w-full grid-cols-1 gap-4 px-3 mt-6 sm:mt-10 sm:px-0 sm:w-1/2' ref={form} onSubmit={sendEmail}>
             
               <input  onChange={(e)=>setName(e.target.value)}  placeholder='Escriba su nombre'  className='h-10 p-2 rounded-2xl' type="text" name="user_name" />
               <input  onChange={(e)=>setEmail(e.target.value)}  placeholder='Email al cual respondere'  className='h-10 p-2 caret-violet-900 rounded-2xl' type="email" name="user_email" />
          
             <textarea onChange={(e)=>setText(e.target.value)} minLength= {10} placeholder="Escriba aqui su mensaje" className='p-2 rounded-2xl h-96 max-h-44 min-h-10' name="message" />
             
                {error ===true && 
                
                  <div className='flex items-center justify-center bg-red-800 rounded h-11'>
                      <p className='text-sm font-medium text-center text-white sm:text-lg '>🚨 DEBES COMPLETAR TODOS LOS CAMPOS 🚨</p>
                  </div>
      
                }
                { error === false &&
                  <div className='flex items-center justify-center bg-green-800 rounded h-11'>
                      <p className='text-sm font-medium text-center text-white sm:text-lg '>✅ MESANJE ENVIADO CON EXITO ✅</p>
                  </div>
                }

             <div className='w-full pt-3 text-center'>
                <button  className='text-lg text-white rounded-full sm:w-32 w-28 sm:text-xl h-11 sm:h-14 bg-gradient-to-r from-blue-400 via-violet-600 to-violet-900' type="submit">Enviar <FiSend className='inline-block '/></button>
             </div>
              
                
        </motion.form>
    </div>
  );
};