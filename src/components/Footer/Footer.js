import React from 'react'
import { FaFacebook,FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="py-5 flex items-center justify-center   ">
    <p> Copyright &copy; {year} DARKFAM | </p>
    <div className="flex mt-4">
        <a href="https://www.facebook.com/Mahtab.khannoorkwkw/" target="_blank" className="footer-icon px-1"><FaFacebook/></a>
        <a href="https://www.linkedin.com/in/mahtab-khan-noor/"  target="_blank" className="footer-icon px-1"><BsLinkedin/></a>
        <a href="https://github.com/Noor-26" target="_blank" className="footer-icon px-1"><FaGithub/></a>

    </div>
 </footer>
  )
}

export default Footer