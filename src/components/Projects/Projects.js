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
import { useSelector, useDispatch } from 'react-redux'
// import required modules
import { EffectCoverflow, Autoplay} from "swiper";
import { projects, projectView } from "../Redux/Action/BookActions";

const Projects = () => {
    const myProjects = useSelector( state => state.projects.projects)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("https://salty-chamber-85536.herokuapp.com/projects")
          .then((res) => res.json())
          .then((data) => dispatch(projects(data)));
   
    }, [myProjects]);

    const sendProject = (projectDetails) => {
    dispatch(projectView([]))

    dispatch(projectView(projectDetails))
    console.log(projectDetails)
    }

  return (
    <div className="pb-14 h-[80vh] w-full">
      <div className="mt-[15vh]">

        <p className='text-5xl font-bold text-center mb-[40px] heading_font_2' >Projects</p>
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
      {myProjects?.map((project) => (
              <SwiperSlide key={project._id}>
        <div class="card">
<div class="card-img">
  <img src={project.img} alt="" />
</div>
  <div class="card-info flex">
    <a href={project.code} target="_blank"  class="tooltip"  data-tip="Visit Github">
    <FaGithub className="text-[24px] mr-2 text-white"/>
    </a>
    <label for="project_modal" className=" hover:text-primary duration-500  a" onClick={()=>sendProject(project)} >
    <FaRegEye className="text-[24px] cursor-pointer  mr-2 text-white" />
  </label>

    <a href={project?.visit} target="_blank" class="tooltip"  data-tip="Visit Website">

    <SiWebpack className="text-[24px] mr-3 text-white"/>
    </a>
    
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