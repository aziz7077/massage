import s from './slideSertif.module.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";


const SlideSertif = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
                <SwiperSlide><img src="/sertif.png" alt="sertif" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SlideSertif;