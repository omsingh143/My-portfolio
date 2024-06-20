import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Headersocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/om-singh-47149927b/" target='_blank'>< FaLinkedin /></a>
        <a href="https://github.com/omsingh143" target='_blank'><FaGithub /></a>
        <a href="https://api.whatsapp.com/send?phone=917870305775" target='_blank'><FaWhatsapp /></a>

    </div>
  )
}

export default Headersocial