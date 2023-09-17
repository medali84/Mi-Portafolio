/* import ShowProject from "../components/ShowProject"

import Habilidades from "../components/Habilidades"
import "./Home.css"
import AboutMe from "../components/AboutMe"
import Enlaces from "../components/Enlaces"
import FormularioContacto from "../components/FormularioContacto"
import MyNavbar from "../components/MyNavbar"



const Home = () => {
  
  return (
    <div className='contenedor-padre'>
      
      <div className="enlaces">
        <Enlaces />
      </div>
      <div className="aboutme">
        <AboutMe />
      </div>
      <div className="habilidades">
        <Habilidades />
      </div>
      <div className="showproject">
        <ShowProject />
      </div>
      <div className="formulariocontacto">
        <FormularioContacto/> 
      </div>
       
    </div>
               
  )
}

export default Home
 */

import ShowProject from "../components/ShowProject"

import Habilidades from "../components/Habilidades"
import "./Home.css"
import AboutMe from "../components/AboutMe"
import Enlaces from "../components/Enlaces"
import FormularioContacto from "../components/FormularioContacto"
import MyNavbar from "../components/MyNavbar"

const Home = () => {
  return (
    <div id="home" className="contenedor-padre">
      <MyNavbar />
      <div className="enlaces">
        <Enlaces />
      </div>
      <div id="aboutme" className="aboutme">
        <AboutMe />
      </div>
      <div id="habilidades" className="habilidades">
        <Habilidades />
      </div>
      <div id="showproject" className="showproject">
        <ShowProject />
      </div>

      <div id="formulariocontacto" className="formulariocontacto">
        <FormularioContacto />

      </div>

    </div>
  );
};

export default Home;



