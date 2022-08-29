import React from 'react'
import './About.css'
const About = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000" id="About" className="mx-10">
    <div >
        <h5 className="mt-3 pt-3 text text-center">About</h5>
        <h2 className='pt-1' >Personal Info</h2>
        <h5 className='pt-2'>Get to know more about me</h5>
    </div>
    <div className="grid mx-auto grid-cols-1 md:grid-cols-2 my-5" >
        <div className="">
            <h3 className="text-start">Hello!</h3>
            <p className="text-justify">My name is Mahtab and i am a passtionate Frontend Web Developer using web technologies to build amazing projects and focusing on solving problems for different industruies using the power of technology.
            </p>
            <p className="text-start">i will love to hear from you .Wheteher its a project, job opportunatity or just a chat, Feel free to contact me.
            </p>
        </div>
        <div class="  ">
            <h3 >skils</h3>
            <div className="skils container pt-3 ps-5">
                <p class="skil">HTML</p>
                <p class="skil">CSS</p>
                <p class="skil">Javascript</p>
                <p class="skil">React</p>
                <p class="skil">Bootstrap</p>
                <p class="skil">Redux</p>
                <p class="skil">Socket.io</p>
                <p class="skil">tailwind</p>
                <p class="skil">Nodejs</p>
                <p class="skil">MongoDB</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About