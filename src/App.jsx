
import './App.css';
import AboutMe from './Components/AboutMe';
import { ContactUs } from './Components/ContactUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Proyects from './Components/Proyects';


function App() {
  
  return (
    <div className='w-full'>
    <Header/>
    <Main/>
    <AboutMe/>
    <Proyects/>
    <ContactUs/>
    <Footer/>
    </div> 
  );
}

export default App;
