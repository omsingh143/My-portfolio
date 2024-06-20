import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
    <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
      
    
    <div className="about_content">
      <div className="about_cards">
        <article className='about_card'>
          <TbAward className='about_icon' />
          <h5>Experience</h5>
          <small>Fullstack Developer</small>
        </article>
        <article className='about_card'>
          <FiUsers className='about_icon' />
          <h5>Clients</h5>
          <small> Self-Employed</small>
        </article>
        <article className='about_card'>
          <VscFolderLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>3+ Proojets Completed</small>
          
        </article>
      </div>
      {/* <p>I’m a certified full-stack developer, who enjoys building interactive  interfaces with JavaScript and React .
            <br />
           <br /> */}
           <p>
            I'm open to Full-stack(remote/onsite) opportunities with a passion of Front-end development.
            If you like what you see and have a project you need coded, 
            don’t hestiate to contact me.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
      </div>
      
      
        
    </div>
   </section>
  )
}

export default about