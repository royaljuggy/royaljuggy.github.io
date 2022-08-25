import React from 'react'
import './services.css'
import ServicesListItem from './ServicesListItem'

const ServicesList = (props) => {
  return (
    <article className="service">
        <div className="service__head">
            <h3>{props.header}</h3>
        </div>
        <ul className="service__list">
            {props.items.map(item => (
                <ServicesListItem text={item}/>
            ))}
        </ul>
    </article>
  )
}

export default ServicesList