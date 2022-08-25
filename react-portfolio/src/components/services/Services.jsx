import React from 'react'
import './services.css'
import ServicesList from './ServicesList'

const TECHSTACK = {
  header: "Experiencing Modern Technologies Professionally",
  items: [
    "LOREM IPSUM",
    "LOREUM IPSUM2",
  ]
}

const PROFESSIONAL = {
  header: "Professional Experience? -> Broadening My Experience in the Field",
  items: [
    "Test"
  ]
}

const BUILDING = {
  header: "Building Products People Will Use",
  items: []
}

const Services = () => {
  return (
    // technically, this would be services provided by a freelancer.
    <section id="services">
      <h5>What I'm Interested In</h5>
      <h2>Technologies, Experience, and More</h2>

      <div className="container services__container">
        <ServicesList header={TECHSTACK.header} items={TECHSTACK.items}/>
        <ServicesList header={PROFESSIONAL.header} items={PROFESSIONAL.items}/>
        <ServicesList header={BUILDING.header} items={BUILDING.items}/>
      </div>
    </section>
  )
}

export default Services