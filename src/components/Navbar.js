import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="container-fluid navbar_content">
        
        <div className="navbar_logo">
          <img src={logo} alt="logo" width="30" height="auto" className="" />
          <span className="">deependra</span>
        </div>
        
        <div className="">
          <NavLink to='/' className="">Home</NavLink>
          <NavLink to='/about' className="">About</NavLink>
          <NavLink to='/projects' className="">Projects</NavLink>
        </div>
        
        <div>
          <NavLink to='#' className="">
            <button className=''>Contact me</button>
          </NavLink>
        </div>

      </div>
  </nav>
  )
}

export default Navbar