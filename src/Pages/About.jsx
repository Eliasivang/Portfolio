import React from 'react'
import AboutMe from '../Components/AboutMe' 
import Footer from '../Components/Footer'
import Header from '../Components/Header'


function About() {
  return (
    <div>
        <Header/>
        <AboutMe/>
        <div className='bottom-0 w-full text-center sm:absolute'>
        <Footer></Footer>
        </div> 
    </div>
  )
}


 export default About