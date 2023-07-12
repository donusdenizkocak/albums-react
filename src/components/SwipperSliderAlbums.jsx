import React from 'react'
import data from "../helper/data";
// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideshowLightbox } from "lightbox.js-react";
import { initLightboxJS } from "lightbox.js-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useEffect } from "react";

import '../styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

export const SwipperSliderAlbums = () => {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <div className='app'>
 
        
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                padding: "7rem",
              }}
            // spaceBetween={10}         
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map((item, index) => {
              return (
            <SwiperSlide  key={index}  className="effect">
            <SlideshowLightbox>
            <img src={item.src.large} style={{height:"400px",objectFit:"cover"}}/>
          </SlideshowLightbox>
            </SwiperSlide>
       
        );
        
      }
      )}
</Swiper>

   
  </div>
  )
}
