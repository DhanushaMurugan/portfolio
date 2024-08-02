import React from "react";
import "../style/About.css";
import about from "../image/aboutme.jpg";
function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-title">
          <h2>About me</h2>
        </div>
        <div className="about-content">
          <p>
            Hi, I'm Dhanusha Murugan, a frontend developer with a background in
            commerce. After completing my B.COM, I discovered my passion for
            creating responsive and user-friendly web applications, leading me
            to pursue frontend development.
          </p>
          <p>
            With skills in HTML, CSS, JavaScript, and various frameworks, I
            bring a unique perspective combining business insights with
            technical expertise. I’m always eager to learn, stay updated with
            industry trends, and collaborate with others to build high-quality
            web solutions.
          </p>
          <p>
            Explore my portfolio to see my projects and growth as a developer.
            Let’s connect!
          </p>
        </div>

        <div className="about-sub-title">
          <h2>Certification</h2>
        </div>
        <div className="sub-details">
          <p>Front-End Developer</p>
          <p>Institute : Zhahi Tech Pvt Ltd</p>
          <p>Year : 2024</p>
        </div>
      </div>
      <div className="about-img">
        <img src={about} alt="about-img" />
      </div>
      <div className="about-end">
        <hr></hr>
      </div>
    </div>
  );
}

export default About;
