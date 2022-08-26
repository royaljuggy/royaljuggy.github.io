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
          {props.timeframe} <br></br><br></br>
          {props.blurb}
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