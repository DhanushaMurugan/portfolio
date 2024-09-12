import React from 'react'
import '../style/projects.css'
import foodpanda from"../image/food-panda project -2.jpeg"
import heaven from"../image/heaven-project.jpeg"
import multitasker from '../image/multitasker-project.jpeg'
function Projects() {
  return (
    <div className="projects-container">
      <div className="project-title">
        <h2>Projects</h2>
      </div>
      <div className="project-detail">
        <div className="projects-detail-1">
          <img src={foodpanda} alt="foodpanda-img" width="500vw" />
          <div className="foodpanda-sub-details">
            <h2>FoodPanda Project</h2>
            <a
              href="https://github.com/DhanushaMurugan/Foodpanda-project"
              className="foodPanda-Link"
            >
              https://github.com/DhanushaMurugan/Foodpanda-project
            </a>
          </div>
        </div>
        <div className="projects-detail-2">
          <img src={heaven} alt="heaven" width="500vw" />
          <h2>Heaven Project-Responsive Design</h2>
          <a
            href="https://github.com/DhanushaMurugan/Heaven-project"
            className="Heaven-Link"
          >
            https://github.com/DhanushaMurugan/Heaven-project
          </a>
        </div>
      </div>
      <div className='projectPart-2'>
        <div className="projects-detail-3">
          <img src={multitasker} alt="multitasker-project" width="600vw" />
          <h2>Multitasker Web Application-Responsive Design</h2>
          <a
            href="https://github.com/DhanushaMurugan/Multitasker-project"
            className="multitasker-Link"
          >
            https://github.com/DhanushaMurugan/Multitasker-project
          </a>
        </div>
      </div>

      <div className="projects-end-line">
        <hr></hr>
      </div>
    </div>
  );
}

export default Projects