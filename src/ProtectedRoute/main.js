import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Home'
import LoginPage from './LoginPage'
import Protected from './Protected'
import Ram from './Ram'
import NavBar from './MeraNavbar'
const Main = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<Protected Component={Home} /> }/>
            <Route path="/ram" element={<Protected Component={Ram} /> }/>
           
        </Routes>
      </Router>
    </div>
  )
}

export default Main
