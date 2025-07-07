import React from 'react';
import './App.css'; // Importa o nosso estilo

// Importa os componentes que criamos
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Contact />
    </div>
  );
}

export default App;