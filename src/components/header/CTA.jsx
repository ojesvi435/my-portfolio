import React from 'react'
import CV from '../../assets/My_CV.pdf'
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn' target="_blank" rel="noreferrer">Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA;
