import React from 'react'
import data from "../helper/data";
// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const SwipperSliderAlbums = () => {
  return (
    <div className='app'>
 {data.map((item, index) => {
        return (
            <Swiper
            key={index}
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
              <img src={item.src.large} />
            </SwiperSlide>
          </Swiper>
        );
      })}


   
  </div>
  )
}
