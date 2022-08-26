import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const SocialsInline = () => {
  return (
    <div className="socials-inline">
        <a href="https://www.linkedin.com/in/jacob-meksavanh/"><BsLinkedin size={40}/></a>
        <a href="https://github.com/royaljuggy"><FaGithub size={40}/></a>
    </div>
  )
}

export default SocialsInline