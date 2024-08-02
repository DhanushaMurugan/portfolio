import React from "react";
import "../style/skills.css";
import html from "../image/html.png";
import css from "../image/css.png";
import js from "../image/java-script.png";
import reactjs from "../image/react.png";
import vscode from "../image/vsCode.png";
import bootstrap from "../image/bootsrap.jpg";
import notejs from "../image/notejs.png";
import github from "../image/github.png";

function Skills() {
  return (
    <div>
      <div className="skills-container">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-detail-1">
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={html} alt="html-icon" width="60vw" />
            </div>
            <div className="skills-name">
              <h5>HTML</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={css} alt="css-icon" width="60vw" />
            </div>
            <div className="skills-name">
              <h5>CSS</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={js} alt="js-icon" width="50vw" />
            </div>
            <div className="skills-name">
              <h5>JAVASCRIPT</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={reactjs} alt="reactjs-icon" width="55vw" />
            </div>
            <div className="skills-name">
              <h5>React.JS</h5>
            </div>
          </div>
        </div>
        <div className="skills-detail-2">
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={vscode} alt="vscode-icon" width="40vw" />
            </div>
            <div className="skills-name">
              <h5>VSCode</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={bootstrap} alt="bootstrap-icon" width="60vw" />
            </div>
            <div className="skills-name">
              <h5>Bootstrap</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={notejs} alt="notejs-icon" width="60vw" />
            </div>
            <div className="skills-name">
              <h5>Node.JS</h5>
            </div>
          </div>
          <div className="skills-sub-detail">
            <div className="skills-icon">
              <img src={github} alt="github-icon" width="60vw" />
            </div>
            <div className="skills-name">
              <h5>Github</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-end-line">
        <hr></hr>
      </div>
    </div>
  );
}

export default Skills;
