import * as React from 'react';
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


function ResponsiveAppBar() {

 

  return (
    <div className='navbar_container'>
     <div className="logo">
            <NavLink to='/'><button className='btn'>My Work</button></NavLink>
     </div>
     <div className="navlinks">
     <NavLink to='/'><button className='btn'>My Work</button></NavLink>
     <NavLink to='/About'><button className='btn'>My Work</button></NavLink>
     <NavLink to='/Projects'><button className='btn'>My Work</button></NavLink>
     </div>
     <div className="contact">
     <NavLink to='#'><button className='btn'>My Work</button></NavLink>
     </div>
    </div>
  );
}
export default ResponsiveAppBar;