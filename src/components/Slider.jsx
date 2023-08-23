import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://images.hdqwalls.com/download/marvels-spider-man-pc-4k-jf-1920x1080.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1533610067042-1cee3c403282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images4.alphacoders.com/171/thumb-1920-171916.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-vEzEIxKIZXJUgrjLLSkpaCOPzl9oVsGkg&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-Desktop-Wallpaper-HD-Free-download-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
