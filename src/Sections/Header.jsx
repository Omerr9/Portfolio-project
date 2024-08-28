import React from 'react'
import './Header.css'

export default function Head() {
  return (
    <div className='navbar'>
      <h2>OMER</h2>
      <ul className="nav">
        <li className="nav-items active">Home</li>
        <li className="nav-items">Services</li>
        <li className="nav-items">Projects</li>
      </ul>
      <button className='btn'>Lets Chat</button>
    </div>
  )
}
