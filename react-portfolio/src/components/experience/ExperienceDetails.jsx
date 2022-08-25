import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const ExperienceDetails = (props) => {
  return (
    <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon"/>
        <div>
            <h4>{props.skill}</h4>
            <small className="test-light">{props.experience}</small>
        </div>
    </article>
  )
}

export default ExperienceDetails