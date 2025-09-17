import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
 
  const handleCategoryClick = (category) => {
    console.log(`Navegando a categoría: ${category}`);

  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    
   
    const rules = [
      `.category-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); }`,
      `.category-image:hover img { transform: scale(1.05); }`,
      `.category-image:hover .image-overlay { background-color: rgba(212, 78, 44, 0.3); }`,
      `.category-button:hover { background: #bf3c1a; transform: translateY(-2px); }`
    ];

    rules.forEach(rule => {
      try {
        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      } catch (e) {
        console.error('Error inserting CSS rule:', e);
      }
    });
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>EXPLORA NUESTRO MUNDO</h2>
        <p style={styles.sectionSubtitle}>Descubre todo lo que tenemos para ofrecerte</p>
        
        <div style={styles.categoriesGrid}>
        
          <div className="category-card" style={styles.categoryCard}>
            <div 
              className="category-image"
              style={styles.categoryImage}
              onClick={() => handleCategoryClick('cafes')}
            >
              <img 
                src="https://i.postimg.cc/Hx6YyMY6/cafes.avif" 
                alt="Nuestros Cafés" 
                style={styles.image}
              />
              <div className="image-overlay" style={styles.imageOverlay}></div>
            </div>
            <h3 style={styles.categoryTitle}>NUESTROS CAFÉS</h3>
            <p style={styles.categoryDescription}>
              Descubre nuestras selecciones premium de granos de especialidad de todo el mundo
            </p>
            <Link to={'/categories/Nuestros cafes'}
              className="category-button"
              style={styles.categoryButton}
              onClick={() => handleCategoryClick('cafes')}
            >
              Ver Colección
            </Link>
          </div>

         
          <div className="category-card" style={styles.categoryCard}>
            <div 
              className="category-image"
              style={styles.categoryImage}
              onClick={() => handleCategoryClick('maquinas')}
            >
              <img 
                src="https://i.postimg.cc/s2p1v1GL/maquinas.avif" 
                alt="Máquinas y Métodos" 
                style={styles.image}
              />
              <div className="image-overlay" style={styles.imageOverlay}></div>
            </div>
            <h3 style={styles.categoryTitle}>MÁQUINAS Y MÉTODOS</h3>
            <p style={styles.categoryDescription}>
              Equipos profesionales y métodos de preparación para perfeccionar tu técnica
            </p>
            <Link to={'/categories/Cafeteras y métodos'} 
              className="category-button"
              style={styles.categoryButton}
              onClick={() => handleCategoryClick('maquinas')}
            >
              Ver Equipos
            </Link>
          </div>

          
          <div className="category-card" style={styles.categoryCard}>
            <div 
              className="category-image"
              style={styles.categoryImage}
              onClick={() => handleCategoryClick('accesorios')}
            >
              <img 
                src="https://i.postimg.cc/Hk8r16Yd/accesorios.avif" 
                alt="Accesorios Baristas" 
                style={styles.image}
              />
              <div className="image-overlay" style={styles.imageOverlay}></div>
            </div>
            <h3 style={styles.categoryTitle}>ACCESORIOS BARISTAS</h3>
            <p style={styles.categoryDescription}>
              Todo lo que necesitas para completar tu experiencia cafetera
            </p>
            <Link to={'/categories/Accesorios'}
              className="category-button"
              style={styles.categoryButton}
              onClick={() => handleCategoryClick('accesorios')}
            >
              Ver Accesorios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#F3EEE8',
    fontFamily: '"Roboto", sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '3.5rem',
    fontWeight: '0',
    color: '#2a2a2a',
    marginBottom: '15px',
    fontFamily: '"Badeen Display", system-ui, sans-serif',
    letterSpacing: '2px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#6a5747',
    marginBottom: '60px',
    fontWeight: '700',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    alignItems: 'stretch',
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  categoryImage: {
    position: 'relative',
    height: '250px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '900',
    color: '#2a2a2a',
    textAlign: 'center',
    margin: '20px 20px 10px',
    fontFamily: '"Roboto", sans-serif',
    letterSpacing: '1px',
  },
  categoryDescription: {
    fontSize: '0.95rem',
    color: '#6a5747',
    textAlign: 'center',
    margin: '0 20px 20px',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  categoryButton: {
    padding: '12px 25px',
    backgroundColor: '#d44e2c',
    border: 'none',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    margin: '0 20px 25px',
    alignSelf: 'center',
  },
};

export default CategoriesSection;