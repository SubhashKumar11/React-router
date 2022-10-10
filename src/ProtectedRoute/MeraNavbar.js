import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Home from './Home'
const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>start of NavLink</h1>
       <div>
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink  to="/ram">Ram</NavLink>

       </div>
      <h1>end of navlink</h1>
      =i am nav bar i am on each page so put me just below BrowserRouter
      <div> <Link to="/">Go to Hompage</Link></div>
     
     <li> <Link className='nav-bar-link' to="/about">About</Link></li>
 

    </div>

  )
}

export default NavBar
