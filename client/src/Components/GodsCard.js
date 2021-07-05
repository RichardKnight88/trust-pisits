/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const GodsCard = ( { name, image }) => {
  
  return (
    <div>
      <Link  to={`/gods/${name.toLowerCase()}`}>
        
        <h3 className="color">{name}</h3>
        <img className='yellow-border' src={image} alt={name} title={name}/>
      </Link>
    </div>
  ) 
}

export default GodsCard