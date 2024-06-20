import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile2.png'
import Headersocial from './Headersocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Om Singh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Headersocial />

        <div className="me">
          <img src= {ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down' > Scroll Down </a>
      </div>
    </header>
  )
}

export default header