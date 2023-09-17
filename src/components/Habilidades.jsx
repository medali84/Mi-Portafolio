import { useEffect} from "react"
import Habilidad from '../skils/Habilidad';
import "./Habilidades.css"
import "./CommonStyles.css"

const Habilidades = () => {
  const habilidades = [
    { nombre: "Java", porcentaje: 90 },
    { nombre: "CSS", porcentaje: 85 },
    { nombre: "JavaScript", porcentaje: 95 },
    { nombre: "HTML", porcentaje: 90 },
    { nombre: "React", porcentaje: 80 },
    { nombre: "Spring Boot", porcentaje: 70 }
  ];

  useEffect(() => {
    console.log("Componente Habilidades renderizado");
 }, []);
 

  return (

    <div className="habilidades_content"  style={{marginTop: '140vh'}}>
    <div className="common-component">
        
        <div className="left-content">
            <h2 className="habilidades-titulo">Mis habilidades</h2>
            <p className="habilidades-texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
            <div className="habilidades-rosco">
                {habilidades.map(habilidad => (
                    <Habilidad key={habilidad.nombre} {...habilidad} />
                ))}
            </div>
        </div>
      
       <div className="imagenhabilidades">
       <img className="habilidades-imagen" src="public\imgs\Habilidades.webp.jpg" alt="" />
       </div>
         
    </div>
</div> 

  );
    

};

export default Habilidades;
