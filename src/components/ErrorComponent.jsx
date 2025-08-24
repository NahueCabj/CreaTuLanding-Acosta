import React from 'react'
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <div className="error-card">
      <h2 className="error-card__title">Oops! Página no encontrada</h2>
      <p className="error-card__message">
        Parece que lo que estás buscando no existe o fue movido.  
        Volvé al inicio y seguí explorando nuestros productos.
      </p>
      <Link to={'/'} className="btn btn--primary">Ir al inicio</Link>
    </div>
  );
};

export default ErrorComponent
