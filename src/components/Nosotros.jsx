import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoaderComponent from './LoaderComonent';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    const timer = setTimeout(() => {
      setLoader(false)
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loader
    ? <LoaderComponent/>
    :
    <section className="about-section">
      
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1
            className={`hero-title ${isVisible ? "visible" : ""}`}
          >
            MÁS QUE CAFÉ,<br />UNA PASIÓN
          </h1>
          <p
            className={`hero-subtitle ${isVisible ? "visible" : ""}`}
          >
            Descubre la historia detrás de cada taza
          </p>
        </div>
      </div>

      <div className="container">
        
        <div className="intro-section">
          <div className="intro-content">
            <h2 className="section-title">NUESTRA HISTORIA</h2>
            <div className="divider"></div>
            <p>
              En <strong>Kika Coffee Roasters</strong>, no simplemente tostamos café; cultivamos experiencias.
              Desde nuestros humildes comienzos, nos hemos dedicado apasionadamente a buscar los granos
              más excepcionales de los rincones más remotos del mundo, trayéndolos directamente a tu taza.
            </p>
            <p>
              Cada lote es tostado artesanalmente con precisión científica y amor por el arte del café,
              asegurando que cada sorbo cuente una historia única de su origen y viaje hasta vos.
            </p>
          </div>
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&w=1171&q=80"
              alt="Proceso de tostado de café"
            />
          </div>
        </div>

        
        <div className="values-section">
          <h2 className="section-title">LO QUE NOS DEFINE</h2>
          <div className="divider"></div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Origen Premium</h3>
              <p>
                Seleccionamos meticulosamente granos de especialidad de las mejores regiones cafetaleras
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔥</div>
              <h3>Tostado Artesanal</h3>
              <p>
                Cada lote es tostado con cuidado y precisión para resaltar sus notas únicas
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Pasión y Ciencia</h3>
              <p>
                Combinamos el arte tradicional con tecnología de punta para la taza perfecta
              </p>
            </div>
          </div>
        </div>

        
        <div className="process-section">
          <div className="process-image">
            <img
              src="https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Equipo de Kika Coffee trabajando"
            />
          </div>
          <div className="process-content">
            <h2 className="section-title">NUESTRO COMPROMISO</h2>
            <div className="divider"></div>
            <p>
              Creemos que el café excepcional debería ser accesible para todos. Por eso, no solo nos
              dedicamos a traerte los mejores granos, sino también a educar y compartir los métodos
              de preparación que transformarán tu experiencia cafetera en casa.
            </p>
            <p>
              Desde métodos pour-over hasta espresso perfecto, estamos aquí para guiarte en cada paso
              del camino, asegurando que cada momento con café sea memorable.
            </p>
            <div className="stats-container">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Variedades</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Países origen</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Tostado fresco</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="cta-section">
          <h2>¿LISTO PARA DESCUBRIR TU PRÓXIMO CAFÉ FAVORITO?</h2>
          <Link to={'/products'} className="cta-button">EXPLORAR COLECCIÓN</Link>
        </div>
      </div>
    </section>
    }
    </>
  );
};

export default AboutUsSection;
