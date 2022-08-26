import React from 'react'
import './about.css'

// TODO: update photo -> crop to square (1:1)
import aboutMe from '../../assets/jacob-square-lower-crop.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>At a glance</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt=""/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* TODO: could refactor cards into own component with assignable fields */}
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <p>16 months schooling - 8 months developer co-op</p>
            </article>
            
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Past Companies</h5>
              <p>eSolutions, Infor, Peel District School Board</p>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Notable Projects</h5>
              <p>Chess Group Project, React Portfolio Website</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About