import React from 'react'
import '../style/Header.css'
import profile from'../image/profile.png'
function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <p>Hi there,</p>
          <h2>I'm Dhanusha Murugan</h2>
          <h5>Front-end Developer...</h5>
          <hr></hr>
        </div>

        <div className="header-button">
          <button className="contact-button">Contact Me</button>
          <button className="download-button">Download Resume</button>
        </div>
        <div className="header-end">
          <hr></hr>
        </div>
      </div>
      <div className='profile'>
        <img src={profile} alt='profile-img' width="300vw"/>
      </div>
    </div>
  );
}

export default Header