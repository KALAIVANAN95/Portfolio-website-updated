import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Projects/Project'
import './ProjectContainer.css'

const ProjectContainer = () => {

    const client_projects = [
        {
            img:"https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"University Project",
            des:"You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.",
            link:"www.google.com"
        },
        {
            img:"https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Flower Slider",
            des:"You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.",
            link:"www.google.com"
        },
        {
            img:"https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"E-Commerce",
            des:"You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.",
            link:"www.google.com"
        },
        {
            img:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Development",
            des:"You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.",
            link:"www.google.com"
        }
    ]
  return (
    <Element className='projectContainer' id="projects">
      <h1>Projects</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum doloremque voluptatibus. Quidem nemo consectetur perferendis eius error ducimus nostrum?</p>
   
        <div className="projectContainer__projects">
{
  client_projects.map((projects,index)=>{
    let {img,des,title,link}=projects
    return(
      <Project 
      key={index}
      img={img}
      title={title}
      des={des}
      link={link}
      />
    )
  })
}
        </div>
    </Element>
  )
}

export default ProjectContainer
