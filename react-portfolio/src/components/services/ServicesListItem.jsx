import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const ServicesListItem = (item) => {
  return (
    <li>
        <BiCheck className="service__list-icon" size={50}/>
        <p>{item.text}</p>
    </li>
  )
}

export default ServicesListItem