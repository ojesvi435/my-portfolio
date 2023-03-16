import React from 'react'
import './skills.css'
import {DiJava} from 'react-icons/di'
import { FaPython } from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {BiCopyright} from'react-icons/bi'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
const Skills = () => {
  return (
    <section id="skills">
    <h5>What skills I have</h5>
    <h2>My skills</h2>
    <div className="container skills__container">
    <div className="frontend_experience">
    <h3>Frontend development</h3>
    <div className="skills__content">
    <article className='skills__details'>
    <SiHtml5/>
    <h4>HTML</h4>
    </article>
    <article className='skills__details'>
    <SiCss3/>
    <h4>CSS</h4>
    </article>
    <article className='skills__details'>
    <SiBootstrap/>
    <h4>Bootstrap</h4>
    </article>
    <article className='skills__details'>
    <SiJavascript/>
    <h4>Javascript</h4>
    </article>
    <article className='skills__details'>
    <SiReact/>
    <h4>React</h4>
    </article>
    </div>
    </div>
    <div className='backend_experience'>
    <h3>Backend development</h3>
    <div className="skills__content">
    <article className='skills__details'>
    <FaNodeJs/>
    <h4>NodeJS</h4>
    </article>
    <article className='skills__details'>
    <SiMongodb/>
    <h4>MongoDB</h4>
    </article>
    <article className='skills__details'>
    <SiMysql/>
    <h4>MySQL</h4>
    </article>
    <article className='skills__details'>
    <SiExpress/>
    <h4>Express</h4>
    </article>
    </div>
    </div>
    <div className="Languages">
    <h3>Languages</h3>
    <div className="skills__content">
    <article className='skills__details'>
    <BiCopyright/>
    <h4>C</h4>
    </article>
    <article className='skills__details'>
    <SiCplusplus/>
    <h4>C++</h4>
    </article>
    <article className='skills__details'>
    <FaPython/>
    <h4>Python</h4>
    </article>
    <article className='skills__details'>
    <DiJava/>
    <h4>Java</h4>
    </article>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Skills
