import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FullImageBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activar animaciones después de un breve delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Añadir reglas CSS al montar el componente
  useEffect(() => {
    // Animación para el botón CTA
    const ctaHoverRule = `
      .cta-button-hover:hover {
        background: #bf3c1a !important;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(212, 78, 44, 0.3);
      }
    `;
    
    // Insertar las reglas CSS
    const styleSheet = document.styleSheets[0];
    try {
      styleSheet.insertRule(ctaHoverRule, styleSheet.cssRules.length);
    } catch (e) {
      console.error('Error inserting CSS rules:', e);
    }
  }, []);

  return (
    <div style={styles.bannerContainer}>
      {/* Imagen de fondo */}
      <div style={styles.backgroundImage}>
        <div style={styles.imageOverlay}></div>
        
        {/* Contenido superpuesto */}
        <div style={styles.content}>
          <div style={styles.textContent}>
            <div style={{
              ...styles.decorativeElement,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'all 0.8s ease-out'
            }}></div>
            
            <h2 style={{
              ...styles.title,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>LA REVOLUCIÓN DEL SABOR</h2>
            
            <p style={{
              ...styles.description,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              En Kika Coffee Roasters, transformamos granos selectos en experiencias sensoriales únicas. 
              Cada lote es tostado con tecnología de punta y pasión artesanal.
            </p>
            
            <div style={styles.statsContainer}>
              <div style={{
                ...styles.statItem,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.6s'
              }}>
                <div style={styles.statNumber}>042</div>
                <div style={styles.statLabel}>Variedades</div>
              </div>
              <div style={{
                ...styles.statItem,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.8s'
              }}>
                <div style={styles.statNumber}>18</div>
                <div style={styles.statLabel}>Orígenes</div>
              </div>
              <div style={{
                ...styles.statItem,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 1s'
              }}>
                <div style={styles.statNumber}>24h</div>
                <div style={styles.statLabel}>Tostado fresco</div>
              </div>
            </div>
            
            <Link to={'./products'}
              className= 'cta-button-hover w-75'>EXPLORAR CATÁLOGO</Link>
          </div>
        </div>
      </div>
      
      {/* Elementos gráficos decorativos */}
      <div style={styles.graphicElements}>
        <div style={styles.circleElement}></div>
        <div style={styles.semiCircleElement}></div>
      </div>
    </div>
  );
};

// Estilos en JavaScript - Banner con imagen de fondo completa
const styles = {
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  textContent: {
    maxWidth: '800px',
    textAlign: 'center',
    color: '#fff',
  },
  decorativeElement: {
    width: '80px',
    height: '8px',
    backgroundColor: '#D8C2A7',
    margin: '0 auto 30px',
    borderRadius: '4px',
    transformOrigin: 'center',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '0',
    marginBottom: '25px',
    lineHeight: '1.1',
    fontFamily: '"Badeen Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  description: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    lineHeight: '1.6',
    marginBottom: '40px',
    fontWeight: '300',
    maxWidth: '600px',
    margin: '0 auto',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(20px, 5vw, 60px)',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
    transition: 'all 0.6s ease-out',
  },
  statNumber: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: '700',
    color: '#D8C2A7',
    marginBottom: '5px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  statLabel: {
    fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: '0.9',
  },
  ctaButton: {
    padding: '16px 40px',
    background: '#d44e2c',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    margin: '0 auto',
    display: 'block',
  },
  graphicElements: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 3,
  },
  circleElement: {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '8px solid rgba(212, 78, 44, 0.2)',
    animation: 'float 8s ease-in-out infinite',
  },
  semiCircleElement: {
    position: 'absolute',
    top: '50%',
    right: '5%',
    width: '120px',
    height: '60px',
    borderTopLeftRadius: '60px',
    borderTopRightRadius: '60px',
    backgroundColor: 'rgba(106, 87, 71, 0.1)',
    animation: 'float 10s ease-in-out infinite 1s',
  },
};

// Añadir keyframes para animaciones
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
  `, styleSheet.cssRules.length);
}

export default FullImageBanner;