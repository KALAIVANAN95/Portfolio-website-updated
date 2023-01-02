import { LinearProgress } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import './SkillContainer.css'
const SkillContainer = () => {
  return (
    <Element id="skills" className='skillContainer'>
      
      <div className="skillConatiner__image">
        <img src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600" alt="skills image" />
      </div>


      <div className="skillContainer__text">
        <h2>SKILLSET</h2>

        <div className="skillContainer__skillset">
            <h5>React Js</h5>
             <div className="skillContainer__slider skillConatiner__slider1">
                <LinearProgress value={90} variant='determinate' />
             </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Node Js</h5>
             <div className="skillContainer__slider skillConatiner__slider2">
                <LinearProgress value={70} variant='determinate' />
             </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Express Js</h5>
             <div className="skillContainer__slider skillConatiner__slider3">
                <LinearProgress value={75} variant='determinate' />
             </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>MongoDB</h5>
             <div className="skillContainer__slider skillConatiner__slider4">
                <LinearProgress value={80} variant='determinate' />
             </div>
        </div>
      </div>
      
    </Element>
  )
}

export default SkillContainer
