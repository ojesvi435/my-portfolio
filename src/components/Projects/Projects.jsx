import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio 3.png'
const Projects = () => {
  return (
    <section id='Projects'>
      <h2>My recent Projects</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={IMG2} alt=''></img>
      </div>
      <h3>To do list</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com/ojesvi435/Todolist" className='btn'>Github</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={IMG1} alt=''></img>
      </div>
      <h3>Personal Portfolio</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://ojesvi-portfolio.netlify.app/" className='btn btn-primary' target="_blank">Live demo</a>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={IMG3} alt=''></img>
      </div>
      <h3>E commerce Application</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com" className='btn'>Github</a>
      </div>
      </article>
      </div>
    </section>
  )
}

export default Projects
