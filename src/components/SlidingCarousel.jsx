import React, { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './SlidingCarousel.css';

// Importe os módulos necessários
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const swiperRef = useRef(null);
  const autoplayTimeoutRef = useRef(null);

  const videoURL = "https://res.cloudinary.com/dnm2ogmrp/video/upload/v1751920298/V%C3%ADdeo_do_WhatsApp_de_2025-07-01_%C3%A0_s_17.38.31_24e5f128_qvbr4v.mp4";
  const videoPosterURL = "https://res.cloudinary.com/dnm2ogmrp/video/upload/v1751920298/V%C3%ADdeo_do_WhatsApp_de_2025-07-01_%C3%A0_s_17.38.31_24e5f128_qvbr4v.jpg";

  const handlePlayClick = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      // Para o autoplay do carrossel quando o vídeo for iniciado
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
      // Limpa o timeout de 1 minuto se existir
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    }
    setIsVideoPlaying(true);
  };
  
  const handleSlideChange = (swiper) => {
    const videoSlideRealIndex = 5;

    // Se o slide não for o do vídeo, reseta para o estado inicial (poster)
    if (swiper.realIndex !== videoSlideRealIndex) {
      setIsVideoPlaying(false);
      
      // Garante que o autoplay reinicie
      if (swiper.autoplay && !swiper.autoplay.running) {
        swiper.autoplay.start();
      }
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChangeTransitionEnd={handleSlideChange}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Slides de imagem */}
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnm2ogmrp/image/upload/v1751912421/tela1_dka8ls.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnm2ogmrp/image/upload/v1751912421/tela2_ianoua.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnm2ogmrp/image/upload/v1751912421/tela3_lg6ny6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnm2ogmrp/image/upload/v1751912421/tela4_stzh9g.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dnm2ogmrp/image/upload/v1751912422/tela5_qiseyk.png" />
        </SwiperSlide>

        {/* VÍDEO COMO ÚLTIMO SLIDE - COM LÓGICA DE PLAY */}
        <SwiperSlide>
          <div className="video-container">
            {isVideoPlaying ? (
              <video
                src={videoURL}
                controls
                autoPlay /* O atributo autoPlay vai tocar o vídeo assim que ele for renderizado */
                className="slide-video"
              ></video>
            ) : (
              <div className="video-poster" onClick={handlePlayClick}>
                <img src={videoPosterURL} alt="Capa do vídeo de demonstração" className="poster-image" />
                <div className="play-button-overlay">
                  <div className="play-button-icon"></div>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}