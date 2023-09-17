/* import { useEffect, useState } from "react";
import "./FondoBody.css";

const FondoBody = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY1 = scrollY / 2;
  const translateY2 = scrollY / 3;
  const translateY3 = scrollY / 4;
  const translateY4 = scrollY / 5;

  return (
    <div className="fondo-container">
        <div className="fondo-image">
            <div className="fondo-image-1" style={{ transform: `translateY(${translateY1}px)` }}>
                <img src="/imgs/fondo1.png" alt="Fondo 1" />
            </div>
            <div className="fondo-image-2" style={{ transform: `translateY(${translateY2}px)` }}>
                <img src="/imgs/fondo2.png" alt="Fondo 2" />
            </div>
            <div className="fondo-image-3" style={{ transform: `translateY(${translateY3}px)` }}>
                <img src="/imgs/fondo3.png" alt="Fondo 3" />
            </div>
            <div className="fondo-image-3" style={{ transform: `translateY(${translateY4}px)` }}>
                <img src="/imgs/fondo4.png" alt="Fondo 4" />
            </div>            
        </div>

    </div>
  );
};

export default FondoBody; */

/* import "./FondoBody.css";


const FondoBody = () => {
  return (
    <div className="fondo-container">
      <img src="public\imgs\fondo1.png" alt="Imagen 1" />
      <img src="public\imgs\fondo2.png" alt="Imagen 2" />
      <img src="public\imgs\fondo3.png" alt="Imagen 3" />
      <img src="public\imgs\fondo4.png" alt="Imagen 4" />
    </div>
  );
}

export default FondoBody; */


