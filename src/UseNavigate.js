import React from 'react'
import { useNavigate } from 'react-router'
const UseNavigate = () => {
    const navigate = useNavigate()
    const navToPage = (url)=>{
        navigate(url)
      }
  return (
    <div>

        <button onClick={()=>navToPage('/')}>Homes</button><br />
         <button onClick={()=>navToPage('/about')}>About</button>
    </div>
  )
}

export default UseNavigate
