import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {FaPinterestP} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from'../../assets/myimg-removebg-preview.png'
const About = () => {
  return (
    <section id='About'>
    <h5>Get to know </h5>
    <h2>About me</h2>
    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
    <img src={ME} alt="ME"></img>
    </div>
    </div>
    <div className="about__content">
    <div className="about__cards">
    <article className="about__card">
    <GiGraduateCap className='about__icon'/>
    <h5>B.E. Information science</h5>
    <small>3rd year student</small>
    </article>
    <article className="about__card">
    <FaPinterestP className='about__icon'/>
    <h5>Sports</h5>
    <small>Cricket,Football</small>
    </article>
    <article className="about__card">
    <VscFolderLibrary className='about__icon'/>
    <h5>Projects</h5>
    <small>3 Projects completed</small>
    </article>
    </div>
    <p>
    I am currently pursuing my Bachelors of Engineering in Information Science and Engineering from JSS Science and Technology University.
    </p>
    <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About
