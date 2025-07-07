import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SlidingCarousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
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
       
      </Swiper>
    </>
  );
}
