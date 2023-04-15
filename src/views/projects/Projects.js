import React from 'react'
import { Link } from 'react-router-dom';
import './project.scss'
import up from '../../assets/images/up-arrow.png'


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

   
      <div className="projectGallery">
        <div className="project">
          <img src="#" alt="img" />
          <h5>Title</h5>
          <p>Description</p>
          <a href="#">Link</a>
        </div>
        <div className="project">
          <img src="#" alt="img" />
          <h5>Title</h5>
          <p>Description</p>
          <a href="#">Link</a>
        </div>
        <div className="project">
          <img src="#" alt="img" />
          <h5>Title</h5>
          <p>Description</p>
          <a href="#">Link</a>
        </div>
        <div className="project">
          <img src="#" alt="img" />
          <h5>Title</h5>
          <p>Description</p>
          <a href="#">Link</a>
        </div>
      </div>
    </section>
  );
    }
    
    export default Projects