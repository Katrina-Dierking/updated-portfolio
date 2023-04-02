import React from 'react'
import Layout from '../layout/Layout'
import './main.scss'

function Main() {
  return (
    <Layout>
      <section className='main'>

        <section className='mainTop'>
          <h2>Katrina DIERKING</h2>
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
    </Layout>
  )
}

export default Main