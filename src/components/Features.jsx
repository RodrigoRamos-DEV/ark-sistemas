import React from 'react';

// Você pode adicionar mais funcionalidades aqui no futuro
const featuresList = [
  {
    title: 'Lançamentos Rápidos',
    description: 'Registre vendas e gastos em segundos com nosso preenchimento automático inteligente.'
  },
   {
    title: 'Fechamento de Notas',
    description: 'Registre vendas e gastos em segundos com nosso preenchimento automático inteligente.'
  },
  {
    title: 'Controle Financeiro Visual',
    description: 'Visualize seus ganhos, gastos e saldo com gráficos claros e relatórios detalhados.'
  },
  {
    title: 'Modo Escuro',
    description: 'Trabalhe com mais conforto visual em qualquer ambiente com o novo tema escuro.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="section-title">Tudo o que você precisa, em um só lugar</h2>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;