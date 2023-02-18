import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Users from '../Users/Users'
import Login from '../Login/Login'
import { Routes, Route, useNavigate,  } from 'react-router-dom'


import "./App.scss"



export default function App() {
const navigate = useNavigate()
  const [data, setData] = useState([])

  const onSubmit = (values, { resetForm }) =>{
    setData([...data, values])
    navigate("./users")
    resetForm()
   
  }

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' extend element={<Home />}></Route>
            <Route path='/login' element={<Login  onSubmit = {onSubmit}/>}></Route>
            <Route path='/users' element={<Users user = { data }/>}></Route>
        </Routes>
        
    </div>
  )
}

