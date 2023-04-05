import React from 'react'
import Projects from '../../views/projects/Projects'
import Layout from '../layout/Layout'
import './main.scss'

function Main() {
  return (
    <Layout>
      <section className='main'>

        <section className='mainTop'>
          <h2>KATRINA DIERKING</h2>
          <p>SOFTWARE ENGINEER | MASTER CRAFTER | COFFEE ADDICT</p>
        </section>

        <section className='mainBottom'>
          <div className='butLeft'>
            <button>NEED A WEBSITE?</button>
          </div>

          <div className='butRight'>
            <button>NEED A DEVELOPER?</button>
          </div>
        </section>

        
        </section>
        <section className='quote effect2'>
          <h3>Let's build something great together!</h3>
        </section>
        <Projects />

    </Layout>
  )
}

export default Main