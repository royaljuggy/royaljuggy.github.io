import React from 'react'

// could refactor imports
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'

// === Built in reference to: https://youtu.be/G-Cr00UYokU
//     with my own changes!

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        {/* add if I want to display projects -> <Portfolio /> */}
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App