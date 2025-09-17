import React from 'react';

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">¿DÓNDE ENCONTRARNOS?</h2>
          <div className="location-divider"></div>
          <p className="location-subtitle">
            Vení a visitarnos y viví la experiencia Kika Coffee en persona
          </p>
        </div>

        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.991238499987!2d-56.16438892439939!3d-34.869882372863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81ae7b7c7b1d%3A0x1fcd5a9b6b8b5b9e!2sAv.%20Brasil%202345%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1690834567890!5m2!1ses!2suy"
              width="100%"
              height="100%"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Kika Coffee en Pocitos"
            ></iframe>
          </div>

          <div className="info-container">
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3 className="info-title">Horarios</h3>
              <div className="schedule">
                <div className="schedule-item">
                  <span className="schedule-days">Lunes a Viernes</span>
                  <span className="schedule-hours">7:30 - 20:00 hs</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-days">Sábados</span>
                  <span className="schedule-hours">9:00 - 18:00 hs</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-days">Domingos</span>
                  <span className="schedule-hours">10:00 - 14:00 hs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;