import React from 'react';

const Pricing = () => {
  return (
    <section id="planos" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Escolha seu Plano</h2>
        
        <div className="pricing-grid">
          {/* Plano Gratuito */}
          <div className="pricing-card">
            <h3 className="plan-name">Gratuito</h3>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="amount">0</span>
            </div>
            
            <ul className="plan-features">
              <li className="feature-included">✅ 3 dias de teste completo</li>
              <li className="feature-included">✅ Acesso à Feira (após teste)</li>
              <li className="feature-excluded">❌ Lançamentos</li>
              <li className="feature-excluded">❌ Relatórios</li>
              <li className="feature-excluded">❌ Cupons</li>
            </ul>
            
            <a href="https://sistema.arksistemas.com.br" className="plan-button secondary">
              Gratuito
            </a>
          </div>

          {/* Plano Premium */}
          <div className="pricing-card recommended">
            <div className="recommended-badge">RECOMENDADO</div>
            <h3 className="plan-name">Premium</h3>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="amount">39,90</span>
              <span className="period">/mês</span>
            </div>
            
            <ul className="plan-features">
              <li className="feature-included">✅ Acesso completo</li>
              <li className="feature-included">✅ Feira</li>
              <li className="feature-included">✅ Lançamentos</li>
              <li className="feature-included">✅ Relatórios</li>
              <li className="feature-included">✅ Cupons</li>
              <li className="feature-included">✅ Suporte prioritário</li>
            </ul>
            
            <a href="https://sistema.arksistemas.com.br" className="plan-button primary">
              Assinar Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;