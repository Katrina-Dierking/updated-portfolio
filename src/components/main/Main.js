import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../views/projects/Projects'
import Layout from '../layout/Layout'
import './main.scss'
import coffee from '../../images/hotCoffee.png'

function Main() {
  return (
    <Layout>
      <section className="main">
        <section className="mainTop">
          <h2>KATRINA DIERKING</h2>

          <p>
            SOFTWARE ENGINEER
            <li> MASTER CRAFTER</li>
            <li> COFFEE ADDICT</li>
          </p>
        </section>

        <section className="mainBottom">
          <div className="butLeft">
            <Link to="/contact">
              <button>NEED A WEBSITE?</button>
            </Link>
          </div>

          <div className="butRight">
            <Link to="/resume">
              <button>NEED A DEVELOPER?</button>
            </Link>
          </div>
        </section>
      </section>
      <section className="quote effect2">
        <h3>Let's build something great together!</h3>
      </section>
      <Projects />
    </Layout>
  );
}

export default Main