import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/vishvamohan.jpeg'
// import AVTR2 from '../../assets/sanket.jpg'
import AVTR3 from '../../assets/hitesh.jpeg'
import AVTR4 from '../../assets/sinha.jpeg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar:AVTR1,
    name: 'Vishva Mohan',
    review: 'Vishva Mohan Sir is a dedicated and knowledgeable mentor in the technical field, known for his ability to simplify complex concepts. His practical, hands-on teaching style emphasizes real-world applications, ensuring a thorough understanding. As his student, I benefit from his commitment to your continuous improvement and success.'
  },
  // {
  //   avatar:AVTR2,
  //   name: 'Sanket Singh',
  //   review: ''
  // },
  {
    avatar:AVTR3,
    name: 'hitesh choudhary',
    review: 'Hitesh Choudhary is an expert in web development and a dedicated mentor. His teaching approach focuses on practical skills and real-world applications, making complex web development concepts accessible and easy to understand. As his student,I benefit from his comprehensive knowledge and commitment to your success in mastering web development..'
  },
  {
    avatar:AVTR4,
    name: 'Shaurya Sinha',
    review: 'Shaurya Sinha is an expert in web development and a dedicated mentor. His teaching style focuses on practical, hands-on learning, making complex concepts easy to understand. As his student, I benefit from his deep knowledge, real-world experience, and commitment to your success in the field of web development.'
  }

]

// Daynamically 

function testimonial() {
  return (
    <section id='testimonial'>
      <h5>I had Learn from </h5>
      <h2>Mentors</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
       >
       {
        data.map(({avatar,name,review}, index) =>{
          return (
            <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar}  />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>

        </SwiperSlide>
          )
        } )
       }
      </Swiper>
   </section>
  )
}

export default testimonial




// function testimonial() {
//   return (
//     <section id='testimonial'>
//       <h5>Review From Clients</h5>
//       <h2>testimonials</h2>

//       <div className="container testimonials_container">
//         <article className="testimonial">
//           <div className="client_avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className='client_name'>Ernest Avhiever</h5>
//           <small className='client_review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, recusandae. Dignissimos fugit corrupti sint consequatur?</small>

//         </article>

//         <article className="testimonial">
//           <div className="client_avatar">
//             <img src={AVTR2} alt="Avatar One" />
//           </div>
//           <h5 className='client_name'>Ernest Avhiever</h5>
//           <small className='client_review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, recusandae. Dignissimos fugit corrupti sint consequatur?</small>

//         </article>

//         <article className="testimonial">
//           <div className="client_avatar">
//             <img src={AVTR3} alt="Avatar One" />
//           </div>
//           <h5 className='client_name'>Ernest Avhiever</h5>
//           <small className='client_review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, recusandae. Dignissimos fugit corrupti sint consequatur?</small>

//         </article>

//         <article className="testimonial">
//           <div className="client_avatar">
//             <img src={AVTR4} alt="Avatar One" />
//           </div>
//           <h5 className='client_name'>Ernest Avhiever</h5>
//           <small className='client_review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, recusandae. Dignissimos fugit corrupti sint consequatur?</small>

//         </article>
//       </div>
//    </section>
//   )
// }

// export default testimonial