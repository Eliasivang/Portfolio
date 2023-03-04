import React from 'react'
import { ContactUs } from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Contact() {
  return (
    <div>
      <Header/>
        <ContactUs/>
      <div className='absolute bottom-0 flex justify-center w-full'>
        <Footer/>
      </div>
      
    </div>
  )
}
export default Contact