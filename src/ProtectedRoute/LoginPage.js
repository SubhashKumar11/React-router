import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router'
const LoginPage = () => {
    const login = ()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    })
  return (
    <div>
       <h1>login page</h1>
       <input type="text" />
       <button onClick={login}>login</button>
    </div>
  )
}

export default LoginPage
