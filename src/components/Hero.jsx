import React from 'react';
import SlidingCarousel from './SlidingCarousel';




const Hero = () => {
  // Substitua pela URL do seu Web App do Google
  

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">A gestão do seu negócio, simplificada.</h1>
        <p className="hero-subtitle">
          Transforme seus dados em decisões inteligentes. O Sistema ARK organiza suas finanças para você focar no que realmente importa: o crescimento.
        </p>
        <SlidingCarousel />
      </div>
    </section>
  );
};

export default Hero;