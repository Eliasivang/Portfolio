import React from 'react'


function Menu() {
  return (
  <div className='hidden'>
    <div className='absolute left-0 z-50 flex items-center justify-center w-full h-72 sm:hidden sm:mx-0 bg-zinc-900'>
        <ul className='grid items-center justify-center w-full gap-6'>
            <li className='text-xl text-center text-white'>Home</li>
            <li className='text-xl text-center text-white '>Sobre Mi</li>
            <li className='text-xl text-center text-white '>Portfolio</li>
            <li className='text-xl text-center text-white '>Contacto</li>
        </ul>
    </div>
    </div>
  )
}

export default Menu