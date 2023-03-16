import React from 'react'
import './platformlinks.css'
import AVTR1 from '../../assets/HackerRank_Icon-1000px.png'
import AVTR2 from '../../assets/LeetCode_Sharing.png'

const platformlinks = () => {
  return (
    <section id='portfolio'>
      <h5>Coding platfrom links </h5>
      <h2>Coding platforms</h2>
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
          </div>
          <a href='https://auth.geeksforgeeks.org/user/ojesvibehal15/' className='client__name' target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar one">HackerRank</img>
          </div>
          <a href='https://www.hackerrank.com/ojesvi_behal15' className='client__name' target="_blank" rel="noopener noreferrer">HackerRank</a>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar one">LeetCode</img>
          </div>
          <a href='https://leetcode.com/ojesvi1234/' className='client__name' target="_blank" rel="noopener noreferrer">LeetCode</a>
        </article>
      </div>
    </section>
  )
}

export default platformlinks;
