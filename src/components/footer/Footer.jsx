import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'><b>Om</b></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Portfolio</a></li>
        <li><a href="#testimonial">Testomonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://www.instagram.com/x_brown_boy_om_x/?next=%2F" target='_blank'><FiInstagram /></a>
        <a href="https://linkedin.com/in/om-singh-47149927b/" target='_blank'><FaLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Om Singh. All Right Reserved</small>
      </div>

    </footer>
  )
}

export default footer