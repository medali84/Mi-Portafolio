import "./AboutMe.css"
import "./CommonStyles.css"
import AboutMeImg from "../assets/AboutMe.jpg"


export const AboutMe = () => {
  return (
   
    <div className="aboutme-contente">
        <div className="common-component">
          <div className="about-content">
            <img className="aboutme-img-puntos" src="public\imgs\288-2880409_bravo-s-a-s-puntos-naranjas-png.png" alt="" /> 
            </div>
            
            
            <img className="aboutme-img" src={AboutMeImg} alt="" />
            
            <div className="aboutme-datos">
            <h2 className="aboutme-titulo">Sobre mi</h2>
            <p className="aboutme-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>  
            <a className="descargar-cv" href="src/Mohamed Ali.pdf" download>
            <button>DESCARGA C.V.</button>
          </a>
       
        </div>
          </div>

        
        
    </div>    
        

  )
}

export default AboutMe;
