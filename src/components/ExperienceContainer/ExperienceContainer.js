import React from 'react'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id="exp">
      <h1>Experience</h1>
      <div className='experienceContainer__info'>
        <ExperienceContainer 
        number="1+" title="Clients"
       />
        <ExperienceContainer 
        number="20+" title="Projects"
        style={{backgroundColor:"#f64c08"}}
       />
        <ExperienceContainer 
        number="10+" title="Trained friends"
       />
      </div>
    </Element>
  )
}

export default ExperienceContainer
