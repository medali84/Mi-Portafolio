import { useState, useEffect } from 'react';
import './Habilidad.css';

const Habilidad = ({ nombre, porcentaje }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radio = 25;
  const circunferencia = 2 * Math.PI * radio;

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        setCurrentPercentage(prev => {
          if (prev < porcentaje) {
            return prev + 1;
          } else {
            clearInterval(intervalId);
            return porcentaje;
          }
        });
      }, 10);
      return () => clearInterval(intervalId);
    } else {
      setCurrentPercentage(0);
    }
  }, [isActive, porcentaje]);

  const offset = circunferencia - (currentPercentage / 100) * circunferencia;

  return (
    <div className="habilidad" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      
      
      <svg className="rosco" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radio} className="track" />
        <circle 
          cx="50" 
          cy="50" 
          r={radio} 
          className="fill" 
          strokeDasharray={circunferencia}
          strokeDashoffset={offset}
        />
        <text x="50" y="50" textAnchor="middle" dy=".3em" className="percentage">{currentPercentage}%</text>
      </svg>
      <span>{nombre}</span>
    

      
    </div>
  );
};

export default Habilidad;
