import React from 'react'
import './experience.css'
import ExperienceDetails from './ExperienceDetails'

// experience variables
const BEGINNER = "Basic";
const INTERMEDIATE = "Intermediate";
const EXPERT = "Expert";
const WORK_EXP = " *";
// TODO: refactor out of jsx file
const FE_SKILLS = [
  {
    id: 1,
    name: "HTML",
    experience: BEGINNER,
  },
  {
    id: 2,
    name: "CSS",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 3,
    name: "JavaScript / TS",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 4,
    name: "Angular",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 5,
    name: "React",
    experience: BEGINNER,
  }

]

const BE_SKILLS = [
  {
    id: 1,
    name: "Java",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 2,
    name: "C++",
    experience: INTERMEDIATE,
  },
  {
    id: 3,
    name: "Kotlin",
    experience: BEGINNER + WORK_EXP,
  },
  {
    id: 4,
    name: "SQL",
    experience: BEGINNER + WORK_EXP,
  },
  {
    id: 5,
    name: "Jenkins",
    experience: BEGINNER + WORK_EXP,
  },
  {
    id: 6,
    name: "Git and SVN",
    experience: INTERMEDIATE + WORK_EXP,
  }
]


const Experience = () => {
  return (
    <section id="experience">
      <h5>Webdev, Back-end, and More!</h5>
      <h2>My Skills and Technologies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FE_SKILLS.map(skill => (
              <ExperienceDetails key={skill.id} skill={skill.name} experience={skill.experience}/>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development (and More)</h3>
          <div className="experience__content">
            {BE_SKILLS.map(skill => (
              <ExperienceDetails key={skill.id} skill={skill.name} experience={skill.experience}/>
            ))}
          </div>
        </div>
      </div>

      <p className="text">Asterisk (*) indicates used during one or more of my 4 month co-op terms.</p>

    </section>
  )
}

export default Experience