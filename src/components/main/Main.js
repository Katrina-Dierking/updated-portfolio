import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../views/projects/Projects'
import Layout from '../layout/Layout'
import './main.scss'
// import './mainButt.scss'

function Main() {
  return (
    <Layout>
      <section className="main">
        <section className="mainTop">
          <h2>KATRINA DIERKING</h2>

          <p>
            <li>SOFTWARE ENGINEER</li>
            <li> MASTER CRAFTER</li>
            <li> COFFEE ADDICT</li>
          </p>
        </section>

        <section className="mainBottom">
          <div class="mainBox container-one butLeft">
            <Link to="/resume">
              <button>
                NEED A DEVELOPER?
                <div class="fill-one"></div>
              </button>
            </Link>
          </div>

          <div class="mainBox container-two butRight">
            <Link to="/contact">
              <button>
                NEED A WEBSITE?
                <div class="fill-two"></div>
              </button>
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
      // <section className="mainBottom">
      //   <div className="butLeft">
      //     <Link to="/contact">
      //       <button>NEED A WEBSITE?</button>
      //     </Link>
      //   </div>
  

      //   <div className="butRight">
      //     <Link to="/resume">
      //       <button>NEED A DEVELOPER?</button>
      //     </Link>
      //   </div>
      // </section>