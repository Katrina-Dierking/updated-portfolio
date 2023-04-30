import React from 'react'
import { Link } from 'react-router-dom';
import './project.scss'
import { projects } from '../../assets/proData';
import up from '../../assets/images/up-arrow.png'
import Project from './Project';


function Projects() {




  return (
    <section className="projectsMain">
      <Link to="/">
        <img
          src={up}
          alt="up arrow"
          className="up"
          id="up"
          onclick="topFunction()"
          title="Scroll up"
        />
      </Link>

      <div className="projBanner">
        <h3 className="animate-charcter">PROJECTS</h3>
      </div>

    <div className='projectGallery'>
    
    <div className="projects">
      {projects.map((pro, i) => (
        <Project
          props={pro}
          key={i}
          title={pro.title}
          description={pro.description}
        />
      ))}
    </div>
    </div>
    
    </section>
  );
    }
    
    export default Projects