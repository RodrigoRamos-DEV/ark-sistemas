import React from 'react';
import SlidingCarousel from './SlidingCarousel';




const Hero = () => {
  // Substitua pela URL do seu Web App do Google
  

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Menos planilhas, mais lucro.</h1>
<p className="hero-subtitle">
  O Sistema ARK automatiza a gestão do seu negócio para que você possa focar no que realmente importa: o crescimento.
</p>
        <SlidingCarousel />
      </div>
    </section>
  );
};

export default Hero;