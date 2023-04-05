import React from 'react'
import './nav.scss'

import home from '../../images/home.png'
import about from '../../images/about.png'
import projects from '../../images/projects.png'
import resume from '../../images/resume.png'

export const Nav = () => {
  return (
    <nav className="topNav container">
      <div className="container">
        <div className="profile">
          <img src={home} alt="home icon" />
          <a href="https://google.com" className="title">
            HOME
          </a>
        </div>

        <div className="profile">
          <img src={about} alt="about icon" />
          <a href="https://google.com" className="title">
            ABOUT
          </a>
        </div>

        <div className="profile">
          <img src={projects} alt="projects icon" />
          <a href="https://google.com" className="title">
            PROJECTS
          </a>
        </div>

        <div className="profile">
          <img src={resume} alt="resume icon" />
          <a href="https://google.com" className="title">
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
