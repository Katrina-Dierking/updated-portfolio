import React from 'react'
import './proCard.scss'

function Project({title, subtitle, description, github, live}) {
  return (
   <section className='projectCard'>
       <h3> {title}</h3>
       <h4>{subtitle}</h4>
       <p>{description}</p>
       <div className='links'>
        <a href={github}>Github</a>
        <a href={live}>Live</a>
       
       </div>
    </section>
  )
}

export default Project