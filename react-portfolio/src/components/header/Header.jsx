import React from 'react'
import './header.css'
import CTA from './CTA'
import photoOfMe from '../../assets/jacob.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jacob Meksavanh</h1>
        <h5 className="text-light">
          Software Developer
        </h5>

        {/* Call to Actions */}
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={photoOfMe} alt="Me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header