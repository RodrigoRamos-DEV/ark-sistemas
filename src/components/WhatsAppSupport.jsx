import React, { useState } from 'react';
import './WhatsAppSupport.css';

const WhatsAppSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(null);

  // FAQ para site institucional (sem tutoriais do sistema)
  const faqs = [
    {
      id: 1,
      question: "Qual o valor da licença do sistema?",
      answer: "Entre em contato conosco para conhecer nossos planos e valores. Temos opções para diferentes tamanhos de empresa.",
      keywords: ["preço", "valor", "licença", "plano", "custo"]
    },
    {
      id: 2,
      question: "O sistema tem suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico completo via WhatsApp, email e telefone durante o horário comercial.",
      keywords: ["suporte", "técnico", "ajuda", "atendimento"]
    },
    {
      id: 3,
      question: "Posso testar o sistema antes de comprar?",
      answer: "Claro! Oferecemos um período de teste gratuito de 15 dias para você conhecer todas as funcionalidades.",
      keywords: ["teste", "trial", "demonstração", "grátis", "avaliar"]
    },
    {
      id: 4,
      question: "O sistema funciona na nuvem?",
      answer: "Sim, nosso sistema é 100% online e pode ser acessado de qualquer lugar com internet.",
      keywords: ["nuvem", "online", "cloud", "acesso", "internet"]
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleWhatsAppContact = (message = '') => {
    const phoneNumber = "5521973047049"; // Substitua pelo seu número
    const defaultMessage = message || "Olá! Gostaria de conhecer mais sobre o Sistema ARK.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const handleFaqSelect = (faq) => {
    setSelectedFaq(faq);
  };

  const handleContactAboutFaq = (faq) => {
    const message = `Olá! Tenho uma dúvida sobre: "${faq.question}". Pode me ajudar?`;
    handleWhatsAppContact(message);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <div className="whatsapp-float" onClick={() => setIsOpen(true)}>
        <div className="whatsapp-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
        <div className="whatsapp-pulse"></div>
      </div>

      {/* Modal de Suporte */}
      {isOpen && (
        <div className="whatsapp-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="whatsapp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="whatsapp-modal-header">
              <h3>🤖 Assistente Virtual - Sistema ARK</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>

            <div className="whatsapp-modal-content">
              {!selectedFaq ? (
                <>
                  <div className="welcome-message">
                    <p>Olá! 👋 Como posso ajudar você hoje?</p>
                    <p>Pesquise abaixo ou escolha uma das perguntas frequentes:</p>
                  </div>

                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Digite sua dúvida aqui..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="faq-list">
                    {filteredFaqs.length > 0 ? (
                      filteredFaqs.map(faq => (
                        <div key={faq.id} className="faq-item" onClick={() => handleFaqSelect(faq)}>
                          <span className="faq-icon">❓</span>
                          <span className="faq-question">{faq.question}</span>
                          <span className="faq-arrow">→</span>
                        </div>
                      ))
                    ) : (
                      <div className="no-results">
                        <p>Não encontrei respostas para sua busca.</p>
                        <button 
                          className="contact-btn"
                          onClick={() => handleWhatsAppContact(`Olá! Tenho uma dúvida sobre: "${searchTerm}"`)}
                        >
                          💬 Falar com Suporte
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="quick-actions">
                    <button 
                      className="action-btn primary"
                      onClick={() => handleWhatsAppContact()}
                    >
                      💬 Falar Diretamente no WhatsApp
                    </button>
                  </div>
                </>
              ) : (
                <div className="faq-detail">
                  <button className="back-btn" onClick={() => setSelectedFaq(null)}>
                    ← Voltar
                  </button>
                  
                  <div className="faq-detail-content">
                    <h4>{selectedFaq.question}</h4>
                    <div className="faq-answer">
                      <p>{selectedFaq.answer}</p>
                    </div>
                    
                    <div className="faq-actions">
                      <button 
                        className="action-btn secondary"
                        onClick={() => setSelectedFaq(null)}
                      >
                        ✅ Resolveu minha dúvida
                      </button>
                      <button 
                        className="action-btn primary"
                        onClick={() => handleContactAboutFaq(selectedFaq)}
                      >
                        💬 Ainda preciso de ajuda
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppSupport;