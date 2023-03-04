import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { IconContext } from "react-icons";
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaGit } from "react-icons/fa";
import {FaSass} from 'react-icons/fa';


function Tecnologies() {
  return (
    <div>
        <div className='flex flex-wrap justify-center gap-5 py-6 text-xl sm:py-0 '>
        
        <Tooltip anchorId="html-logo" content="HTML" style={{ color: 'rgb(255, 97, 0)' }}/>
         <a id='html-logo' ><FaHtml5  className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="css-logo" content="CSS" style={{ color: 'rgb(0, 39, 255)' }} />
         <a id="css-logo"><FaCss3Alt className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="tailwind-logo" content="Tailwind" style={{ color: 'rgb(0, 116, 255)'}} />
         <a id='tailwind-logo'><SiTailwindcss className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="js-logo" content="Javascript" style={{ color: 'rgb( 255, 232, 0)' }} />
         <a id='js-logo'><IoLogoJavascript className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="react-logo" content="React" style={{ color: 'rgb(0, 116, 255)' }} />
         <a id='react-logo'><FaReact className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="git-logo" content="Git" style={{ color: 'rgb(255, 0, 0)'  }} />
         <a id='git-logo'><FaGit className='text-6xl text-violet-900'/></a>
         <Tooltip anchorId="sass-logo" content="Sass" style={{ color: 'rgb(250,49,162)' }}/>
         <a id='sass-logo'><FaSass className='text-6xl text-violet-900'/></a>
         
        </div>
    </div>
  )
}

export default Tecnologies