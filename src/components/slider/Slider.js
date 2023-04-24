import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper";

function Slider() {
    return (
        <div className='banner container'>
            <Swiper
                loop={true} navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide><img src="https://images.uzum.uz/cghe007g49devoabuk4g/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cgqfulfg49devoadeui0/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cgqmsq7g49devoadh81g/main_page_banner.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider