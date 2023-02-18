import React from 'react'
import { Navigate } from 'react-router';
import FSBN from '../image/FSBN_CP.png'

import "./Home.scss";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const goToLogin = ()=>{
    navigate("./login")
  }
  return (
    <div className='home_container'>
        <div>
          <h1>Please login to continue</h1>
          <button onClick={goToLogin}>Login</button>
        </div>
        <div className='logo'>
          <img src={FSBN} alt="Copy & Past" />
        </div>
    </div>
  )
}
