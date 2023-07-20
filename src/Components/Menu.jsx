import React from 'react'

function Menu() {
  return (
    <div className='absolute right-0 z-50 w-3/5 text-left shadow-xl bg-neutral-900 rounded-xl'>
        <div className='px-6 py-3'>
            <ul className='grid gap-3 my-4 text-3xl text-white'>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                        SOBRE MI 
                </li>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                        PORTFOLIO
                </li>
                <li className='p-2 hover:bg-green-400 w-fit rounded-xl'>
                        CONTACTO
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Menu