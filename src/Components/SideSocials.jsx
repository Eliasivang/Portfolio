import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'

function SideSocials() {
  return (
    <div className=' hidden xl:block fixed left-0 ml-7 shadow-2xl   bg-green-400 shadow-black rounded-xl bottom-[430px] w-fit'>
        <ul>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-violet-800'>
                <a href="https://www.linkedin.com/in/elias-gonzalez-043291201/"> <FaLinkedinIn size={20}/> </a>
            </li>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-violet-800'>
                <a href="https://github.com/Eliasivang"><FiGithub size={20}/></a>
            </li>
            <li className='p-2 m-2 rounded-xl hover:bg-white hover:text-violet-800'>
                <a href="https://twitter.com/EliasIvanG"><AiOutlineTwitter size={20}/></a>
            </li>
        </ul>
    </div>
  )
}

export default SideSocials