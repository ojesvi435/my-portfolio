import React from 'react'
import './Nav.css'
 import {AiOutlineHome} from 'react-icons/ai'
 import { AiOutlineUser } from 'react-icons/ai'
 import {RiTimeLine} from 'react-icons/ri'
 import {GrProjects} from 'react-icons/gr'
 import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);

  const toggleActiveNav = (nav) => {
    setActiveNav(activeNav === nav ? null : nav);
  }

  return (
    <nav>
    <a href="/" onClick={() => toggleActiveNav('#')} className={activeNav === '#' ? 'active' : ''} >
      <AiOutlineHome/>
    </a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav==="#About"?'active':''}><AiOutlineUser/></a>
      <a href="#Timeline"  onClick={() => setActiveNav('#Timeline')} className={activeNav==="#Timeline"?'active':''}><RiTimeLine/></a>
      <a href="#contacts"  onClick={() => setActiveNav('#contacts')} className={activeNav==="#contacts"?'active':''}><BiMessageSquareDetail/></a>
      <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav==="#Projects"?'active':''}><GrProjects/></a>
    </nav>
  )
}

export default Navbar;
