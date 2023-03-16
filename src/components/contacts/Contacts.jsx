import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contacts = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cny40f4', 'template_ckucpv3', form.current ,'g8uqz9vHmix8Jn7ww')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
      <MdOutlineEmail/>
      <h4>Email</h4>
      <h5>ojesvi.behal15@gmail.com</h5>
      <a href="mailto:ojesvi.behal15gmail.com">Send a message</a>
      </article>
      <article className="contact__option">
      <FaLinkedin/>
      <h4>Linkedin</h4>
      <h5>Ojesvi Behal</h5>
      <a href="https://www.linkedin.com/in/ojesvi-behal-33a935200/">Send a message</a>
      </article>
      <article className="contact__option">
      <BsWhatsapp/>
      <h4>Whatsapp</h4>
      <a href=" https://wa.me/7975248906">Send a message</a>
      </article>
      <article className="contact__option">
      <BsGithub/>
      <h4>Github</h4>
      <a href="https://github.com/ojesvi435">Click here</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your full name"  required />
      <input type="email" name="email" placeholder="your email"/>
      <textarea name="message" rows="7" placeholder="your message" required/>
      <button type='submit' className='btn btn-primary'>Send message</button>
      </form>
      <a href="#header" className='scroll_up'>Scroll Up</a>
      </div>

    </section>
  )
}

export default Contacts
