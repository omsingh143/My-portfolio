import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images.jpeg'
import IMG2 from '../../assets/749f46144108981.Y3JvcCwxNTM0LDEyMDAsMTMyLDA.jpg'
import IMG3 from '../../assets/maxresdefault.jpg'
import IMG4 from '../../assets/images.png'
import IMG5 from '../../assets/sddefault.jpg'
import IMG6 from '../../assets/maxresdefault (1).jpg'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Amazon-Clone",
    github:"https://github.com/omsingh143/Amazon-clone/tree/main/Amazon",
    demo: "https://static-amazon-app.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    github:"https://github.com/omsingh143/Gym-Fitness",
    title: "Gym-fitness",
    demo: "https://gym-fitness-tracker.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Quiz-App",
    github:"https://github.com/omsingh143/Quiz-App/tree/main/Quiz-app",
    demo: "https://digital-quiz.netlify.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Random-Password-Generator",
    github: "https://github.com/omsingh143/Password-Generator/tree/main/Password%20Generator",
    demo: "https://digital-password-generator.netlify.app/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Weather-App",
    github: "https://github.com/omsingh143/Weather-app/tree/main/weather-app",
    demo: "https://weather-deploy-site.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Simple Calculator",
    github: "https://github.com/omsingh143/calculator",
    demo: "https://calculator-simple-site.netlify.app/",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn" target='_blank'>
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;



        /* <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn'>Github</a>
           <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */
  
     

