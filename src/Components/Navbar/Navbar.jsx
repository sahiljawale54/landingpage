import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar' id='navbar'> 

      <div className="n-left">
        <p>EARTHLY.COM</p>
      </div>
      
      <div className="n-right">
        <ul className='n-list'>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <button className='btn n-btn'>Get in Touch</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
