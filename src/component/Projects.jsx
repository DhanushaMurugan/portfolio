import React from 'react'
import '../style/projects.css'
import foodpanda from"../image/foodpanda.jpeg"
import heaven from"../image/heaven.jpeg"
function Projects() {
  return (
    <div className="projects-container">
      <div className="project-title">
        <h2>Projects</h2>
      </div>
      <div className='project-detail'>
      <div className="projects-detail-1">
        <img src={foodpanda} alt="foodpanda-img" width="500vw" />
      </div>
      <div className="projects-detail-2">
        <img src={heaven} alt="heaven" width="500vw" />
      </div>
      </div>
      <div className='projects-end-line'>
        <hr></hr>
      </div>
    </div>
  );
}

export default Projects