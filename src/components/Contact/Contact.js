import React, { useRef, useState } from 'react'
import './Contact.css'
// import emailjs from '@emailjs/browser';
// import {toast} from 'react-toastify'
import { HiLocationMarker,HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import {toast} from "react-toastify"
const Contact = () => {

    const form = useRef();
    const sendMail = (e) => {
      toast.success('Email sent')
      e.preventDefault();
        emailjs.sendForm("service_i3h7631","template_z5iewo7",form.current,"e6LBNcx9ezCTU0Xds").then((result) => {
            console.log(result.text);
          }, (error) => {
              console.error(error.text);
          });
       
          e.target.reset()
    }
   
  
  return (
    <div className='h-auto  pt-0 md:pt-4 md:pb-5' id="contact">
      <div data-aos="zoom-in-down"
    data-aos-duration="1000">

        <p className='text-5xl font-bold text-center my-4 heading_font_2'> Contact Me</p>
        <p class="text-center text-xl  mx-auto mb-5 text-capitalize">Want to discuss something? Please don't hesitate to contact me directly.
        </p>
      </div>
        <form className='mx-5' data-aos="fade-right"
  onSubmit={sendMail} ref={form}
    data-aos-duration="1400" >
        <div className="grid grid-cols-3 gap-2">

          <div className="col-span-2 md:col-span-2">
    <div className="grid grid-cols-2 gap-2">

        <div class="form__group field ">
<input required placeholder='Name'  class="form__field  "  name="from_name" id="from_name" type="input"    />
<label class="form__label" for="name">Type your Name</label>
</div>
        <div class="form__group field ">
<input required placeholder='Email' class="form__field  "  name="email" id="email" type="input"    />
<label class="form__label" for="name">Type your Email</label>
</div>

</div>

<div class="form__group field mt-2"> 
<input required placeholder='subject' class="form__field " name="subject" id="subject" type="input"    />
<label class="form__label" for="name">Type your Subject</label>
</div>

<div class="form__group field mt-2">
<textarea name="message" id="message" class="form__field"  rows="1" placeholder='message'  required></textarea>
<label class="form__label" for="name" >Type your Message</label>
</div>

<div class="text-center text-md-left">
        
                <button className="mx-auto sendButton mt-2 " type='submit' >
 
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
            </div>

</div>


<div class=" text-center" data-aos="fade-left"
    data-aos-duration="1400">
            <ul class="list-unstyled mb-0">
                <li><HiLocationMarker class=" my-3  text-3xl text  mx-auto"/>
                    <p>Dhaka, Bangladesh</p>
                </li>

                <li>
                <BsFillTelephoneFill class=" my-4  text-2xl text  mx-auto"/>
                    <p>+880 1631405461</p>
                </li>

                <li><HiMail class=" my-3  text-3xl text  mx-auto"/>
                    <p>mahtabkhannoor@gmail.com</p>
                </li>
            </ul>
        </div>


</div>
        </form>
       

    </div>
  )
}

export default Contact