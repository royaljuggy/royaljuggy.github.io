import React from 'react'
import './services.css'
import ServicesListItem from './ServicesListItem'

const ServicesList = (props) => {
  return (
    <article className="service">
        <div className="service__head">
            <h3>{props.header}</h3>
            <h4>{props.position}</h4>
        </div>
        <p className="blurb">
          {props.blurb} <br></br><br></br>
          {props.timeframe} <br></br><br></br>
          {props.location}
        </p>
        <ul className="service__list">
            {props.items.map(item => (
                <ServicesListItem text={item}/>
            ))}
        </ul>
    </article>
  )
}

export default ServicesList