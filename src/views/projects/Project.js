import React from 'react'
import './proCard.scss'

function Project({title, description}) {
  return (
   <section className='projectCard'>
       <h3> {title}</h3>
       <p>{description}</p>
    </section>
  )
}

export default Project