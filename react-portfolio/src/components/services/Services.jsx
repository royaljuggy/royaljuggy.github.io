import React from 'react'
import './services.css'
import ServicesList from './ServicesList'

// @TODO - add larger blurb that outlines my technically responsibilities in the role.
const data = [
  {
    header: "Infor",
    position: "Software Developer",
    timeframe: "[May 2022 - August 2022]",
    blurb: "Full-stack Junior Software Developer on the Workforce Management product",
    items: [
      "Developed features using a full tech-stack of Angular, Java, SQL, Cucumber, Crucible, Jenkins, and more",
      "Led multiple sprint activities in bi-weekly sprints to complete tasks and team goals",
      "Contributed angular, CSS, HTMl improvements to the IDS Enterprise open-source library",
      "Utilized self-management abilities to learn new technologies including: Kotlin, Angular, Jenkins, Cucumber, SVN, SQL",
    ]
  },
  {
    header: "eSolutions",
    position: "Website Configuration Specialist",
    timeframe: "[May 2021 - August 2021]",
    blurb: "iCreate Content Management System Configurer",
    items: [
      "Configured iCreate modules and data migrations for public-sector clients",
      "Corrected websites to meet WCAG level A and level AA accessibility requirements",
      "Created succinct and clear internal documentation applicable for all audiences",
      "Succeeded on concurrent remote-work projects with little supervision",
    ]
  },
  {
    header: "Peel District School Board",
    position: "Camp Explore Leader",
    timeframe: "[July 2019 - August 2019]",
    blurb: "Teaching assistant helping to build 21st century-skills in middle-school students through mathematical and literary activities.",
    items: [
      "Led students and developed their critical thinking and collaborative abilities",
      "Weekly group planning of student activities through Google Docs and meetings",
      "Supervision of students during off-time; fostered an inclusive play environment",
    ]
  }
]
const Services = () => {
  return (
    // technically, this would be services provided by a freelancer.
    <section id="services">
      <h5>My Past Employment</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        {
          data.map(({header, position, timeframe, blurb, items}) => {
            return (
              <ServicesList header={header} position={position} timeframe={timeframe} blurb={blurb} items={items}></ServicesList>
            )
          })
        }

      </div>
    </section>
  )
}

export default Services