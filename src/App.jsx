import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/skills'
import Timeline from './components/Timeline/Timeline'
import Projects from './components/Projects/Projects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About />
      <Timeline />
      <Skills />
      <Projects/>
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
