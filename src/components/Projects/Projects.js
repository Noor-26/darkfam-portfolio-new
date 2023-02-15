import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { FaGithub } from 'react-icons/fa';
import { SiWebpack} from 'react-icons/si';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Projects.scss"; 
import { useSelector, useDispatch } from 'react-redux'
// import required modules
import { projects, projectView } from "../Redux/Action/BookActions";


const Projects = () => {
    const myProjects = useSelector( state => state.projects.projects)
    const dispatch = useDispatch()


    useEffect(() => {
        fetch("https://darkfam-portfolio-server.onrender.com/projects")
          .then((res) => res.json())
          .then((data) => dispatch(projects(data)));
   
    }, [myProjects]);

    const sendProject = (projectDetails) => {
    dispatch(projectView([]))

    dispatch(projectView(projectDetails))
    console.log(projectDetails)
    }

  return (
    <div className="pb-14  w-full" id="projects">
      <div className="mt-[15vh]">

        <p className='text-5xl font-bold text-center mb-[40px] heading_font_2' >Projects</p>
        <>
    <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto"   >
      {myProjects?.map((project) => (
        <div >
          <div>

           <img src={project.img} alt="" className="rounded-md" />
          </div>
          <div className="w-full glass_background relative bottom-[3rem] flex justify-between items-center h-12 px-4">
                    <div className=''>
            <p>{project.name}</p>
             
           

             </div>
             <div class=" flex gap-3 pr-2">
    <a href={project.code} target="_blank"  class="tooltip"  data-tip="Visit Github">
    <FaGithub className="text-[24px]  text-white"/>
    </a>
 

    <a href={project?.visit} target="_blank" class="tooltip"  data-tip="Visit Website">

    <SiWebpack className="text-[24px]  text-white"/>
    </a>
    
  </div>
                      
                      </div> 

        </div>
              
//         <div class="card w-screen flex-shrink-0 snap-center" >
// <div class="card-img">
//   <img src={project.img} alt="" />
// </div>
//   <div class="card-info flex">
//     <a href={project.code} target="_blank"  class="tooltip"  data-tip="Visit Github">
//     <FaGithub className="text-[24px] mr-2 text-white"/>
//     </a>
//     <label for="project_modal" className=" hover:text-primary duration-500  a" onClick={()=>sendProject(project)} >
//     <FaRegEye className="text-[24px] cursor-pointer  mr-2 text-white" />
//   </label>

//     <a href={project?.visit} target="_blank" class="tooltip"  data-tip="Visit Website">

//     <SiWebpack className="text-[24px] mr-3 text-white"/>
//     </a>
    
//   </div>
// </div>
           
            ))}
            </div>
      
    </>
    </div>
   
    </div>
  )
}

export default Projects