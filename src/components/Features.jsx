import React from 'react';

// Você pode adicionar mais funcionalidades aqui no futuro
const featuresList = [
  {
    title: 'Lançamentos em Segundos',
    description: 'Deixe o preenchimento automático inteligente fazer o trabalho pesado. Menos tempo com burocracia, mais tempo vendendo.'
  },
   {
    title: 'Fechamento de Caixa Simplificado',
    description: 'Termine o dia sem stress. Gere relatórios de fechamento de forma automática e evite erros manuais.'
  },
  {
    title: 'Finanças sob Controlo',
    description: 'Entenda para onde vai o seu dinheiro com gráficos visuais e relatórios que fazem sentido.'
  },
  {
    title: 'Conforto Visual',
    description: 'Trabalhe a qualquer hora do dia (ou da noite) com um tema escuro elegante e confortável para os olhos.'
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