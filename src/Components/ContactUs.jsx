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
    } else{

      setError(false)
    emailjs.sendForm('service_tb970ea', 'template_2p8jwlg', form.current, 'RHTL9fh2jyclRUc29')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName("");
      setText("");
      setEmail("");
    }
    
  };


  return (
    <div className='container flex flex-col items-center justify-center w-full m-auto my-28'>
    
        <motion.h1 initial ={{x:-200} } animate={{x:0}} transition = {{duration:0.6}}  className='text-6xl font-bold text-center text-green-400 font-bebas sm:text-7xl' >Contacto.</motion.h1>
        <motion.form initial ={{x:200} }animate={{x:0,}} transition = {{duration:0.6}}  className='grid items-center w-full grid-cols-1 gap-4 px-3 mt-10 sm:mt-10 lg:px-0 lg:w-2/3' ref={form} onSubmit={sendEmail}>
             
               <input  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Escriba su nombre'  className='h-10 p-2 rounded-xl' type="text" name="user_name" />
               <input  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email al cual respondere'  className='h-10 p-2 rounded-xl caret-violet-900' type="email" name="user_email" />
          
             <textarea onChange={(e)=>setText(e.target.value)} value={text} minLength= {10} placeholder="Escriba aqui su mensaje" className='p-2 rounded-xl h-96 max-h-44 min-h-10' name="message" />
             
                {error ===true && 
                
                  <div className='flex items-center justify-center bg-red-800 rounded h-11'>
                      <p className='text-sm font-medium text-center text-white sm:text-md '>🚨 DEBES COMPLETAR TODOS LOS CAMPOS CORRECTAMENTE 🚨</p>
                  </div>
      
                }
                { error===false  &&
                  <div className='flex items-center justify-center bg-green-800 rounded h-11'>
                      <p className='text-sm font-medium text-center text-white sm:text-lg '>✅ MESANJE ENVIADO CON EXITO ✅</p>
                  </div>
                }

             <div className='w-full pt-2 text-center'>
                <button  className='text-xl text-black bg-green-400 rounded hover:bg-violet-900 hover:text-white font-bebas sm:w-32 w-28 sm:text-xl h-11 sm:h-14' type="submit">Enviar <FiSend className='inline-block '/></button>
             </div>
              
                
        </motion.form>
    </div>
  );
};