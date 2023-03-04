import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element : <About/>,
        
      },

      {
        path: "/portfolio",
        element : <Portfolio/>

      },
      {
        path: "/contact",
        element: <Contact/>
      }
]);