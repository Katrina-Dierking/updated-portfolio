import React from 'react'
import './proCard.scss'

function Project({title, description}) {
  return (
   <section className='projectCard'>
       <h3>Title: {title}</h3>
       <p>Description: {description}</p>
    </section>
  )
}

export default Project