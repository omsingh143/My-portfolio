import React from 'react'
import Header from './components/header/Header'
import  Nav  from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


import './index.css'

const App = () => {
  return (
    <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Testimonial />
         <Contact />
         <Footer />
         
    </>
  )
}

export default App