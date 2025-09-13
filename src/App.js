import React from 'react';
import './App.css'; // Importa o nosso estilo

// Importa os componentes que criamos
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WhatsAppSupport from './components/WhatsAppSupport';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Contact />
      <WhatsAppSupport />
    </div>
  );
}

export default App;