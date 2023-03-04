import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Menu from '../Components/Menu'


function Home() {
 
   return (
    <div>
        <Header></Header>
        <Menu className="hidden"/>
        <Main/>
        <div className='absolute bottom-0 w-full text-center'>
            <Footer></Footer>
        </div>
    </div>

  )
}

export default Home