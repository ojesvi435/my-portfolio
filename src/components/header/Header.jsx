import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocial from './Headersocial'
import ME from '../../assets/myimg-removebg-preview.png'

const Header = () => {
  return (
    <section id='header'>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ojesvi Behal</h1>
        <h5 className="text-light">College undergaduate student</h5>
        <CTA />
        <Headersocial/>
        <div className="me">
        <img src={ME} alt="ME" ></img>
        </div>
        <a href="#contacts" className='scroll_down'>Scroll down</a>
      </div>

      </header>
    </section>
  )
}

export default Header
