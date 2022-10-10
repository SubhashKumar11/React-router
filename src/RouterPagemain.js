import React from 'react'

import {BrowserRouter as Router,Navigate,Route,Routes} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About'
import NavBar from './NavBar'
import User from './User';
import UseNavigate from './UseNavigate';
const RouterPagemain = () => {
  const navToPage = (url)=>{
    Navigate(url)
  }
  return (
    <Router>
         <NavBar/>
            
             <UseNavigate/>
       <Routes>
           <Route exact path="/" onClick={navToPage} element={<Home/>} />
           <Route  path="/about" element={<About/>} />
           <Route  path="/user" element={<User/>} />
       </Routes>
   </Router>
  )
}

export default RouterPagemain