import React from 'react'
import './about.css'
import LetsTalkButton from '../global/LetsTalkButton'

// TODO: update photo -> crop to square (1:1)
import aboutMe from '../../assets/jacob.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <p>TODO: include schooling information</p>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            TODO
            <img src={aboutMe} alt=""/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* TODO: could refactor cards into own component with assignable fields */}
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>16 months schooling - 8 months developer co-op</small>
            </article>
            
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Past Companies</h5>
              <small>eSolutions, Infor</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Notable Projects</h5>
              <small>Chess Group Project, React Portfolio Website</small>
            </article>
          </div>

          <p>Lorem ipsum
          </p>

          <LetsTalkButton/>
        </div>
      </div>
    </section>
  )
}

export default About