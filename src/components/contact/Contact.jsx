import { React, useRef }  from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // to do? - won't work until I find a way to hide the secret key :)
    emailjs.sendForm('NEED_BACKEND_FOR_SECRET_KEY', 'template_37gpr9m', form.current, 'YOUR_PUBLIC_KEY')
    e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Let's Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">


          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>jmeksava@uwaterloo.ca</h5>
            <a href="mailto:jmeksava@uwaterloo.ca">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Jacob Meksavanh</h5>
            <a href="https://www.linkedin.com/in/jacob-meksavanh/">Let's Connect!</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact