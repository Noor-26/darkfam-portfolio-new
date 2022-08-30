import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaRegEye } from 'react-icons/fa';
import { SiWebpack} from 'react-icons/si';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Projects.scss"; 

// import required modules
import { EffectCoverflow, Autoplay} from "swiper";

const Projects = () => {
    const [books, setbooks] = useState([])
  
  
    useEffect(() => {
      fetch("https://salty-chamber-85536.herokuapp.com/projects")
        .then((res) => res.json())
        .then((data) => setbooks(data));
    }, []);
  return (
    <div className="pb-14 h-[80vh] w-full">
      <div className="mt-[15vh]">

        <p className='text-center text-3xl mb-10' >Projects</p>
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 2,
            },
          }}
        autoplay={true}
        slidesPerView={2}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
       loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
      {books?.map((book) => (
              <SwiperSlide key={book._id}>
        <div class="card">
<div class="card-img">
  <img src={book.img} alt="" />
</div>
  <div class="card-info flex">
    <FaGithub className="text-[24px] mr-2 text-white"/>
    <FaRegEye className="text-[24px] mr-2 text-white"/>
    <SiWebpack className="text-[24px] mr-2 text-white"/>
  
    
  </div>
</div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
    </div>

    </div>
  )
}

export default Projects