import React from 'react';

const Contact = () => {
  const whatsappNumber = "5521973047049"; // Coloque seu número com código do país
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Sistema ARK.")}`;

  return (
    <footer id="contato" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Vamos conversar?</h2>
        <p>
          Tem alguma dúvida ou quer uma demonstração? <br />
          Envie uma mensagem e vamos simplificar a gestão do seu negócio.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-button">
          Falar pelo WhatsApp
        </a>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} ARK Sistemas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;