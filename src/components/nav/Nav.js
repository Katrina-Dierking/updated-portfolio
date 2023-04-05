import React from 'react'
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img src={home} alt="home icon" />
            <Link to="/" className="title">
              HOME
            </Link>
          </Link>
        </div>

        <div className="profile">
          <Link to="/about">
            <img src={about} alt="about icon" />
              <Link to="/about" className="title">
              ABOUT
              </Link>
            </Link>
        </div>

        <div className="profile">
          <Link to="/projects">
            <img src={projects} alt="projects icon" />
            <Link to="/projects" className="title">
              PROJECTS
            </Link>
          </Link>
        </div>

        <div className="profile">
          <Link to="/resume">
            <img src={resume} alt="resume icon" />
            <Link to="/resume" className="title">
              RESUME
            </Link>
          </Link>
        </div>
      </div>
    </nav>
  );
}
