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
    name: "React",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 5,
    name: "Angular",
    experience: INTERMEDIATE + WORK_EXP,
  }

]

const BE_SKILLS = [
  {
    id: 1,
    name: "C#",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 2,
    name: "Python",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 3,
    name: "Java",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 4,
    name: "SQL (MySQL, Postgres)",
    experience: INTERMEDIATE + WORK_EXP,
  },
  {
    id: 5,
    name: "C++",
    experience: INTERMEDIATE,
  },
  {
    id: 6,
    name: "Git",
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