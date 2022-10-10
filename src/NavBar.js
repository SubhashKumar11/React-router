import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './NavStyle.css'
import Home from './Home'
const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>start of NavLink</h1>
       <div>
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink  to="/about">About</NavLink>

       </div>
      <h1>end of navlink</h1>
      =i am nav bar i am on each page so put me just below BrowserRouter
      <div> <Link to="/">Go to Hompage</Link></div>
     
     <li> <Link className='nav-bar-link' to="/about">About</Link></li>
      <br />
      <Link to="/User/ram">Home</Link>
      <br />
      <Link to="/User/rama">User</Link>

    </div>

  )
}

export default NavBar
