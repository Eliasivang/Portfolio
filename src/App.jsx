
import './App.css';
import AboutMe from './Components/AboutMe';
import { ContactUs } from './Components/ContactUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Proyects from './Components/Proyects';


function App() {
  
  return (
    <div className='font-bebas'>
    <Header/>
    <Hero/>
    <AboutMe/>
    <Proyects/>
    <ContactUs/>
    <Footer/>
    </div> 
  );
}

export default App;
