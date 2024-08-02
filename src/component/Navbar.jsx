import React from 'react'
import '../style/Navbar.css'

function Navbar() {
  return (
    <div class="Nav-bar">
      <div class="Nav-Brand">
        <h1>Dhanusha Murugan</h1>
      </div>
      <div className='Nav-Menu'>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <h1>Contact</h1>
      </div>
      </div>
    </div>
  );
}

export default Navbar