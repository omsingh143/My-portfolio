

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {FaLinkedin} from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pavfvl8', 'template_unlqae4', form.current, '3JKcydlh3GFF12Kzp')
      
      e.target.reset();
  };
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me </h2>

     <div className="container contact_container">
       <div className="contact_options">
         <article className="contact_option">
           <MdOutlineEmail className='contact_option-icon' />
           <h4>Email</h4>
           <h5>oms946156@gamil.com</h5>
           <a href="mailto:oms946156@gamail.com" target='_blank'>Send a Message</a>
         </article>
         <article className="contact_option">
           <RiMessengerLine className='contact_option-icon' />
           <h4>Messanger</h4>
           
           <a href="https://www.facebook.com/profile.php?id=100015566530908" target='_blank'>Send a Message</a>
         </article>
         <article className="contact_option">
           <BsWhatsapp className='contact_option-icon' />
           <h4>What's App</h4>
           
           <a href="https://api.whatsapp.com/send?phone=917870305775" target='_blank'>Send a Message</a>
         </article>

       </div>


        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact