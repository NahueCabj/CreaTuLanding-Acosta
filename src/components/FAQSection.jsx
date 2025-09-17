import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cuánto tarda el envío de mi pedido?",
      answer: "Los envíos dentro de Montevideo tardan entre 24-48 horas hábiles. Para el interior del país, el tiempo de entrega es de 3-5 días hábiles. Todos nuestros envíos se realizan con seguimiento en tiempo real."
    },
    {
      question: "¿Cómo eligen los granos de café que venden?",
      answer: "Trabajamos directamente con productores de especialidad en América Latina y África. Cada lote pasa por rigurosas catas donde evaluamos aroma, acidez, cuerpo y sabor. Solo seleccionamos cafés con puntuación superior a 84 puntos en la escala SCA."
    },
    {
      question: "¿Qué garantía tienen las máquinas de café?",
      answer: "Todas nuestras máquinas tienen garantía de 12 meses y servicio técnico especializado. Trabajamos con las mejores marcas como La Marzocco, Rocket y Sage, asegurando calidad profesional y durabilidad."
    },
    {
      question: "¿Ofrecen cursos para aprender sobre café?",
      answer: "Sí, tenemos workshops mensuales de barismo, catación y métodos de preparación. Todos nuestros cursos son dictados por baristas certificados SCA y incluyen materiales premium para practicar."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-overlay"></div>
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">PREGUNTAS FRECUENTES</h2>
          <div className="faq-divider"></div>
          <p className="faq-subtitle">
            Resolvemos todas tus dudas sobre el mundo del café de especialidad
          </p>
        </div>

        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p className="faq-cta-text">¿No encontraste lo que buscabas?</p>
          <Link to={'/contacto'} className="faq-cta-button">CONTACTANOS</Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;